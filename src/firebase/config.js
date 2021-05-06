import  firebase from 'firebase';
// import 'firebase/storage';
// import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCSuv-JjS4EByAfWLBzc3O2xSD_lg_wEu8",
    authDomain: "firegram-a0b35.firebaseapp.com",
    projectId: "firegram-a0b35",
    storageBucket: "firegram-a0b35.appspot.com",
    messagingSenderId: "139538966685",
    appId: "1:139538966685:web:a571cadbbc9e6745a88c74"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp};