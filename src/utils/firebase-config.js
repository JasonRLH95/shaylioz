import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBiLI9KIZhJiGGFQ3rJOX2VSvkmsiDZ_eM",
  authDomain: "shaylioz-events.firebaseapp.com",
  projectId: "shaylioz-events",
  storageBucket: "shaylioz-events.appspot.com",
  messagingSenderId: "2530013703",
  appId: "1:2530013703:web:214df4ee946e40a52770a2",
  measurementId: "G-05C9Z8XMT4"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
const analytics = getAnalytics(app);