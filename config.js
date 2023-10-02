import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseconfig = {
    apiKey: "AIzaSyBtqNDnnFoB4iKC-31O2Ud9eYYv7EL9gGs",
    authDomain: "notesapp-fbe87.firebaseapp.com",
    projectId: "notesapp-fbe87",
    storageBucket: "notesapp-fbe87.appspot.com",
    messagingSenderId: "1026619573448",
    appId: "1:1026619573448:web:4edc62221263a1bd18d1fd",
    measurementId: "G-C9YR84L57S"
}
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseconfig);
}

export {firebase};