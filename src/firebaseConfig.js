import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBU4f_GhW8RJ7-JUHHy6qRFSOl_TsZAveA",
  authDomain: "quizapp-9d8b6.firebaseapp.com",
  projectId: "quizapp-9d8b6",
  storageBucket: "quizapp-9d8b6.appspot.com",
  messagingSenderId: "443144477017",
  appId: "1:443144477017:web:c37b667ac3d25066d31448",
  measurementId: "G-T8S6QNT6PZ"
};

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth =getAuth(app);