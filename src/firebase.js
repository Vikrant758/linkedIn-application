import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA4hfBS4SOWx0Yw-ACwFz1_UkQ_84bJiYk",
    authDomain: "linked-app-2468f.firebaseapp.com",
    projectId: "linked-app-2468f",
    storageBucket: "linked-app-2468f.appspot.com",
    messagingSenderId: "607999993485",
    appId: "1:607999993485:web:860a71e82cfc4a1e4be4c4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage;

export { auth, provider, storage };

export default db;  