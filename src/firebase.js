// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import{getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDymZ2hFTBtdYumjpOadVth17me_FsuvzA",
  authDomain: "chatapp-b5e63.firebaseapp.com",
  projectId: "chatapp-b5e63",
  storageBucket: "chatapp-b5e63.firebasestorage.app",
  messagingSenderId: "65631996511",
  appId: "1:65631996511:web:b9b32c761e72e48588a9ea",
  measurementId: "G-7FBED91MWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider();
const analytics = getAnalytics(app);
export const conndb=getFirestore(app)
