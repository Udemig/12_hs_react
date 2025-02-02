// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//! auth importu
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//! database importu
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqO1SeRZAixTP7ngYrbokd58XqbyC0gFA",
  authDomain: "hs-chat-cfbf9.firebaseapp.com",
  projectId: "hs-chat-cfbf9",
  storageBucket: "hs-chat-cfbf9.firebasestorage.app",
  messagingSenderId: "788783794075",
  appId: "1:788783794075:web:9d87832ef442028d9ac33e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! authentication hizmetinin referansını al
export const auth = getAuth(app);

//! google sağlaycısının kurulumu
export const provider = new GoogleAuthProvider();

//! firestore (veritabanı) hizmetinin kurulumu
export const db = getFirestore(app);
