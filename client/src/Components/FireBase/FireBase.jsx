// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq7hUJUm6Kt_46IuhWrBmE6LU0MHrQp1U",
  authDomain: "login-auth-b2242.firebaseapp.com",
  projectId: "login-auth-b2242",
  storageBucket: "login-auth-b2242.firebasestorage.app",
  messagingSenderId: "410983669687",
  appId: "1:410983669687:web:6f1ddfc6730a4f740e1232",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
