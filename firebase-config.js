const firebaseConfig = {
  apiKey: "AIzaSyAADWbdJOAbIZOBhDklehWsRXadIDmYI8I",
  authDomain: "novex-codm-ee936.firebaseapp.com",
  projectId: "novex-codm-ee936",
  storageBucket: "novex-codm-ee936.firebasestorage.app",
  messagingSenderId: "430297936121",
  appId: "1:430297936121:web:4fa5a4acdb7f32aeb8b228",
  measurementId: "G-S3CT7E3B59"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

console.log("NØV3X Firebase connected!");
