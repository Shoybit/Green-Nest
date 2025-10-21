// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9uYIw8zgwb0PNniOvhqP9SNmpBcwPODs",
  authDomain: "assiment9-a241e.firebaseapp.com",
  projectId: "assiment9-a241e",
  storageBucket: "assiment9-a241e.firebasestorage.app",
  messagingSenderId: "249046723687",
  appId: "1:249046723687:web:b6aaae5c92adf4d996f8c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app); // Added 'export' here
export default app;