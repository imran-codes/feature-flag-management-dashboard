// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADNezvbXSTxUB0xDsR9qi-UIBZH7Axw3I",
  authDomain: "ff-demo-yt.firebaseapp.com",
  projectId: "ff-demo-yt",
  storageBucket: "ff-demo-yt.appspot.com",
  messagingSenderId: "62809165092",
  appId: "1:62809165092:web:6a15439cbd838b384877b1",
  measurementId: "G-X6D9T9XC7L",
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
