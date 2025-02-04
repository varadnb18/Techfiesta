import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { getDatabase } from "firebase/database"; // ✅ Import Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyAq7hUJUm6Kt_46IuhWrBmE6LU0MHrQp1U",
  authDomain: "login-auth-b2242.firebaseapp.com",
  databaseURL: "https://login-auth-b2242-default-rtdb.firebaseio.com", // ✅ Add Realtime Database URL
  projectId: "login-auth-b2242",
  storageBucket: "login-auth-b2242.appspot.com", // ✅ Fixed incorrect domain
  messagingSenderId: "410983669687",
  appId: "1:410983669687:web:6f1ddfc6730a4f740e1232",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app); // ✅ Export Realtime Database

export { collection, doc, setDoc, getDocs };

export default app;
