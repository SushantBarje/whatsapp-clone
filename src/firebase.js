import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDm8pVv9a8VAFkrKzN48Tsegxvt2VeDwfQ",
  authDomain: "whatsapp-clone-ae787.firebaseapp.com",
  projectId: "whatsapp-clone-ae787",
  storageBucket: "whatsapp-clone-ae787.appspot.com",
  messagingSenderId: "786614754208",
  appId: "1:786614754208:web:a8f74173d22b213f4522c5",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

export { auth, db, storage };
