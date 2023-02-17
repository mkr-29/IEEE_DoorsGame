import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCe4-KmIMz1ODhUkkOJHePgwV_VqQrj-J0",
  authDomain: "doors-7c68a.firebaseapp.com",
  projectId: "doors-7c68a",
  storageBucket: "doors-7c68a.appspot.com",
  messagingSenderId: "547008840643",
  appId: "1:547008840643:web:b5c471abc7397b48e57376",
  measurementId: "G-H9GRT9VXGQ"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
