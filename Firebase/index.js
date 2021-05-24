import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyByw68Solhwl2JzGnVn2dfqa9WpqQe3vxI",
  authDomain: "djrain-801e0.firebaseapp.com",
  projectId: "djrain-801e0",
  storageBucket: "djrain-801e0.appspot.com",
  messagingSenderId: "547170339849",
  appId: "1:547170339849:web:2468987589566ec79abcd8",
  measurementId: "G-7LMVS0RQDM",
};

let app;
let provider;
if (firebase.default.apps.length === 0) {
  app = firebase.default.initializeApp(firebaseConfig);
  
} else {
  app = firebase.default.app();
}


const db = app.firestore();
const auth = app.auth();
const storage = app.storage();

export { db, auth, storage, provider };
