import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAox6w1ZYArDjgFZsnP0nFIHHncSLoX0AY",
  authDomain: "my-portfolio-fba0d.firebaseapp.com",
  projectId: "my-portfolio-fba0d",
  storageBucket: "my-portfolio-fba0d.firebasestorage.app",
  messagingSenderId: "230679693858",
  appId: "1:230679693858:web:e7994b3dacc0b2fbe8d87b",
  measurementId: "G-HJDB5JRMNQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);