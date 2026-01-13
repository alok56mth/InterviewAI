import { useState, useEffect, useRef } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles,
  Trash2,
  Minimize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChatMessage,
  sendChatMessage,
  getQuickSuggestions,
  saveConversation,
  loadConversation,
  clearConversation
} from '@/lib/chatbotService';

// Markdown-like text renderer for professional looking messages
const renderFormattedText = (text: string) => {
  // Split by lines
  const lines = text.split('\n');
  
  return lines.map((line, lineIndex) => {
    // Process inline formatting
    let processedLine = line;
    
    // Convert **bold** to styled span
    processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-purple-300">$1</strong>');
    
    // Convert `code` to styled span
    processedLine = processedLine.replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 bg-purple-500/20 rounded text-purple-300 text-xs">$1</code>');
    
    // Determine line styling
    let lineClass = '';
    let prefix = null;
    
    // Check for headers
    if (line.startsWith('**') && line.endsWith('**')) {
      lineClass = 'font-semibold text-white text-sm mt-2 mb-1';
    }
    // Check for bullet points
    else if (line.trim().startsWith('- ') || line.trim().startsWith('• ')) {
      lineClass = 'pl-4 text-gray-300';
      prefix = <span className="text-purple-400 mr-2">•</span>;
      processedLine = processedLine.replace(/^(\s*[-•]\s*)/, '');
    }
    // Check for emoji bullet points (✅, 🎯, 📚, etc.)
    else if (/^[✅🎯📚💼🚀👑🌱💡📊📝🏆📈💰🧘💪🌟📧💬🌐🧠⚡🔧🎨🔒👨‍💻💻👋😊🙌🤖🤝]/.test(line.trim())) {
      lineClass = 'flex items-start gap-2 mt-1';
    }
    // Check for numbered items
    else if (/^\d+\./.test(line.trim())) {
      lineClass = 'pl-4 text-gray-300';
    }
    // Empty lines
    else if (line.trim() === '') {
      return <div key={lineIndex} className="h-2" />;
    }
    // Regular text
    else {
      lineClass = 'text-gray-300';
    }
    
    return (
      <div key={lineIndex} className={`${lineClass} leading-relaxed`}>
        {prefix}
        <span dangerouslySetInnerHTML={{ __html: processedLine }} />
      </div>
    );
  });
};

const ChatBot = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const userId = user?.id || 'anonymous';

  // Load conversation on mount
  useEffect(() => {
    const savedMessages = loadConversation(userId);
    if (savedMessages.length > 0) {
      setMessages(savedMessages);
    }
    setSuggestions(getQuickSuggestions());
  }, [userId]);

  // Save conversation when messages change
  useEffect(() => {
    if (messages.length > 0) {
      saveConversation(userId, messages);
    }
  }, [messages, userId]);

  // Auto-scroll to bottom
  useEffect(() => {
    // Small delay to ensure DOM is updated
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await sendChatMessage(content.trim(), messages);
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.message,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      if (response.suggestions) {
        setSuggestions(response.suggestions);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  const handleClearChat = () => {
    clearConversation(userId);
    setMessages([]);
    setSuggestions(getQuickSuggestions());
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-25 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] h-[550px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(25, 25, 55, 0.95) 100%)',
              backdropFilter: 'blur(20px)'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">AI Interview Coach</h3>
                  <p className="text-xs text-gray-400">Your career assistant</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClearChat}
                  className="h-8 w-8 text-gray-400 hover:text-white hover:bg-white/10"
                  title="Clear chat"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 text-gray-400 hover:text-white hover:bg-white/10"
                >
                  <Minimize2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {/* Welcome message if no messages */}
                {messages.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-6"
                  >
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 mb-4">
                      <Sparkles className="h-8 w-8 text-purple-400" />
                    </div>
                    <h4 className="text-white font-medium mb-2">Welcome to AI Interview Coach!</h4>
                    <p className="text-gray-400 text-sm">
                      I'm here to help you prepare for interviews, improve your resume, and boost your career.
                    </p>
                  </motion.div>
                )}

                {/* Messages */}
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index === messages.length - 1 ? 0.1 : 0 }}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                          : 'bg-white/5 border border-white/10 text-gray-200'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.role === 'assistant' && (
                          <Bot className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                        )}
                        <div className="text-sm flex-1">
                          {message.role === 'assistant' 
                            ? renderFormattedText(message.content)
                            : <span className="whitespace-pre-wrap">{message.content}</span>
                          }
                        </div>
                        {message.role === 'user' && (
                          <User className="h-4 w-4 text-white/70 mt-0.5 flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Bot className="h-4 w-4 text-purple-400" />
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                {/* Scroll anchor */}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Quick Suggestions - Always show after messages */}
            {suggestions.length > 0 && !isLoading && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 mb-2">💡 Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.slice(0, 3).map((suggestion, index) => (
                    <motion.button
                      key={suggestion}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSendMessage(suggestion)}
                      className="text-xs px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:text-white hover:border-purple-400 transition-all"
                    >
                      {suggestion}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about interviews..."
                  className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-purple-500"
                  disabled={isLoading}
                />
                <Button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
