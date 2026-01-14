import { db } from './firebase';
import { collection, addDoc, getDocs, query, where, orderBy, limit } from 'firebase/firestore';

export interface InterviewRecord {
  id?: string;
  userId: string;
  date: string;
  role: string;
  score: number;
  questionsCount: number;
  duration: string;
  answers: Array<{
    question: string;
    answer: string;
    score: number;
  }>;
  createdAt: Date;
}

// Save to localStorage as backup with user-specific key
const saveToLocalStorage = (record: InterviewRecord) => {
  try {
    const userKey = `interviewRecords_${record.userId}`;
    const existingRecords = JSON.parse(localStorage.getItem(userKey) || '[]');

    // Prevent duplicates by checking if record with same timestamp already exists
    const isDuplicate = existingRecords.some((existing: InterviewRecord) =>
      existing.userId === record.userId &&
      existing.createdAt === record.createdAt &&
      existing.role === record.role &&
      existing.score === record.score
    );

    if (!isDuplicate) {
      existingRecords.push(record);
      // Keep only last 50 records
      const sortedRecords = existingRecords
        .sort((a: InterviewRecord, b: InterviewRecord) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .slice(0, 50);
      localStorage.setItem(userKey, JSON.stringify(sortedRecords));
    }
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const saveInterviewRecord = async (record: Omit<InterviewRecord, 'id' | 'createdAt'>) => {
  const fullRecord = {
    ...record,
    id: Date.now().toString(),
    createdAt: new Date()
  };

  // Always save to localStorage first
  saveToLocalStorage(fullRecord);

  // Try to save to Firebase
  try {
    const docRef = await addDoc(collection(db, 'interviews'), fullRecord);
    return docRef.id;
  } catch (error) {
    console.error('Error saving to Firebase, using localStorage backup:', error);
    return fullRecord.id;
  }
};

// Get from localStorage as backup with user-specific key
const getFromLocalStorage = (userId: string): InterviewRecord[] => {
  try {
    const userKey = `interviewRecords_${userId}`;
    const records = JSON.parse(localStorage.getItem(userKey) || '[]');
    return records
      .filter((record: InterviewRecord) => record.userId === userId)
      .sort((a: InterviewRecord, b: InterviewRecord) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, 20);
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return [];
  }
};

export const getUserInterviews = async (userId: string): Promise<InterviewRecord[]> => {
  // ALWAYS return localStorage data IMMEDIATELY for fast dashboard load
  const localData = getFromLocalStorage(userId);

  // Try Firebase in background (non-blocking)
  try {
    // Use Promise.race with timeout to avoid slow Firebase blocking the UI
    const timeoutPromise = new Promise<InterviewRecord[]>((_, reject) =>
      setTimeout(() => reject(new Error('Firebase timeout')), 3000) // 3 second timeout
    );

    const firebasePromise = (async () => {
      const q = query(
        collection(db, 'interviews'),
        where('userId', '==', userId),
        orderBy('createdAt', 'desc'),
        limit(20)
      );

      const querySnapshot = await getDocs(q);
      const firebaseData: InterviewRecord[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        firebaseData.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(data.createdAt)
        } as InterviewRecord);
      });

      return firebaseData;
    })();

    const firebaseData = await Promise.race([firebasePromise, timeoutPromise]);

    if (firebaseData.length > 0) {
      console.log(`Loaded ${firebaseData.length} interviews from Firebase for user: ${userId}`);
      return firebaseData;
    }
  } catch (error) {
    console.log('Using localStorage data (Firebase unavailable or slow)');
  }

  // Return localStorage data if Firebase fails or is slow
  return localData;
};

export const getUserStats = async (userId: string) => {
  try {
    // Get data from Firebase (proper backend)
    const interviews = await getUserInterviews(userId);

    if (interviews.length === 0) {
      return {
        totalInterviews: 0,
        averageScore: 0,
        bestScore: 0,
        totalTime: 0
      };
    }

    const totalScore = interviews.reduce((sum, interview) => sum + interview.score, 0);
    const averageScore = totalScore / interviews.length;
    const bestScore = Math.max(...interviews.map(interview => interview.score));
    const totalTime = interviews.length * 15;

    return {
      totalInterviews: interviews.length,
      averageScore: Math.round(averageScore * 10) / 10,
      bestScore,
      totalTime
    };
  } catch (error) {
    console.error('Error calculating stats:', error);
    return {
      totalInterviews: 0,
      averageScore: 0,
      bestScore: 0,
      totalTime: 0
    };
  }
};

// Clear corrupted localStorage data for specific user
export const clearLocalStorageData = (userId?: string) => {
  try {
    if (userId) {
      const userKey = `interviewRecords_${userId}`;
      localStorage.removeItem(userKey);
      console.log(`Cleared interview data for user: ${userId}`);
    } else {
      // Clear all interview data (fallback)
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('interviewRecords_')) {
          localStorage.removeItem(key);
        }
      });
      localStorage.removeItem('interviewRecords'); // Remove old global key
      console.log('Cleared all interview data');
    }
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};