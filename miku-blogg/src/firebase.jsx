// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpK19E8a2fSp_ce2vYj8EbHj4axqxMs6Q",
  authDomain: "mikublogg-f06fe.firebaseapp.com",
  projectId: "mikublogg-f06fe",
  storageBucket: "mikublogg-f06fe.appspot.com",
  messagingSenderId: "115479034331",
  appId: "1:115479034331:web:9c1d3d5aaa72b7fd6d4ffe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };