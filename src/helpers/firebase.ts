// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm6OA_CRiquqM-mfB8KSWiI8bSVnR9CPY",
  authDomain: "test-ff-api-2dbee.firebaseapp.com",
  projectId: "test-ff-api-2dbee",
  storageBucket: "test-ff-api-2dbee.firebasestorage.app",
  messagingSenderId: "64898789913",
  appId: "1:64898789913:web:2250a7e28f526075d33088",
  measurementId: "G-ZZDXMFNL4Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

const getFirebaseToken = async (): Promise<string | null> => {
  const user = auth?.currentUser;
  if (user) {
    return await user.getIdToken(true); // Force refresh token if expired
  }
  return null;
};

export { auth, signInWithGoogle, getFirebaseToken };
