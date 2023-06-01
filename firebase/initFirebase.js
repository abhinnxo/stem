import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// the below imports are option
// import " firebase/auth ";
// import " firebase/ firestore";
// import "firebase/storage";
// import "firebase/analytics";
// import "firebase / performance";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const clientCredentials = {
  apiKey: "AIzaSyAM2ZKj6EERDGHsUAZnWLLleBDiXp4UZ2I",
  authDomain: "stem-medics.firebaseapp.com",
  projectId: "stem-medics",
  storageBucket: "stem-medics.appspot.com",
  messagingSenderId: "485147170789",
  appId: "1:485147170789:web:8bc70013cbb55cb7f1010c",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);

    // Check that 'windowe is in scope for the analytics
    if (typeof window !== "undefined") {
      // Enable analytics. https://firebase.google. com/d
      if ("measurementld" in clientCredentials) {
        firebase.analytics();
        firebase.performance();
      }
    }
    console.log("Firebase was successfull init.");
  }
}
