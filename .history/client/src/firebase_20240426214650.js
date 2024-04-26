// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aacomputing-blog.firebaseapp.com",
  projectId: "aacomputing-blog",
  storageBucket: "aacomputing-blog.appspot.com",
  messagingSenderId: "413464745748",
  appId: "1:413464745748:web:73b3e5d78c4fb890f39401"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth
