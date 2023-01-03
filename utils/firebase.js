// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  // "AIzaSyDAGVmcTKVZwUqJpOI9Zoah9rbofyiQvd4",
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  // "creative-ideas-19591.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  // projectId: "creative-ideas-19591",
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  // storageBucket: "creative-ideas-19591.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
  // messagingSenderId: "660757897031",
  appId: process.env.NEXT_PUBLIC_APP_ID,
  // appId: "1:660757897031:web:e09af5c3cb9c72eec7b662",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
