import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCf2ktO1E_AKT4B_yqwvUwgne6Bdp6KwTk",
  authDomain: "productsproject-38515.firebaseapp.com",
  projectId: "productsproject-38515",
  storageBucket: "productsproject-38515.appspot.com",
  messagingSenderId: "1023194023814",
  appId: "1:1023194023814:web:646860535c2d081a17ce07",
  databaseURL:
    "https://productsproject-38515-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
