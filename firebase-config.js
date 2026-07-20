// firebase-config.js
// Paste your Firebase Web App config below. databaseURL is required.

window.firebaseConfig = {
  apiKey: "AIzaSyDwIzffj-frpoHdXCwikjXJQUA3nfV0IH4",
  authDomain: "juho-jeon.firebaseapp.com",
  databaseURL: "https://juho-jeon-default-rtdb.firebaseio.com",
  projectId: "juho-jeon",
  storageBucket: "juho-jeon.firebasestorage.app",
  messagingSenderId: "959274699904",
  appId: "1:959274699904:web:3b2dfc6ea8a857f9b0ea65",
  measurementId: "G-VBNL1TPMJJ"
};

window.firebaseApp = firebase.initializeApp(window.firebaseConfig);
window.db = firebase.database();
console.log("Firebase initialized:", window.firebaseConfig.projectId, window.firebaseConfig.databaseURL);
