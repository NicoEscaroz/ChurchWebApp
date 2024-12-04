import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7tkAwF5asFEbgaboTkyLIaQ1jdBLQL_c",
  authDomain: "churchstartup-7ce79.firebaseapp.com",
  projectId: "churchstartup-7ce79",
  storageBucket: "churchstartup-7ce79.firebasestorage.app",
  messagingSenderId: "209419033348",
  appId: "1:209419033348:web:a02cea0c5b27960f520e51",
  measurementId: "G-8M7NQ7WBLE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const authDB = getFirestore(app);
export default app;
