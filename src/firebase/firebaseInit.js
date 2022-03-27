//import firebase from "firebase/app";
//import * as firebase from "firebase/app";
//import { initializeApp } from 'firebase/app';
//import "firebase/firestore";
 
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCvCODWxrnuXy622Gc5m1hyZe_YDqjGOX8",
    authDomain: "invoice-bb2a8.firebaseapp.com",
    projectId: "invoice-bb2a8",
    storageBucket: "invoice-bb2a8.appspot.com",
    messagingSenderId: "849584415942",
    appId: "1:849584415942:web:0e55e20d6aa827025223c7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore();