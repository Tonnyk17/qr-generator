// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9ge-CxVrs4uVwSxUOhorMY8QU-05BLgk",
  authDomain: "ticket-generator-f89af.firebaseapp.com",
  databaseURL: "https://ticket-generator-f89af-default-rtdb.firebaseio.com",
  projectId: "ticket-generator-f89af",
  storageBucket: "ticket-generator-f89af.appspot.com",
  messagingSenderId: "252944888919",
  appId: "1:252944888919:web:654ebed809b97e3faf1f12"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =getDatabase(app)