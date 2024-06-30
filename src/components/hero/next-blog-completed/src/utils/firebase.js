// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog1-e5b57.firebaseapp.com",
  projectId: "blog1-e5b57",
  storageBucket: "blog1-e5b57.appspot.com",
  messagingSenderId: "669727006849",
  appId: "1:669727006849:web:f0f4b88cbcec9fc363ed80"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);





