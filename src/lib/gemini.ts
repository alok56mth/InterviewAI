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
  // Calculate keyword coverage for baseline scoring
  const answerLower = answer.toLowerCase();
  const topicsFound = expectedTopics.filter(topic =>
    answerLower.includes(topic.toLowerCase())
  );
  const keywordCoverage = expectedTopics.length > 0
    ? (topicsFound.length / expectedTopics.length) * 100
    : 50;

  // Calculate answer length bonus (longer, detailed answers score higher)
  const wordCount = answer.trim().split(/\s+/).length;
  const lengthScore = wordCount < 10 ? 0 : wordCount < 30 ? 1 : wordCount < 60 ? 2 : wordCount < 100 ? 3 : 4;

  const prompt = `You are a senior technical interviewer evaluating a ${role} candidate. 
Use this STRICT SCORING RUBRIC:

**SCORING CRITERIA (Total: 10 points)**

1. TOPIC COVERAGE (0-4 points):
   - 0 points: No relevant topics mentioned
   - 1 point: 1-25% of expected topics covered
   - 2 points: 26-50% of expected topics covered  
   - 3 points: 51-75% of expected topics covered
   - 4 points: 76-100% of expected topics covered

2. TECHNICAL ACCURACY (0-3 points):
   - 0 points: Major errors or completely wrong
   - 1 point: Some correct concepts but with errors
   - 2 points: Mostly accurate with minor issues
   - 3 points: Fully accurate and correct

3. DEPTH & EXAMPLES (0-2 points):
   - 0 points: No explanation or examples
   - 1 point: Basic explanation OR one example
   - 2 points: Detailed explanation WITH examples

4. CLARITY & STRUCTURE (0-1 point):
   - 0 points: Unclear, disorganized, hard to follow
   - 1 point: Clear, well-structured, easy to understand

**AUTOMATIC PENALTIES:**
- Empty or very short answer (< 10 words): Maximum score = 2
- Off-topic or irrelevant answer: Maximum score = 3
- Wrong information: Deduct 2 points

---

**Question:** "${question}"

**Expected Topics to Cover:** ${expectedTopics.join(', ')}

**Keyword Coverage Analysis:** ${topicsFound.length}/${expectedTopics.length} topics found (${Math.round(keywordCoverage)}%)
**Topics Found:** ${topicsFound.length > 0 ? topicsFound.join(', ') : 'None'}
**Topics Missing:** ${expectedTopics.filter(t => !answerLower.includes(t.toLowerCase())).join(', ') || 'None'}

**Candidate's Answer:** "${answer}"
**Word Count:** ${wordCount} words

---

Evaluate using the rubric above. Calculate each component score, then sum for total.

Return ONLY this JSON:
{
  "score": <calculated total 1-10>,
  "topicScore": <0-4>,
  "accuracyScore": <0-3>,
  "depthScore": <0-2>,
  "clarityScore": <0-1>,
  "strengths": ["specific strength 1", "specific strength 2"],
  "improvements": ["specific improvement needed 1", "specific improvement needed 2"],
  "overallFeedback": "2-3 sentence detailed assessment with specific advice"
}`;

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
            temperature: 0.3, // Lower temperature for more consistent scoring
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

      // Validate and cap score
      feedback.score = Math.min(10, Math.max(1, Math.round(feedback.score)));

      // Apply length penalty for very short answers
      if (wordCount < 10) {
        feedback.score = Math.min(feedback.score, 2);
        feedback.improvements = feedback.improvements || [];
        feedback.improvements.unshift('Answer is too short - provide more detail');
      }

      feedback.correctAnswer = await getCorrectAnswer(question);
      return feedback;
    }

    throw new Error('Failed to parse feedback');
  } catch (error) {
    console.error('Error evaluating answer:', error);

    // Enhanced fallback scoring based on keyword coverage
    let fallbackScore = 1;
    if (keywordCoverage >= 75) fallbackScore = 7 + lengthScore > 2 ? 1 : 0;
    else if (keywordCoverage >= 50) fallbackScore = 5 + lengthScore > 2 ? 1 : 0;
    else if (keywordCoverage >= 25) fallbackScore = 3 + lengthScore > 1 ? 1 : 0;
    else if (wordCount > 30) fallbackScore = 3;
    else fallbackScore = 2;

    return {
      score: Math.min(10, fallbackScore),
      strengths: topicsFound.length > 0
        ? [`Mentioned relevant topics: ${topicsFound.join(', ')}`]
        : ['Attempted to answer the question'],
      improvements: [
        `Cover more expected topics: ${expectedTopics.filter(t => !answerLower.includes(t.toLowerCase())).slice(0, 3).join(', ')}`,
        'Provide specific examples from your experience'
      ],
      overallFeedback: `Your answer covered ${Math.round(keywordCoverage)}% of expected topics. Focus on addressing the specific concepts asked in the question.`,
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
  // Calculate locally FIRST for instant display (no waiting for API)
  const avgScore = answers.reduce((acc, a) => acc + (a.feedback?.score || 5), 0) / answers.length;
  const roundedScore = Math.round(avgScore * 10) / 10;

  // Extract all strengths and improvements from individual answers
  const allStrengths = answers.flatMap(a => a.feedback?.strengths || []);
  const allImprovements = answers.flatMap(a => a.feedback?.improvements || []);

  // Get unique top strengths (first 3)
  const uniqueStrengths = [...new Set(allStrengths)].slice(0, 3);
  const uniqueImprovements = [...new Set(allImprovements)].slice(0, 3);

  // Generate recommendation based on score
  let recommendation = '';
  if (roundedScore >= 8) {
    recommendation = `Strong Hire - Excellent performance with ${roundedScore}/10 average. Demonstrated strong ${role} skills.`;
  } else if (roundedScore >= 6) {
    recommendation = `Hire - Good performance with ${roundedScore}/10 average. Has solid fundamentals with room to grow.`;
  } else if (roundedScore >= 4) {
    recommendation = `Maybe - Average performance with ${roundedScore}/10. Needs more preparation and practice.`;
  } else {
    recommendation = `No Hire - Below expectations with ${roundedScore}/10. Significant improvement needed.`;
  }

  // Generate summary based on performance
  const summary = roundedScore >= 7
    ? `Strong interview performance for ${role} position. Demonstrated good understanding of core concepts with ${answers.length} questions answered.`
    : roundedScore >= 5
      ? `Moderate interview performance for ${role} position. Shows potential but needs improvement in key areas.`
      : `Interview performance needs significant improvement. Focus on strengthening fundamental ${role} concepts.`;

  // Return LOCAL result immediately (no waiting)
  const localReport = {
    overallScore: roundedScore,
    summary,
    topStrengths: uniqueStrengths.length > 0 ? uniqueStrengths : ['Completed the interview', 'Showed willingness to learn'],
    areasToImprove: uniqueImprovements.length > 0 ? uniqueImprovements : ['Practice more interview questions', 'Provide more detailed examples'],
    recommendation
  };

  // Optionally try AI enhancement (but don't wait for it)
  // Return local result immediately for fast UX
  return localReport;
}
