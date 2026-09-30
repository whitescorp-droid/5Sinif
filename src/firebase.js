import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCMU4r3WEk9LyqrXJo3sDUFrpShGd-V87U",
  authDomain: "bessinif.firebaseapp.com",
  projectId: "bessinif",
  storageBucket: "bessinif.firebasestorage.app",
  messagingSenderId: "756872654762",
  appId: "1:756872654762:web:0f5d2298b36c04033845d3",
  measurementId: "G-MLMQLR2QQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
