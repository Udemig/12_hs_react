// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsV2AX6AHjeqwLSlZ3_ofMC4_SvHSeNgM",
  authDomain: "hs-twitter-f4a57.firebaseapp.com",
  projectId: "hs-twitter-f4a57",
  storageBucket: "hs-twitter-f4a57.firebasestorage.app",
  messagingSenderId: "582529100817",
  appId: "1:582529100817:web:8654b2a68bcba6f6e095b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth servisinin referansını al
export const auth = getAuth(app);

// google sağlaycısını kur
export const provider = new GoogleAuthProvider();

// storage sevisinin referansını al
export const storage = getStorage(app);

// vertitabanı servisinin referanısnı al
export const db = getFirestore(app);
