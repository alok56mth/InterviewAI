import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBUMfUWzPdTT2jONU4NDKBJad7Nhsob_94",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "interviewai-9b0a0.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "interviewai-9b0a0",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "interviewai-9b0a0.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "98088250428",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:98088250428:web:0bf453614969cf01b86739",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-LJ5QGEVV2B"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Test Firebase connection
export const testFirebaseConnection = async () => {
  try {
    const testDoc = await import('firebase/firestore').then(({ doc, getDoc }) => 
      getDoc(doc(db, 'test', 'connection'))
    );
    console.log('Firebase connected successfully');
    return true;
  } catch (error) {
    console.error('Firebase connection failed:', error);
    return false;
  }
};

export const analytics = getAnalytics(app);
export default app;