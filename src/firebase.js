import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyBybyI9eDoYOwZSLlYsD3hbEzFg0Q0Ce6Q",
    authDomain: "psyc-7fd4c.firebaseapp.com",
    databaseURL: "https://psyc-7fd4c-default-rtdb.firebaseio.com",
    projectId: "psyc-7fd4c",
    storageBucket: "psyc-7fd4c.appspot.com",
    messagingSenderId: "446269154095",
    appId: "1:446269154095:web:d63a0b44a09a1f1a84f7da",
    measurementId: "G-5STQGKZJX6"
})

// used for the firestore refs
export const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const users = collection(db, 'users')