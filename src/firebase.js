// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "instagram-clone-39228.firebaseapp.com",
  projectId: "instagram-clone-39228",
  storageBucket: "instagram-clone-39228.appspot.com",
  messagingSenderId: "138339390518",
  appId: "1:138339390518:web:7464cede991a15d8533497",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
