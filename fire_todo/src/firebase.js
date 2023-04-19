// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYMwjzHXWq_SlQqW6nsM5-nRtID4ZDEn8",
  authDomain: "todolist-69bd1.firebaseapp.com",
  projectId: "todolist-69bd1",
  storageBucket: "todolist-69bd1.appspot.com",
  messagingSenderId: "762626152263",
  appId: "1:762626152263:web:943898d38067391d7b9e62",
  measurementId: "G-XXW10ET0P7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
