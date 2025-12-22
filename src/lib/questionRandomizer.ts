// Enhanced randomization for interview questions
export function clearOldQuestionHistory() {
  const usedQuestions = JSON.parse(localStorage.getItem('usedQuestions') || '[]');
  const sixHoursAgo = Date.now() - (6 * 60 * 60 * 1000); // 6 hours
  
  // Keep only recent questions
  const recentQuestions = usedQuestions.filter((q: any) => q.timestamp > sixHoursAgo);
  localStorage.setItem('usedQuestions', JSON.stringify(recentQuestions));
  
  return recentQuestions.length;
}

export function generateSessionSeed(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2);
  const userAgent = navigator.userAgent.slice(-10);
  
  return `${timestamp}_${random}_${userAgent}`.replace(/[^a-zA-Z0-9_]/g, '');
}

export function enhancedShuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  const seed = Date.now() + Math.random() * 1000;
  
  // Fisher-Yates shuffle with seed
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor((seed + i) * Math.random()) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  // Additional randomization
  return shuffled.sort(() => Math.random() - 0.5);
}

export function getRandomizedQuestionPool(
  allQuestions: any[],
  usedQuestions: string[],
  maxRepeat: number = 3
): any[] {
  // Group questions by how many times they've been used
  const questionUsage = new Map<string, number>();
  
  usedQuestions.forEach(q => {
    questionUsage.set(q, (questionUsage.get(q) || 0) + 1);
  });
  
  // Filter out overused questions
  const availableQuestions = allQuestions.filter(q => {
    const usage = questionUsage.get(q.question) || 0;
    return usage < maxRepeat;
  });
  
  // If no questions available, reset and use all
  if (availableQuestions.length === 0) {
    console.log('All questions used, resetting pool');
    return enhancedShuffle(allQuestions);
  }
  
  return enhancedShuffle(availableQuestions);
}