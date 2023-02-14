// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9zPHOG2i7b2A8g4oDQthy9mQ2-7dwy_Q",
  authDomain: "react-journalapp-4755b.firebaseapp.com",
  projectId: "react-journalapp-4755b",
  storageBucket: "react-journalapp-4755b.appspot.com",
  messagingSenderId: "368659795613",
  appId: "1:368659795613:web:bbe110ae5d6713c6ab4e74",
  measurementId: "G-4BNXLZJ24Y"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);