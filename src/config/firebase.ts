
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAIBxoop3o82-NsE57F-5rsZ7DDOzBL838",
  authDomain: "momentum-multiply-poc.firebaseapp.com",
  databaseURL: "https://momentum-multiply-poc.firebaseio.com",
  projectId: "momentum-multiply-poc",
  storageBucket: "momentum-multiply-poc.appspot.com",
  messagingSenderId: "342736840552",
  appId: "1:342736840552:web:0582ecfac8dd8c49"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
