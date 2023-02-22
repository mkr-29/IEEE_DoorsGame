// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdACQX2nabldaJKspYInTJaV2rVT0l7CE",
  authDomain: "doors-73745.firebaseapp.com",
  databaseURL: "https://doors-73745-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "doors-73745",
  storageBucket: "doors-73745.appspot.com",
  messagingSenderId: "317599312560",
  appId: "1:317599312560:web:ed44d883cbb3e425a0e975",
  measurementId: "G-LPENR3LBSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);