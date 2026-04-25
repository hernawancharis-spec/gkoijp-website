// GUNAKAN LINK URL LENGKAP SEPERTI DI BAWAH INI
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAs0w-lqnITsHxNIiQLxB4pgKuZkmd-6OQ",
    authDomain: "gkoijp-website.firebaseapp.com",
    projectId: "gkoijp-website",
    storageBucket: "gkoijp-website.appspot.com",
    messagingSenderId: "447570910336",
    appId: "1:447570910336:web:39b36c73420f683377da65"
};

// Hubungkan ke Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);