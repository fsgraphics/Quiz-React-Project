import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQK9p5Z2satpO9CR4g_lhLCZzgt7K3x4A",
  authDomain: "quiz-react-dev-22b60.firebaseapp.com",
  databaseURL:
    "https://quiz-react-dev-22b60-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quiz-react-dev-22b60",
  storageBucket: "quiz-react-dev-22b60.appspot.com",
  messagingSenderId: "471535283447",
  appId: "1:471535283447:web:69140f076b7e238cb2f7f2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default { app, auth };
