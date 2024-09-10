// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfdLGgpegIgFXE3dC1yCOngpea3v_JB4U",
  authDomain: "netflixgpt-92cde.firebaseapp.com",
  projectId: "netflixgpt-92cde",
  storageBucket: "netflixgpt-92cde.appspot.com",
  messagingSenderId: "756741901275",
  appId: "1:756741901275:web:7465f8ac38fc2c170b75fe",
  measurementId: "G-XZH3KDW4N4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
