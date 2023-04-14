import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDuBv2Oe9z-GbK1_4z0lZ1YItTjpvW1mEE",
    authDomain: "bus-tracking-413e9.firebaseapp.com",
    projectId: "bus-tracking-413e9",
    storageBucket: "bus-tracking-413e9.appspot.com",
    messagingSenderId: "1060686863637",
    appId: "1:1060686863637:web:dfb102f0a13fafabfa1d1c",
    measurementId: "G-25ZW5RLGTR"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const auth = getAuth(app)
const db = getFirestore(app);

export { db, auth, storage };