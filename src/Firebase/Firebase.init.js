// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEBRut2aWqe54KbevcB_icfIGrFrlsvgk",
  authDomain: "auth-daisy-ui.firebaseapp.com",
  projectId: "auth-daisy-ui",
  storageBucket: "auth-daisy-ui.appspot.com",
  messagingSenderId: "968572012405",
  appId: "1:968572012405:web:9b428cf154ebe6ef19753c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app