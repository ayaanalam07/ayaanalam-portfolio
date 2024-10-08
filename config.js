import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAc0Jx8RSMWaZ76lEXTSB402GHFrRSfDjA",
  authDomain: "ayaanalam-portfolio.firebaseapp.com",
  projectId: "ayaanalam-portfolio",
  storageBucket: "ayaanalam-portfolio.appspot.com",
  messagingSenderId: "209235266186",
  appId: "1:209235266186:web:a800a7d658a27fe6fcbb73"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

