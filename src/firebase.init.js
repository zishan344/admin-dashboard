// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoENxTiY8Gz1lWs-ZYyqc65LeIUEMLoGY",
  authDomain: "admin-dashboard-86075.firebaseapp.com",
  projectId: "admin-dashboard-86075",
  storageBucket: "admin-dashboard-86075.appspot.com",
  messagingSenderId: "619894232221",
  appId: "1:619894232221:web:86e4f6449e4b4b1e4bb074",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
