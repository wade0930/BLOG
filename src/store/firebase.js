// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyALyi2p-oUbunXXYEzLPkf6zFGj4G-prlQ",
    authDomain: "blog-e3238.firebaseapp.com",
    databaseURL: "https://blog-e3238.firebaseio.com",
    projectId: "blog-e3238",
    storageBucket: "blog-e3238.appspot.com",
    messagingSenderId: "400177774554",
    appId: "1:400177774554:web:ed8b8b377beff26ce54ae3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  export { db }