// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAJmNzDwexIWPx9o26_sXeXOcl5I-pNQT0",
  authDomain: "covid19trackerweb.firebaseapp.com",
  projectId: "covid19trackerweb",
  storageBucket: "covid19trackerweb.appspot.com",
  messagingSenderId: "364075066263",
  appId: "1:364075066263:web:c81ecc58eb5f97b1601ad2",
  measurementId: "G-GS4YMH3W7Q",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
