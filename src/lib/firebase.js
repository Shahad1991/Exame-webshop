// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqMJ_rMUDJp_FazYb5DEJ-STjIBniZt8Q",
  authDomain: "exame-webshop.firebaseapp.com",
  projectId: "exame-webshop",
  storageBucket: "exame-webshop.firebasestorage.app",
  messagingSenderId: "861871291328",
  appId: "1:861871291328:web:857c6ea5ae315fc27be625"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };