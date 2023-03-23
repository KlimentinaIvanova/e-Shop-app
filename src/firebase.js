import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCkcslnjmDgHEBVxdtjjf9u4kIDk0KqlS8",
    authDomain: "eshop-a0a13.firebaseapp.com",
    projectId: "eshop-a0a13",
    storageBucket: "eshop-a0a13.appspot.com",
    messagingSenderId: "514217263792",
    appId: "1:514217263792:web:a15748897b02785f4cb175",
    measurementId: "G-XHBD9TSWLN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
