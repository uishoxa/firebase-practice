import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAUKS-1dcN17y-iOIZJ1pz6UDp8Lf6pK9g",
    authDomain: "fir-r-81e40.firebaseapp.com",
    projectId: "fir-r-81e40",
    storageBucket: "fir-r-81e40.appspot.com",
    messagingSenderId: "228448450074",
    appId: "1:228448450074:web:80ff52aa1a2ed7c52b83a3",
    measurementId: "G-VF1KSJ3MJ4"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

