// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.GOOGLE_FIREBASE_API_KEY,
  authDomain: process.env.GOOGLE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.GOOGLE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_GOOGLE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GOOGLE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.GOOGLE_FIREBASE_APP_ID,
  measurementId: process.env.GOOGLE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage }; 
// const analytics = getAnalytics(app);