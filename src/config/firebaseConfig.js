import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYMaQj_oY0PMKxGQMpCQ3GyFdAP7rh2JA",
  authDomain: "assignment-8160e.firebaseapp.com",
  projectId: "assignment-8160e",
  storageBucket: "assignment-8160e.appspot.com",
  messagingSenderId: "735149141561",
  appId: "1:735149141561:web:55f181480526f12cf7e7e8",
  measurementId: "G-HL1RL1S2QV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
