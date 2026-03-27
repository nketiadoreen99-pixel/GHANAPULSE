import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1s-2Md6AEJvDdIaSFhPI4d1KspgscuZE",
  authDomain: "black-viral.firebaseapp.com",
  projectId: "black-viral",
  storageBucket: "black-viral.firebasestorage.app",
  messagingSenderId: "432381309900",
  appId: "1:432381309900:web:8f41a4caf3dcb4b277e369",
  measurementId: "G-BVPQL0T2YY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
