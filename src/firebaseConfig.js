// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_c8pDvZo07LiYUoEfLKK0w0I8nWGfiM8",
  authDomain: "auth-app-dfe59.firebaseapp.com",
  projectId: "auth-app-dfe59",
  storageBucket: "auth-app-dfe59.appspot.com",
  messagingSenderId: "1088569198129",
  appId: "1:1088569198129:web:6c18a5e7ce2ee9f21b3710",
  measurementId: "G-GGTJGSXPFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);