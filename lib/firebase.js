import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace with your Firebase project config (use env variables for safety)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // ...other config (storageBucket, messagingSenderId, appId) if needed
};

// Initialize Firebase app (ensure not already initialized to avoid duplications)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export Firebase Auth and Firestore instances for use in the app
export const auth = getAuth(app);
export const db = getFirestore(app);
