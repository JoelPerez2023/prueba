import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbdvKNsqs15I_Eyc83gmMidlaK9BBc6o8",
  authDomain: "games-bb400.firebaseapp.com",
  projectId: "games-bb400",
  storageBucket: "games-bb400.appspot.com",
  messagingSenderId: "160227843705",
  appId: "1:160227843705:web:fdf2cbeed93216dafdbea8"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

