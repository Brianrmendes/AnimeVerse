import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "Enter your api key",
  authDomain: "animeverse-96170.firebaseapp.com",
  projectId: "animeverse-96170",
  storageBucket: "animeverse-96170.appspot.com",
  messagingSenderId: "486507832362",
  appId: "1:486507832362:web:88b9403994ecb8877d4f53",
  measurementId: "G-S6553NVJQ2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;