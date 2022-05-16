// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClTbOwwZFXxLFWa-omegQs0uHyGOsoUto",
  authDomain: "sqlproject-e581a.firebaseapp.com",
  projectId: "sqlproject-e581a",
  storageBucket: "sqlproject-e581a.appspot.com",
  messagingSenderId: "715687704751",
  appId: "1:715687704751:web:29a4e1621cf2e11369fc5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);