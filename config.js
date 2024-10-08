import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyABr0d8qTn0EROSXaEjAFP0ctXQ8D1sTH0",
  authDomain: "ayaanalam-portfolioo.firebaseapp.com",
  projectId: "ayaanalam-portfolioo",
  storageBucket: "ayaanalam-portfolioo.appspot.com",
  messagingSenderId: "637131303394",
  appId: "1:637131303394:web:d96e388e2ab7ccd14631bb"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

