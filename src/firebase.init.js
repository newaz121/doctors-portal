// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAPU1eUVK_aAkrkjFGOxygD0qhUiYqQ6A",
    authDomain: "doctore-portal.firebaseapp.com",
    projectId: "doctore-portal",
    storageBucket: "doctore-portal.appspot.com",
    messagingSenderId: "780716084050",
    appId: "1:780716084050:web:af9b8fcc5b0fdbf1b9088b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;