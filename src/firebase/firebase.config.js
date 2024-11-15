// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANUS8DZe_zCWbjCGzE4L9tf2GYB3OKf0M",
  authDomain: "dragon-news-12937.firebaseapp.com",
  projectId: "dragon-news-12937",
  storageBucket: "dragon-news-12937.firebasestorage.app",
  messagingSenderId: "752805097357",
  appId: "1:752805097357:web:2b3bf293c106a6cd3357c4"
};


const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
