// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7NLPbFYr81CcdKlc6_U7ZkWbQaYYHIwU",
  authDomain: "abigailthomas.firebaseapp.com",
  projectId: "abigailthomas",
  storageBucket: "abigailthomas.firebasestorage.app",
  messagingSenderId: "587537621895",
  appId: "1:587537621895:web:aa1ab9effa5638a88da922",
  measurementId: "G-1BTLGTLCNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);