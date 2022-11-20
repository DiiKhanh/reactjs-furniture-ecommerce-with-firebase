import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwpUCYeA_3ovv30HJV2uFVOWJqap9wxCo",
  authDomain: "app-ecommerce-furniture.firebaseapp.com",
  projectId: "app-ecommerce-furniture",
  storageBucket: "app-ecommerce-furniture.appspot.com",
  messagingSenderId: "1043483290656",
  appId: "1:1043483290656:web:9dce603ecaa9cf3fd8a045"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;