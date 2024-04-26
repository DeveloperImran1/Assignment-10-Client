// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADTAvwWdj_PMyg6KVbbVGBLHyKz6n7Tio",
  authDomain: "assignment-10-10bbc.firebaseapp.com",
  projectId: "assignment-10-10bbc",
  storageBucket: "assignment-10-10bbc.appspot.com",
  messagingSenderId: "2948646856",
  appId: "1:2948646856:web:572d12669bf0696cabe2fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;