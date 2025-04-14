// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFS412pvHpRsqq4gafUmJew3x1o7Qu9Oc",
    authDomain: "ecommerce-cfe2d.firebaseapp.com",
    projectId: "ecommerce-cfe2d",
    storageBucket: "ecommerce-cfe2d.firebasestorage.app",
    messagingSenderId: "552913482443",
    appId: "1:552913482443:web:0a0d9991c5f0062e71214e",
    measurementId: "G-J621E932B3"
  };
  

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
