// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAGVmcTKVZwUqJpOI9Zoah9rbofyiQvd4",
  authDomain: "creative-ideas-19591.firebaseapp.com",
  projectId: "creative-ideas-19591",
  storageBucket: "creative-ideas-19591.appspot.com",
  messagingSenderId: "660757897031",
  appId: "1:660757897031:web:e09af5c3cb9c72eec7b662"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);