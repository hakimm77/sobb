import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCEgC_H4Hgd0JqiFGx6idLHj-lmeEX9XQE",
  authDomain: "summer-jobs-v2.firebaseapp.com",
  projectId: "summer-jobs-v2",
  storageBucket: "summer-jobs-v2.appspot.com",
  messagingSenderId: "1066936153876",
  appId: "1:1066936153876:web:fb04ad3a6ad9242fb7b401",
  measurementId: "G-GNJ9VL6Y1Z",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
