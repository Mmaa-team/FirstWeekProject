// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}  from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtpfKVVIHK6SfPuOVD8W906X3OnyQwcwU",
  authDomain: "fancymamaauth.firebaseapp.com",
  projectId: "fancymamaauth",
  storageBucket: "fancymamaauth.appspot.com",
  messagingSenderId: "595921431685",
  appId: "1:595921431685:web:fe72d1da9cb09aec3a8dec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app