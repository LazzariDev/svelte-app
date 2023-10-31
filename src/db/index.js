import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //getFirestore: access to Firestore database
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAOYWXZck3Pdm9JZzaDiCYpD0H_5k4zEY",
  authDomain: "svelte-social-39e0a.firebaseapp.com",
  projectId: "svelte-social-39e0a",
  storageBucket: "svelte-social-39e0a.appspot.com",
  messagingSenderId: "944110008624",
  appId: "1:944110008624:web:1b026c16aa65660a2b70f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseAuth = getAuth(app);