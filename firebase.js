// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_zOPs1NEsxhN9YmT6CNCGdM3U8pdFLeg",
  authDomain: "pantry-trackin.firebaseapp.com",
  projectId: "pantry-trackin",
  storageBucket: "pantry-trackin.appspot.com",
  messagingSenderId: "490672118347",
  appId: "1:490672118347:web:8f49da2003c6769199cbce",
  measurementId: "G-NQZ6TJ72X3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
