import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyDi-bbg3KEwHOH8qOdHJRLtFcc8eVv-bMk",
    authDomain: "bvec-code-club-dev.firebaseapp.com",
    projectId: "bvec-code-club-dev",
    storageBucket: "bvec-code-club-dev.appspot.com",
    messagingSenderId: "763790961846",
    appId: "1:763790961846:web:a4359b676e600b1f69ca17",
    measurementId: "G-ML722EKFPP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };