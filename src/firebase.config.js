import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNVPNqFtXmwGlBer-KPV1Q-l9EmR4ala0",
  authDomain: "house-marketplace-app-222f1.firebaseapp.com",
  projectId: "house-marketplace-app-222f1",
  storageBucket: "house-marketplace-app-222f1.appspot.com",
  messagingSenderId: "972847772448",
  appId: "1:972847772448:web:fdc448b682970c6d60dd45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
