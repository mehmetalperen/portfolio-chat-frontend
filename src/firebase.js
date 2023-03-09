// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjZ8BLVqmwZbiat0EmfTYpCSb7moM1K1w",
  authDomain: "portfolio-chat-90fb1.firebaseapp.com",
  projectId: "portfolio-chat-90fb1",
  storageBucket: "portfolio-chat-90fb1.appspot.com",
  messagingSenderId: "750256267899",
  appId: "1:750256267899:web:52d0505c70ed16c14f38de",
  measurementId: "G-XKXGK0QB7C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
