
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
  export const auth = getAuth(app);
  export const firestore = getFirestore(app);
  export const storage = getStorage(app)