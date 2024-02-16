import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB3axQBV4Hb-WO_mZqDL3yB9ruypr1INUs",
  authDomain: "habit-tracker-445.firebaseapp.com",
  projectId: "habit-tracker-445",
  storageBucket: "habit-tracker-445.appspot.com",
  messagingSenderId: "680832891516",
  appId: "1:680832891516:web:9bb354f59b5e8edb4627f9",
  measurementId: "G-5KCW18B6XS"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;