import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCkqxsZrSvxHxCBrz3on05eVmCq_oRZ-Mk",
    authDomain: "record-reserve-f9783.firebaseapp.com",
    projectId: "record-reserve-f9783",
    storageBucket: "record-reserve-f9783.appspot.com",
    messagingSenderId: "575292874176",
    appId: "1:575292874176:web:6fa3587920fbf3fdfc3c25",
    measurementId: "G-BLDNL560ST"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app)