// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwTEAMPdYPVNqb2Y8qMxYtlspgqVJt8P8",
  authDomain: "loginsignup-88249.firebaseapp.com",
  projectId: "loginsignup-88249",
  storageBucket: "loginsignup-88249.firebasestorage.app",
  messagingSenderId: "170707397317",
  appId: "1:170707397317:web:13fc12e5053e1973965eac",
  measurementId: "G-HXPGJF7CBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);