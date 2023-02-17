import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBdACQX2nabldaJKspYInTJaV2rVT0l7CE",
  authDomain: "doors-73745.firebaseapp.com",
  projectId: "doors-73745",
  storageBucket: "doors-73745.appspot.com",
  messagingSenderId: "317599312560",
  appId: "1:317599312560:web:ed44d883cbb3e425a0e975"
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {auth}