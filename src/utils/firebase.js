import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDH8YkwV2Na2r-xQWebH-pPYsncJjczpqY",
  authDomain: "fir-practice-ba258.firebaseapp.com",
  projectId: "fir-practice-ba258",
  storageBucket: "fir-practice-ba258.appspot.com",
  messagingSenderId: "741887387986",
  appId: "1:741887387986:web:5c94cc4d15be4612c9328b",
  measurementId: "G-X8KQSDYL9L",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }
