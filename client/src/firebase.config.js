// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNiPP8VAQPY_Np52YEfkBF_W-yqKh79b4",
  authDomain: "chatbot-42d55.firebaseapp.com",
  projectId: "chatbot-42d55",
  storageBucket: "chatbot-42d55.appspot.com",
  messagingSenderId: "1005480898678",
  appId: "1:1005480898678:web:98db68d30ccd1d94ddaf57",
  measurementId: "G-KT912DT5PG"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const goggleAuthProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

export { auth, goggleAuthProvider, db };
