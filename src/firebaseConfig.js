import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2cmQYoK7-ZxURGtY0o6XywHgxFaREan0",
  authDomain: "examen-componentes.firebaseapp.com",
  projectId: "examen-componentes",
  storageBucket: "examen-componentes.firebasestorage.app",
  messagingSenderId: "774146175874",
  appId: "1:774146175874:web:062bc5a6653d0db091959b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };