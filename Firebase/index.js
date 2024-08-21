import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyByw68Solhwl2JzGnVn2dfqa9WpqQe3vxI",
  authDomain: "djrain-801e0.firebaseapp.com",
  projectId: "djrain-801e0",
  storageBucket: "djrain-801e0.appspot.com",
  messagingSenderId: "547170339849",
  appId: "1:547170339849:web:2468987589566ec79abcd8",
  measurementId: "G-7LMVS0RQDM",
};

if (!firebase.apps.length) {
  console.log("Firebase Initialize");
  firebase.initializeApp(firebaseConfig);
} else {
  console.log("Firebase Reuse");
}

const app = firebase.app();
const db = app.firestore();
const auth = app.auth();
const storage = app.storage();

export { db, auth, storage };
