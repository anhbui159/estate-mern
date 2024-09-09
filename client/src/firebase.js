// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-learning.firebaseapp.com",
  projectId: "estate-learning",
  storageBucket: "estate-learning.appspot.com",
  messagingSenderId: "241890189131",
  appId: "1:241890189131:web:136878edc28dad8d4852ce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);