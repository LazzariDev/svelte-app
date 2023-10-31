import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"; //getFirestore: access to Firestore database

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

export async function getUsers() {
    const usersCol = collection(db, "users");
    const userSnap = await getDocs(usersCol);
    
    const userList = userSnap.docs.map(doc => doc.data());
    console.log(userList);
    return userList;
}