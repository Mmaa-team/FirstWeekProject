// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA5jK4abVUTphRvPDhQ4OoJRzZXMgEzB1E",
  authDomain: "fancymama-41d58.firebaseapp.com",
  projectId: "fancymama-41d58",
  storageBucket: "fancymama-41d58.appspot.com",
  messagingSenderId: "649311290421",
  appId: "1:649311290421:web:16fb8f5e2a06360e165d7c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)

