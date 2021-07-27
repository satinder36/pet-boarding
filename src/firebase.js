import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCkITbD1CpytXenlQQ4BbJyEtXIktVbpyA",
  authDomain: "pet-boarding-dea55.firebaseapp.com",
  projectId: "pet-boarding-dea55",
  storageBucket: "pet-boarding-dea55.appspot.com",
  messagingSenderId: "83066167623",
  appId: "1:83066167623:web:a92b63cb2c7b1e305b2c62",
  measurementId: "G-5DVMP0KJSK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebase.firestore();

export { auth, provider, storage, db };
