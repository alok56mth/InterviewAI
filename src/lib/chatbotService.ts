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
- Interview Setup: Choose role, experience level, and technologies for customized practice`;

const QUICK_SUGGESTIONS = [
  "Give me interview tips",
  "How to answer 'Tell me about yourself'?",
  "Common technical interview mistakes",
  "How to prepare for behavioral questions",
  "Resume improvement tips",
  "How to negotiate salary"
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
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    if (!text) {
      throw new Error('Empty response from API');
    }

    return {
      message: text,
      suggestions: getQuickSuggestions()
    };
  } catch (error) {
    console.error('Chatbot API Error:', error);
    return {
      message: "I apologize, but I'm having trouble connecting right now. Please try again in a moment. In the meantime, feel free to explore our Mock Interview feature to practice!",
      suggestions: getQuickSuggestions()
    };
  }
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
