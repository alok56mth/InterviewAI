const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatResponse {
  message: string;
  suggestions?: string[];
}

// Platform Knowledge Base - Works without API
const PLATFORM_KNOWLEDGE = {
  // Login & Authentication
  login: `**How to Login to InterviewAI:**

1. Click the **"Sign In"** button in the top navigation bar
2. You can sign in using:
   - Email and password
   - Google account (recommended for quick access)
   - Other social login options
3. If you don't have an account, click **"Sign Up"** to create one
4. After login, you'll be redirected to your Dashboard

💡 **Tip:** Stay signed in for a seamless experience across sessions!`,

  signup: `**How to Create an Account:**

1. Click **"Sign Up"** or **"Get Started"** button
2. Enter your email address
3. Create a secure password
4. Verify your email (check inbox)
5. Complete your profile setup
6. You're ready to start practicing!

🎉 It takes less than 30 seconds to get started!`,

  // Interview Practice
  practice: `**How to Practice Mock Interviews:**

1. **Go to Dashboard** → Click "Start New Interview" or visit Interview Setup
2. **Select Your Role:** Choose from Frontend Developer, Backend Developer, Fullstack Developer, DevOps Engineer, Data Scientist, UI/UX Designer, and more
3. **Choose Experience Level:** Fresher (0-1 years), Junior (1-3 years), Mid-Level (3-5 years), Senior (5-8 years), or Lead/Principal (8+ years)
4. **Set Question Count:** Pick how many questions you want to practice (5-15 recommended)
5. **Start Interview:** Our AI generates role-specific questions tailored to you
6. **Answer Questions:** Record your responses (audio/video options available)
7. **Get Instant Feedback:** Receive AI-powered scoring and improvement tips

🎯 Practice regularly to track your progress!`,

  // Features
  features: `**InterviewAI Platform Features:**

🧠 **AI-Powered Questions**
Gemini AI generates role-specific questions tailored to your experience level and target position.

🎯 **Personalized Practice**
Select your role, experience level, and question count for a customized interview experience.

📊 **Instant Feedback**
Get detailed scoring and actionable improvement suggestions after each answer.

⚡ **Real-Time Analysis**
Receive immediate evaluation of your responses with AI-driven insights.

📈 **Comprehensive Reports**
Track your progress with detailed performance reports and hiring recommendations.

⚡ **Lightning Fast**
No waiting. Start practicing immediately and get results in seconds.`,

  // Dashboard
  dashboard: `**Your Dashboard Features:**

📊 **Performance Overview**
- View your average scores across all interviews
- Track improvement over time with visual charts

📝 **Interview History**
- Access all your past mock interviews
- Review questions and your responses
- See detailed feedback for each session

🏆 **Stats & Analytics**
- Total interviews completed
- Average score percentage
- Strengths and areas for improvement

📈 **Progress Tracking**
- Week-over-week improvement
- Role-specific performance metrics

💡 Access your dashboard from the navigation bar after logging in!`,

  // Roles
  roles: `**Available Interview Roles:**

👨‍💻 **Frontend Developer** - React, Vue, Angular, JavaScript, CSS, HTML
👨‍💻 **Backend Developer** - Node.js, Python, Java, APIs, Databases
💻 **Fullstack Developer** - Both frontend and backend technologies
🔧 **DevOps Engineer** - CI/CD, Docker, Kubernetes, Cloud platforms
📊 **Data Scientist** - Python, ML, Statistics, Data Analysis
🎨 **UI/UX Designer** - User research, wireframing, prototyping
🔒 **Security Engineer** - Cybersecurity, penetration testing, security best practices

Each role has customized questions relevant to that specific position!`,

  // Experience levels
  experience: `**Experience Levels Available:**

🌱 **Fresher (0-1 years)** - Entry-level questions, fundamental concepts
📚 **Junior (1-3 years)** - Basic to intermediate technical questions
💼 **Mid-Level (3-5 years)** - Advanced concepts, system design basics
🚀 **Senior (5-8 years)** - Complex problems, architecture, leadership
👑 **Lead/Principal (8+ years)** - Strategic thinking, team management, advanced architecture

Questions are tailored to match your experience level!`,

  // Tips
  tips: `**General Interview Tips:**

✅ **Before the Interview:**
- Research the company thoroughly
- Review the job description
- Prepare your STAR stories (Situation, Task, Action, Result)
- Practice common questions

✅ **During the Interview:**
- Listen carefully to questions
- Take a moment to think before answering
- Structure your responses clearly
- Ask clarifying questions if needed

✅ **Technical Interviews:**
- Think out loud while solving problems
- Discuss your approach before coding
- Consider edge cases
- Optimize after getting a working solution

✅ **Behavioral Interviews:**
- Use specific examples from your experience
- Quantify your achievements when possible
- Be honest and authentic
- Show enthusiasm for the role`,

  contact: `**Contact & Support:**

📧 You can reach us through the **Contact** page on our website
💬 For quick help, use this chatbot!
🌐 Visit our homepage for more information

We're here to help you succeed in your interviews!`,

  // Conversational responses
  greeting: `Hello! 👋 I'm your AI Interview Coach, here to help you ace your next interview!

How can I assist you today? I can help with:
- 🎯 Mock interview practice
- 💡 Interview tips and strategies
- 📝 Resume guidance
- 🚀 Platform navigation

Just ask me anything!`,

  howAreYou: `I'm doing great, thank you for asking! 😊

I'm always ready and excited to help you prepare for your interviews. Whether you need practice questions, career advice, or platform guidance - I'm here for you!

How can I help you today?`,

  thanks: `You're welcome! 🙌 I'm always happy to help!

Is there anything else you'd like to know about interview preparation or using InterviewAI? I'm here whenever you need me!`,

  goodbye: `Goodbye! 👋 Best of luck with your interview preparation!

Remember: **Practice makes perfect!** Come back anytime you need help. You've got this! 💪

See you soon!`,

  whoAreYou: `I'm your **AI Interview Coach** 🤖 - an intelligent assistant built into InterviewAI!

**What I can do:**
- Help you practice mock interviews
- Provide interview tips and strategies
- Answer questions about the platform
- Offer career and resume guidance
- Boost your confidence before interviews

I'm powered by advanced AI to give you personalized, helpful responses. How can I assist you today?`,

  help: `**How can I help you?** 🤝

Here are some things you can ask me:

📚 **Platform Questions:**
- "How to login?"
- "How to practice interviews?"
- "What features do you have?"
- "How do I check my progress?"

💼 **Interview Preparation:**
- "Give me interview tips"
- "How to answer 'Tell me about yourself'?"
- "Resume improvement tips"
- "How to negotiate salary?"

🎯 **Quick Actions:**
- "What roles are available?"
- "Experience levels explained"

Just type your question and I'll do my best to help! 💪`
};

// Keywords mapping for intelligent matching
const KEYWORD_MAPPINGS: Record<string, keyof typeof PLATFORM_KNOWLEDGE> = {
  // Login related
  'login': 'login',
  'log in': 'login',
  'sign in': 'login',
  'signin': 'login',
  'logging in': 'login',
  'how to login': 'login',
  'access account': 'login',

  // Signup related
  'signup': 'signup',
  'sign up': 'signup',
  'register': 'signup',
  'create account': 'signup',
  'new account': 'signup',
  'join': 'signup',

  // Practice related
  'practice': 'practice',
  'mock interview': 'practice',
  'start interview': 'practice',
  'how to practice': 'practice',
  'interview practice': 'practice',
  'how to use': 'practice',
  'get started': 'practice',
  'begin': 'practice',
  'start': 'practice',

  // Features
  'features': 'features',
  'what can': 'features',
  'capabilities': 'features',
  'what does': 'features',
  'platform': 'features',

  // Dashboard
  'dashboard': 'dashboard',
  'my stats': 'dashboard',
  'my progress': 'dashboard',
  'history': 'dashboard',
  'performance': 'dashboard',
  'analytics': 'dashboard',
  'scores': 'dashboard',

  // Roles
  'roles': 'roles',
  'positions': 'roles',
  'job types': 'roles',
  'frontend': 'roles',
  'backend': 'roles',
  'fullstack': 'roles',
  'devops': 'roles',
  'data scientist': 'roles',
  'developer': 'roles',

  // Experience
  'experience': 'experience',
  'level': 'experience',
  'fresher': 'experience',
  'junior': 'experience',
  'senior': 'experience',
  'mid-level': 'experience',

  // Tips
  'tips': 'tips',
  'advice': 'tips',
  'prepare': 'tips',
  'how to answer': 'tips',
  'interview tips': 'tips',

  // Contact
  'contact': 'contact',
  'support': 'contact',
  'reach': 'contact',

  // Greetings
  'hello': 'greeting',
  'hi': 'greeting',
  'hey': 'greeting',
  'good morning': 'greeting',
  'good afternoon': 'greeting',
  'good evening': 'greeting',
  'namaste': 'greeting',

  // How are you
  'how are you': 'howAreYou',
  'how r u': 'howAreYou',
  'how do you do': 'howAreYou',
  'whats up': 'howAreYou',
  "what's up": 'howAreYou',
  'how is it going': 'howAreYou',
  'kaise ho': 'howAreYou',

  // Thanks
  'thank': 'thanks',
  'thanks': 'thanks',
  'thankyou': 'thanks',
  'thank you': 'thanks',
  'appreciate': 'thanks',
  'dhanyawad': 'thanks',

  // Goodbye
  'bye': 'goodbye',
  'goodbye': 'goodbye',
  'see you': 'goodbye',
  'take care': 'goodbye',
  'later': 'goodbye',

  // Who are you
  'who are you': 'whoAreYou',
  'what are you': 'whoAreYou',
  'your name': 'whoAreYou',
  'introduce yourself': 'whoAreYou',
  'about you': 'whoAreYou',

  // Help
  'what can you do': 'help',
  'help me': 'help',
  'how can you help': 'help'
};

// Find matching knowledge base response
function findKnowledgeBaseResponse(message: string): string | null {
  const lowerMessage = message.toLowerCase();

  // Direct keyword matching
  for (const [keyword, key] of Object.entries(KEYWORD_MAPPINGS)) {
    if (lowerMessage.includes(keyword)) {
      return PLATFORM_KNOWLEDGE[key];
    }
  }

  return null;
}

const SYSTEM_PROMPT = `You are an AI Interview Coach assistant for InterviewAI, a platform that helps candidates prepare for job interviews. Your role is to:

1. Provide helpful interview tips and advice
2. Answer questions about interview preparation
3. Offer guidance on resume writing and career development
4. Help users understand common interview questions and how to answer them
5. Boost confidence and provide motivational support
6. Explain how to use the InterviewAI platform features

Be friendly, encouraging, and professional. Keep responses concise but helpful (2-4 paragraphs max).
If asked about something unrelated to interviews, careers, or job preparation, politely redirect the conversation.

Platform Features you can explain:
- Mock Interview: AI-powered practice interviews with real-time feedback
- Dashboard: View interview history and performance analytics  
- Interview Setup: Choose role (Frontend, Backend, Fullstack, DevOps, Data Scientist, UI/UX, Security Engineer), experience level (Fresher to Lead/Principal), and question count
- Login: Users can sign in via email/password or Google
- Real-time AI feedback and scoring after each answer`;

const QUICK_SUGGESTIONS = [
  "How to login?",
  "How to practice interviews?",
  "What features do you have?",
  "Give me interview tips",
  "What roles are available?",
  "How to see my progress?"
];

export function getQuickSuggestions(): string[] {
  // Return 4 random suggestions
  const shuffled = [...QUICK_SUGGESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
}

export async function sendChatMessage(
  message: string,
  conversationHistory: ChatMessage[]
): Promise<ChatResponse> {

  // First, try to find a knowledge base response for platform questions
  const knowledgeResponse = findKnowledgeBaseResponse(message);
  if (knowledgeResponse) {
    return {
      message: knowledgeResponse,
      suggestions: getQuickSuggestions()
    };
  }

  // Debug: Log API key status
  console.log('Chatbot API Key status:', GEMINI_API_KEY ? 'Present' : 'Missing');
  console.log('API Key first 10 chars:', GEMINI_API_KEY?.substring(0, 10) + '...');

  // Check if API key is available
  if (!GEMINI_API_KEY || GEMINI_API_KEY === 'your_gemini_api_key_here') {
    console.log('No valid API key found, using fallback');
    return {
      message: getFallbackResponse(message),
      suggestions: getQuickSuggestions()
    };
  }

  // Build conversation context
  const contextMessages = conversationHistory.slice(-6).map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.content }]
  }));

  // Add system prompt as first message
  const messages = [
    { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
    { role: 'model', parts: [{ text: 'I understand. I\'m your AI Interview Coach, ready to help you prepare for job interviews and advance your career. How can I assist you today?' }] },
    ...contextMessages,
    { role: 'user', parts: [{ text: message }] }
  ];

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: messages,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    if (!response.ok) {
      console.error(`API Error: ${response.status}`);
      return {
        message: getFallbackResponse(message),
        suggestions: getQuickSuggestions()
      };
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    if (!text) {
      return {
        message: getFallbackResponse(message),
        suggestions: getQuickSuggestions()
      };
    }

    return {
      message: text,
      suggestions: getQuickSuggestions()
    };
  } catch (error) {
    console.error('Chatbot API Error:', error);
    return {
      message: getFallbackResponse(message),
      suggestions: getQuickSuggestions()
    };
  }
}

// Fallback response when API is unavailable
function getFallbackResponse(message: string): string {
  const lowerMessage = message.toLowerCase();

  // Try to provide helpful fallback based on message content
  if (lowerMessage.includes('tell me about yourself')) {
    return `**How to answer "Tell me about yourself":**

This is often the first question in interviews. Here's a structure:

1. **Present:** Start with your current role and key responsibilities
2. **Past:** Briefly mention relevant past experience
3. **Future:** Explain why you're excited about this opportunity

**Example:** "I'm a Frontend Developer with 3 years of experience building React applications. Previously, I worked at XYZ where I led a team of 4 developers. I'm excited about this role because it aligns with my passion for creating great user experiences."

💡 Keep it 1-2 minutes, focused, and relevant to the job!`;
  }

  if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
    return `**Resume Tips:**

✅ **Format:**
- Keep it 1-2 pages max
- Use clear headings and bullet points
- Choose a clean, professional font

✅ **Content:**
- Start with a strong summary
- Quantify achievements (e.g., "Increased sales by 25%")
- Tailor it for each job application
- Include relevant keywords from job description

✅ **Avoid:**
- Typos and grammatical errors
- Generic statements
- Irrelevant information

Would you like tips on any specific section?`;
  }

  if (lowerMessage.includes('salary') || lowerMessage.includes('negotiate')) {
    return `**Salary Negotiation Tips:**

💰 **Before Negotiating:**
- Research market rates on Glassdoor, LinkedIn, Levels.fyi
- Know your minimum acceptable salary
- Consider total compensation (benefits, equity, bonuses)

💼 **During Negotiation:**
- Let them make the first offer if possible
- Express enthusiasm for the role first
- Use phrases like "Based on my research and experience..."
- Be confident but professional

🎯 **Key Points:**
- Always negotiate! Most companies expect it
- Get offers in writing
- Consider the entire package, not just base salary`;
  }

  if (lowerMessage.includes('nervous') || lowerMessage.includes('anxiety') || lowerMessage.includes('confident')) {
    return `**Building Interview Confidence:**

🧘 **Before the Interview:**
- Practice with our mock interview feature
- Prepare answers for common questions
- Get a good night's sleep
- Arrive/log in 10-15 minutes early

💪 **During the Interview:**
- Take deep breaths before answering
- It's okay to pause and think
- Remember: they already liked your resume!
- Focus on being helpful, not perfect

🌟 **Mindset Shift:**
- You're also interviewing them
- Mistakes happen - recover gracefully
- Your uniqueness is your strength

Try our practice interviews to build confidence! Just ask "How to practice interviews?" 🚀`;
  }

  // Generic helpful response
  return `I'm your AI Interview Coach! I can help you with:

📚 **Platform Questions:**
- How to login and get started
- How to practice mock interviews
- Understanding your dashboard and scores

💼 **Interview Preparation:**
- Tips for technical interviews
- Behavioral question strategies
- Resume and career advice

🎯 **Quick Actions:**
Try asking:
- "How to practice interviews?"
- "What features do you have?"
- "Give me interview tips"

How can I help you prepare for your next interview? 🚀`;
}

// Save conversation to localStorage
export function saveConversation(userId: string, messages: ChatMessage[]): void {
  try {
    const key = `chatbot_history_${userId}`;
    // Keep only last 50 messages
    const messagesToSave = messages.slice(-50);
    localStorage.setItem(key, JSON.stringify(messagesToSave));
  } catch (error) {
    console.error('Error saving conversation:', error);
  }
}

// Load conversation from localStorage
export function loadConversation(userId: string): ChatMessage[] {
  try {
    const key = `chatbot_history_${userId}`;
    const stored = localStorage.getItem(key);
    if (stored) {
      const messages = JSON.parse(stored);
      return messages.map((msg: ChatMessage) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }));
    }
  } catch (error) {
    console.error('Error loading conversation:', error);
  }
  return [];
}

// Clear conversation history
export function clearConversation(userId: string): void {
  try {
    const key = `chatbot_history_${userId}`;
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error clearing conversation:', error);
  }
}
