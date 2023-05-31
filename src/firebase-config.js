import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAp3Ya07lReJoJ4Mhpbq6bhz2D2bda4lJM",
    authDomain: "fir-tutorial-953a7.firebaseapp.com",
    projectId: "fir-tutorial-953a7",
    storageBucket: "fir-tutorial-953a7.appspot.com",
    messagingSenderId: "548787763902",
    appId: "1:548787763902:web:dcdb3bf8c68b64a7d4fcef",
    measurementId: "G-3DS72LZR1H"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);