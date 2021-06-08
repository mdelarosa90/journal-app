import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDOV0024lRC7ewYOwNIIapEaPekBsyNzfs",
    authDomain: "react-app-cursos-38f0b.firebaseapp.com",
    projectId: "react-app-cursos-38f0b",
    storageBucket: "react-app-cursos-38f0b.appspot.com",
    messagingSenderId: "864166405816",
    appId: "1:864166405816:web:63b6465aae2ffe2c39b64d"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}