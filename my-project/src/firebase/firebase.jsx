import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage"

let apiKey = import.meta.env.VITE_apiKey
let authDomain = import.meta.env.VITE_authDomain
let projectId = import.meta.env.VITE_projectId
let storageBucket = import.meta.env.VITE_storageBucket
let messagingSenderId = import.meta.env.VITE_messagingSenderId
let appId = import.meta.env.VITE_appId
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);
export const storage = getStorage(app)
export default app
