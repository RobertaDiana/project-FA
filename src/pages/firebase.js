// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxQG0R3eXuHqpauH3U7I-GMKpbx4vzuVs",
  authDomain: "authentication-42b65.firebaseapp.com",
  projectId: "authentication-42b65",
  storageBucket: "authentication-42b65.appspot.com",
  messagingSenderId: "628009969602",
  appId: "1:628009969602:web:aa8ba2724ba820d631985b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}