import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA4Da1LkjJHnARJnD22I0JcqPevedvURSM',
  authDomain: 'gethelperbeecom.firebaseapp.com',
  projectId: 'gethelperbeecom',
  storageBucket: 'gethelperbeecom.appspot.com',
  messagingSenderId: '471294218855',
  appId: '1:471294218855:android:a67ccf1ba64f52bf6b7ac2',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
