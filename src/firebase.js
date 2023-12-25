// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAUsGhkfh_zwyuM5I_51dS8JXMa8-fpr8M",
  authDomain: "challenge-c001d.firebaseapp.com",
  databaseURL: "https://challenge-c001d-default-rtdb.firebaseio.com",
  projectId: "challenge-c001d",
  storageBucket: "challenge-c001d.appspot.com",
  messagingSenderId: "450970080722",
  appId: "1:450970080722:web:70371308c1b5a59833640b",
  measurementId: "G-FKBY5PLL1K"
};
 const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };