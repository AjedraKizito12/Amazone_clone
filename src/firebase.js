import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBv3xkcQbgUhJvDwCpX_hnwKrbs1eRGIY4",
  authDomain: "clone-e272f.firebaseapp.com",
  projectId: "clone-e272f",
  storageBucket: "clone-e272f.appspot.com",
  messagingSenderId: "61991092639",
  appId: "1:61991092639:web:5940c68ec44a66f12d3daa",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
