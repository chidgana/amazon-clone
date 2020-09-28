// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCHvA--tzC1xEi4shoF5Lh-ZZXkELAg1vw",
  authDomain: "clone-7027c.firebaseapp.com",
  databaseURL: "https://clone-7027c.firebaseio.com",
  projectId: "clone-7027c",
  storageBucket: "clone-7027c.appspot.com",
  messagingSenderId: "621256239780",
  appId: "1:621256239780:web:da616515d2787939981431",
  measurementId: "G-Y9PB8DBXRZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
export default db;
