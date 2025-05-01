// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7zoqYjze0I_XSdwzHXxFY0r3_YIjT2wg",
  authDomain: "summarist-d195e.firebaseapp.com",
  projectId: "summarist-d195e",
  storageBucket: "summarist-d195e.firebasestorage.app",
  messagingSenderId: "496980162262",
  appId: "1:496980162262:web:fef8427f00150c5cde7b77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
