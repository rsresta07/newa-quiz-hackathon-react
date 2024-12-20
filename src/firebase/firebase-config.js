// FireBase initialization 
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDXMbp67eWRJFNGvpyaHV1Ry2Dph0hzU3o",
    authDomain: "newa-quiz-database.firebaseapp.com",
    databaseURL:
        "https://newa-quiz-database-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "newa-quiz-database",
    storageBucket: "newa-quiz-database.firebasestorage.app",
    messagingSenderId: "826747483063",
    appId: "1:826747483063:web:fd33c006547835081eee32",
    measurementId: "G-DPTJDF6PBB",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);