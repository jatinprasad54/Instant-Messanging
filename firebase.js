import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGAvfuTyNPd53rw23JfIVgW-olKXF-_AU",
    authDomain: "whatsapp-2-9ddfb.firebaseapp.com",
    projectId: "whatsapp-2-9ddfb",
    storageBucket: "whatsapp-2-9ddfb.appspot.com",
    messagingSenderId: "91091926805",
    appId: "1:91091926805:web:8a3f09542ce7efd023731c"
  };

  const app= !firebase.apps.length 
       ? firebase.initializeApp(firebaseConfig) 
       : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};