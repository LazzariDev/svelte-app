// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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