// import firebase from "firebase/compat/app";

// const config = {
//   apiKey: "AIzaSyBg8TllQPvi9nVaQswqsxtCfXghHm0-lCk",
//   authDomain: "matrimonial-webearl.firebaseapp.com",
//   projectId: "matrimonial-webearl",
//   storageBucket: "matrimonial-webearl.appspot.com",
//   messagingSenderId: "667451067288",
//   appId: "1:667451067288:web:fbf91ba5e2402404c9b9ed",
//   measurementId: "G-QK64ERKJMR",
// };

// firebase.initializeApp(config);

// export default firebase;

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASOEAxuhuMgZUnrle0xVC6VqIwK5n_2Wc",
  authDomain: "chatapp-1c582.firebaseapp.com",
  projectId: "chatapp-1c582",
  storageBucket: "chatapp-1c582.appspot.com",
  messagingSenderId: "18617818797",
  appId: "1:18617818797:web:e8263bfec05811b0333024",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export const auth = getAuth(app);
