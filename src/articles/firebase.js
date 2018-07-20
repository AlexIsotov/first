import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
  // Initialize Firebase
 const config = {
    apiKey: "AIzaSyDMM0VvXs0KJg0RRpK3NapJy0QH2x8WJLs",
    authDomain: "r-blog-2740d.firebaseapp.com",
    databaseURL: "https://r-blog-2740d.firebaseio.com",
    projectId: "r-blog-2740d",
    storageBucket: "gs://r-blog-2740d.appspot.com/",
    messagingSenderId: "107265170013"
  };
  firebase.initializeApp(config);
export default firebase;