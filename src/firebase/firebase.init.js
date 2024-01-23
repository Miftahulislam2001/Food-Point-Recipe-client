// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0d-8NiQ0IFr21G1T6bwhd2a42yIFQvPw",
  authDomain: "food-points-recipe.firebaseapp.com",
  projectId: "food-points-recipe",
  storageBucket: "food-points-recipe.appspot.com",
  messagingSenderId: "274206537848",
  appId: "1:274206537848:web:2205a6dade072e3626158d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;