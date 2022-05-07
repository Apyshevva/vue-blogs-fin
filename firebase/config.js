import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDcFdBmVsctQw38u5OtW5XaTDIxeDS0n4U",
  authDomain: "apelsiny-841bc.firebaseapp.com",
  projectId: "apelsiny-841bc",
  storageBucket: "apelsiny-841bc.appspot.com",
  messagingSenderId: "62807825861",
  appId: "1:62807825861:web:7a352a2dec1a21f855bfac"
};

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)