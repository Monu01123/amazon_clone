import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ5UbQ47b_IvIpeJnzgFPVkN3nV3KTXaE",
  authDomain: "challenge-2591e.firebaseapp.com",
  projectId: "challenge-2591e",
  storageBucket: "challenge-2591e.appspot.com",
  messagingSenderId: "960152526065",
  appId: "1:960152526065:web:8833fb28e7215649bbdd50",
  measurementId: "G-44RYHY2R5G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
