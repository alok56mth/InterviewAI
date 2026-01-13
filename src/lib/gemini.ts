const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
import { getRandomFrontendQuestions } from "./frontendQuestions";
import { getRandomBackendQuestions } from "./backendQuestions";
import { getRandomDevOpsQuestions } from "./devopsQuestions";
import { getRandomUIUXQuestions } from "./uiuxQuestions";
import { getRandomDataScienceQuestions } from "./dataScienceQuestions";
import { getRandomSecurityQuestions } from "./securityQuestions";
import { getCorrectAnswer } from "./answerBank";
import { clearOldQuestionHistory, generateSessionSeed } from "./questionRandomizer";

export interface InterviewQuestion {
  question: string;
  expectedTopics: string[];
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface InterviewFeedback {
  score: number;
  strengths: string[];
  improvements: string[];
  overallFeedback: string;
  correctAnswer?: string;
}

export async function generateInterviewQuestions(
  role: string,
  experienceLevel: string,
  questionCount: number = 5,
  jobDescription?: string,
  technologies?: string
): Promise<InterviewQuestion[]> {
  console.log('Generating questions for:', { role, experienceLevel, technologies });

  // Clear localStorage questions to get fresh ones
  localStorage.removeItem('usedQuestions');

  const jdContext = jobDescription
    ? `\n\nJob Description provided:\n"${jobDescription}"\n\nFocus on skills and requirements mentioned in this JD.`
    : '';

  const techContext = technologies
    ? `\n\nTechnologies/Skills to focus on: ${technologies}\n\nMake sure to ask specific technical questions about these technologies.`
    : '';

  const sessionId = `${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;

  const levelInstructions = {
    'fresher': 'Focus on BASIC concepts, fundamentals, and entry-level scenarios. Avoid complex system design.',
    'entry-level': 'Focus on BASIC concepts, fundamentals, and entry-level scenarios. Avoid complex system design.',
    'junior': 'Mix of basic and intermediate concepts. Simple problem-solving scenarios.',
    'mid-level': 'Intermediate to advanced concepts. Real-world problem solving.',
    'senior': 'Advanced concepts, system design, architecture, and leadership scenarios.',
    'lead': 'Advanced system design, architecture decisions, and team leadership scenarios.'
  };

  const levelInstruction = levelInstructions[experienceLevel.toLowerCase() as keyof typeof levelInstructions] || levelInstructions['mid-level'];

  // Role-specific question prompts
  const roleSpecificPrompts = {
    'backend': 'Focus on server-side development, databases, APIs, system design, and backend technologies.',
    'frontend': 'Focus on client-side development, UI/UX, JavaScript frameworks, and frontend technologies.',
    'fullstack': 'Mix of both frontend and backend questions covering full-stack development.',
    'mobile': 'Focus on mobile app development, platform-specific technologies, and mobile best practices.',
    'devops': 'Focus on deployment, CI/CD, infrastructure, monitoring, and DevOps practices.',
    'data': 'Focus on data analysis, databases, data processing, and analytics.'
  };

  const rolePrompt = Object.keys(roleSpecificPrompts).find(key =>
    role.toLowerCase().includes(key)
  ) ? roleSpecificPrompts[Object.keys(roleSpecificPrompts).find(key =>
    role.toLowerCase().includes(key)
  ) as keyof typeof roleSpecificPrompts] : 'Focus on general software development concepts.';

  const prompt = `You are a senior technical interviewer at a top tech company. Generate ${questionCount} COMPLETELY UNIQUE and FRESH interview questions for a ${experienceLevel} ${role} position.${jdContext}${techContext}

ROLE FOCUS: ${rolePrompt}
EXPERIENCE LEVEL FOCUS: ${levelInstruction}

UNIQUE SESSION: ${sessionId}
TIMESTAMP: ${Date.now()}
RANDOM: ${Math.floor(Math.random() * 10000)}

IMPORTANT: Generate completely NEW and CREATIVE questions specific to ${role}. Avoid generic questions.

Format as JSON array:
[
  {
    "question": "Creative, role-specific, real-world question",
    "expectedTopics": ["topic1", "topic2"],
    "difficulty": "easy/medium/hard"
  }
]

Only return the JSON array.`;

  try {
    console.log('Making API call to Gemini...');
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.9,
            maxOutputTokens: 2048,
          },
        }),
      }
    );

    console.log('API Response status:', response.status);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    console.log('API Response data:', data);

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    console.log('Generated text:', text);

    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      const questions = JSON.parse(jsonMatch[0]);
      console.log('Parsed questions:', questions);
      return questions;
    }

    throw new Error('Failed to parse questions from API response');
  } catch (error) {
    console.error('Error generating questions:', error);
    console.log('Using local question bank as fallback...');

    // Use local question bank as fallback
    const techKey = technologies?.toLowerCase() || role.toLowerCase();

    console.log('Role:', role, 'Technologies:', technologies, 'TechKey:', techKey);

    // Full Stack - combine Frontend and Backend questions
    if (role.toLowerCase().includes('full stack') || role.toLowerCase().includes('fullstack') || role.toLowerCase().includes('full-stack')) {
      const frontendTechs = ['react', 'javascript', 'html', 'css'];
      const backendTechs = ['node.js', 'express', 'mongodb'];

      // Split questions between frontend and backend (50-50)
      const frontendCount = Math.ceil(questionCount / 2);
      const backendCount = questionCount - frontendCount;

      const frontendQuestions = getRandomFrontendQuestions(frontendTechs, experienceLevel, frontendCount);
      const backendQuestions = getRandomBackendQuestions(backendTechs, experienceLevel, backendCount);

      // Combine and shuffle
      const allQuestions = [...frontendQuestions, ...backendQuestions];
      const shuffled = allQuestions.sort(() => Math.random() - 0.5);

      console.log('Using Full Stack questions (Frontend + Backend):', shuffled);
      return shuffled;
    }

    // Use the comprehensive question banks
    if (role.toLowerCase().includes('frontend') || techKey.includes('react') || techKey.includes('html') || techKey.includes('css') || techKey.includes('javascript')) {
      const frontendTechs = technologies ? technologies.split(',').map(t => t.trim()) : ['react'];
      const frontendQuestions = getRandomFrontendQuestions(frontendTechs, experienceLevel, questionCount);
      console.log('Using frontend questions:', frontendQuestions);
      return frontendQuestions;
    } else if (role.toLowerCase().includes('backend') || techKey.includes('node') || techKey.includes('python') || techKey.includes('django') || techKey.includes('fastapi') || techKey.includes('express') || techKey.includes('mongo')) {
      const backendTechs = technologies ? technologies.split(',').map(t => t.trim()) : ['node.js'];
      const backendQuestions = getRandomBackendQuestions(backendTechs, experienceLevel, questionCount);
      console.log('Using backend questions:', backendQuestions);
      return backendQuestions;
    } else if (role.toLowerCase().includes('devops') || techKey.includes('docker') || techKey.includes('kubernetes') || techKey.includes('aws') || techKey.includes('terraform') || techKey.includes('jenkins') || techKey.includes('ansible') || techKey.includes('linux') || techKey.includes('cicd') || techKey.includes('ci/cd')) {
      const devopsTechs = technologies ? technologies.split(',').map(t => t.trim()) : ['docker', 'kubernetes', 'aws'];
      const devopsQuestions = getRandomDevOpsQuestions(devopsTechs, experienceLevel, questionCount);
      console.log('Using devops questions:', devopsQuestions);
      return devopsQuestions;
    } else if (role.toLowerCase().includes('ui') || role.toLowerCase().includes('ux') || role.toLowerCase().includes('designer') || techKey.includes('figma') || techKey.includes('design') || techKey.includes('prototype')) {
      const uiuxTechs = technologies ? technologies.split(',').map(t => t.trim()) : ['ui', 'ux', 'design'];
      const uiuxQuestions = getRandomUIUXQuestions(uiuxTechs, experienceLevel, questionCount);
      console.log('Using UI/UX questions:', uiuxQuestions);
      return uiuxQuestions;
    } else if (role.toLowerCase().includes('data') || role.toLowerCase().includes('scientist') || role.toLowerCase().includes('analyst') || role.toLowerCase().includes('ml') || role.toLowerCase().includes('machine learning') || techKey.includes('python') || techKey.includes('pandas') || techKey.includes('sklearn') || techKey.includes('tensorflow') || techKey.includes('pytorch') || techKey.includes('statistics')) {
      const dataScienceTechs = technologies ? technologies.split(',').map(t => t.trim()) : ['data', 'science', 'ml'];
      const dataScienceQuestions = getRandomDataScienceQuestions(dataScienceTechs, experienceLevel, questionCount);
      console.log('Using Data Science questions:', dataScienceQuestions);
      return dataScienceQuestions;
    } else if (role.toLowerCase().includes('security') || role.toLowerCase().includes('cyber') || role.toLowerCase().includes('infosec') || role.toLowerCase().includes('penetration') || techKey.includes('firewall') || techKey.includes('encryption') || techKey.includes('network') || techKey.includes('owasp')) {
      const securityTechs = technologies ? technologies.split(',').map(t => t.trim()) : ['security', 'cyber', 'infosec'];
      const securityQuestions = getRandomSecurityQuestions(securityTechs, experienceLevel, questionCount);
      console.log('Using Security questions:', securityQuestions);
      return securityQuestions;
    }

    // Final fallback - return basic questions
    return [
      {
        question: 'Tell me about a challenging project you worked on recently.',
        expectedTopics: ['project experience', 'problem solving'],
        difficulty: 'easy' as const
      },
      {
        question: 'How do you approach debugging complex issues?',
        expectedTopics: ['debugging', 'problem solving'],
        difficulty: 'medium' as const
      },
      {
        question: 'Describe your experience with version control systems.',
        expectedTopics: ['git', 'collaboration'],
        difficulty: 'easy' as const
      }
    ].slice(0, questionCount);
  }
}

export async function evaluateAnswer(
  question: string,
  answer: string,
  expectedTopics: string[],
  role: string
): Promise<InterviewFeedback> {
  const prompt = `You are an expert technical interviewer evaluating a candidate for a ${role} position.

Question: "${question}"

Expected topics to cover: ${expectedTopics.join(', ')}

Candidate's answer: "${answer}"

Evaluate the answer and provide feedback in the following JSON format:
{
  "score": <number from 1-10>,
  "strengths": ["strength1", "strength2"],
  "improvements": ["improvement1", "improvement2"],
  "overallFeedback": "Brief overall assessment"
}

Be constructive and specific. Only return the JSON, no other text.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.5,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const feedback = JSON.parse(jsonMatch[0]);
      feedback.correctAnswer = await getCorrectAnswer(question);
      return feedback;
    }

    throw new Error('Failed to parse feedback');
  } catch (error) {
    console.error('Error evaluating answer:', error);
    return {
      score: 5,
      strengths: ['Attempted to answer the question'],
      improvements: ['Could provide more specific examples'],
      overallFeedback: 'Please try again with a more detailed response.',
      correctAnswer: await getCorrectAnswer(question)
    };
  }
}

export async function generateFinalReport(
  role: string,
  answers: { question: string; answer: string; feedback: InterviewFeedback }[]
): Promise<{
  overallScore: number;
  summary: string;
  topStrengths: string[];
  areasToImprove: string[];
  recommendation: string;
}> {
  const prompt = `You are an expert interviewer providing a final assessment for a ${role} position.

Here are the candidate's responses and individual feedback:

${answers.map((a, i) => `
Question ${i + 1}: ${a.question}
Answer: ${a.answer}
Score: ${a.feedback.score}/10
`).join('\n')}

Provide a comprehensive final report in this JSON format:
{
  "overallScore": <weighted average score 1-10>,
  "summary": "2-3 sentence executive summary",
  "topStrengths": ["strength1", "strength2", "strength3"],
  "areasToImprove": ["area1", "area2"],
  "recommendation": "Hiring recommendation: Strong Hire / Hire / Maybe / No Hire with brief reasoning"
}

Only return the JSON, no other text.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.5,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }

    throw new Error('Failed to generate report');
  } catch (error) {
    console.error('Error generating report:', error);
    const avgScore = answers.reduce((acc, a) => acc + a.feedback.score, 0) / answers.length;
    return {
      overallScore: Math.round(avgScore * 10) / 10,
      summary: 'Interview completed. Please review individual question feedback for details.',
      topStrengths: ['Completed the interview'],
      areasToImprove: ['Practice more interview questions'],
      recommendation: 'Further evaluation needed',
    };
  }
}