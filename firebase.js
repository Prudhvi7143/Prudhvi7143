// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeOlfGgG4EBls93jZd0gnVU2GAYrYNdLw",
  authDomain: "uber-next-clone-live-5e693.firebaseapp.com",
  projectId: "uber-next-clone-live-5e693",
  storageBucket: "uber-next-clone-live-5e693.appspot.com",
  messagingSenderId: "119863491868",
  appId: "1:119863491868:web:7b000395d7649c4d6d8ed9",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }