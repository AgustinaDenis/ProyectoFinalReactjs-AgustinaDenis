import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtIMJ-WbwKcrwReKaNgRpCzjjfZCNJB_k",
  authDomain: "reactjs-agustinadenis.firebaseapp.com",
  projectId: "reactjs-agustinadenis",
  storageBucket: "reactjs-agustinadenis.appspot.com",
  messagingSenderId: "447532505471",
  appId: "1:447532505471:web:06923f8d2d0c798257e24a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db