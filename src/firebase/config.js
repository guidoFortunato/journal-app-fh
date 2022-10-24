// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQUQpO-SyHLanse608Z51B5OzabTwN6jI",
  authDomain: "react-curso-fh-3602d.firebaseapp.com",
  projectId: "react-curso-fh-3602d",
  storageBucket: "react-curso-fh-3602d.appspot.com",
  messagingSenderId: "546138339090",
  appId: "1:546138339090:web:c3fae9e59d70745ed665cb",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirenaseDB = getAuth(FirebaseApp);
