
import { getFirestore } from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqS0vXtpp4EDuSxto2gVUQEJ64ElwWwso",
  authDomain: "miniblog-react-ed062.firebaseapp.com",
  databaseURL: "https://miniblog-react-ed062-default-rtdb.firebaseio.com",
  projectId: "miniblog-react-ed062",
  storageBucket: "miniblog-react-ed062.appspot.com",
  messagingSenderId: "653226579038",
  appId: "1:653226579038:web:1fd26fce0c82c2495650cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }