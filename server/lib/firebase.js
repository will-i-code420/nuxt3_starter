// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.NUXT_FIREBASE_API_KEY,
  authDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NUXT_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NUXT_FIREBASE_APP_ID,
  measurementId: process.env.NUXT_FIREBASE_MEASUREMENT_ID
};


// Initialize Firebase
const apps = getApps()
let firebaseApp

if (!apps.length) {
  firebaseApp = initializeApp(firebaseConfig)
} else {
  firebaseApp = apps[0]
}
// Initialize Analytics
//const analytics = getAnalytics(app);

// Initialize Firestore DB
const db = getFirestore(firebaseApp)

// Initialize Firebase Auth
const auth = getAuth(firebaseApp)

export { db, auth }
