import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlESKuMDbT_6WjqFByZq5tBatQR1f9SAk",
  authDomain: "sainik-canteen-bikram-ad900.firebaseapp.com",
  projectId: "sainik-canteen-bikram-ad900",
  storageBucket: "sainik-canteen-bikram-ad900.firebasestorage.app",
  messagingSenderId: "1022282823480",
  appId: "1:1022282823480:web:249a41fdaf79716841f3cd",
  measurementId: "G-WR49HVLMLN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
