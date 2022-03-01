// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpDRrhF6C5DYrKvs7LM6iZNaQo52BRU7M",
  authDomain: "react-js-push-notifications.firebaseapp.com",
  projectId: "react-js-push-notifications",
  storageBucket: "react-js-push-notifications.appspot.com",
  messagingSenderId: "373001037859",
  appId: "1:373001037859:web:31505f44dca6eb5ff26996",
  measurementId: "G-8JS5XSM4YP"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);
export default firebaseConfig;