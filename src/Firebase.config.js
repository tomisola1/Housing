// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZnNoer-MhrS8F3U5FbedtsO2Gope7xfc",
  authDomain: "housing-1e300.firebaseapp.com",
  projectId: "housing-1e300",
  storageBucket: "housing-1e300.appspot.com",
  messagingSenderId: "72049431078",
  appId: "1:72049431078:web:4a54cf4fea02acca1d0ce7",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
