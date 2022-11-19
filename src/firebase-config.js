import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Navigate } from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyCzCM8QJm1U-6-3LTq725uITuo1qqJ3-1Q",
    authDomain: "dashboardtracker-3da5b.firebaseapp.com",
    projectId: "dashboardtracker-3da5b",
    storageBucket: "dashboardtracker-3da5b.appspot.com",
    messagingSenderId: "359166423803",
    appId: "1:359166423803:web:ae29f3304925f848bff65e"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

const provider = new  GoogleAuthProvider();

export const signInWithGoogle = () => {

  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePicture = result.user.photoURL;

      localStorage.setItem('name', name);
      localStorage.setItem('email', email)
      localStorage.setItem('profilePicture', profilePicture)

      Navigate('/dashboard')

    }).catch((error) => {
    console.log(error);
    })
};