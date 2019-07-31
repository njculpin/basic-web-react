import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/functions';

const config = {
  // LIVE KEY
  apiKey: "AIzaSyAIsfHnRRIiQVxsUBwmxmHA_phXItkfeIg",
  authDomain: "basic-43df1.firebaseapp.com",
  databaseURL: "https://basic-43df1.firebaseio.com",
  projectId: "basic-43df1",
  storageBucket: "",
  messagingSenderId: "585909185995",
  appId: "1:585909185995:web:36b420e491a7d799"
};

// Initialize the default app
export const defaultApp = firebase.initializeApp(config);
export const auth = defaultApp.auth();
export const storage = defaultApp.storage();
export const firestore = defaultApp.firestore();
export const functions = defaultApp.functions();
