import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAHZwKeJMmhe2_gOiJzOXosk5OLt0jWQkQ",
    authDomain: "raven-e430f.firebaseapp.com",
    projectId: "raven-e430f",
    storageBucket: "raven-e430f.appspot.com",
    messagingSenderId: "972725346222",
    appId: "1:972725346222:web:249f6bf89c5564cb33723f",
    measurementId: "G-NKF9T2W7JR",
};
const firebaseApp = firebase.intializeApp(firebaseConfig);

const database = firebaseApp.firestore();
export default database;