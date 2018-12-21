import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBDlCCq9Nc1yYCsAj_HKr0zDYNM5XXrwLI",
  authDomain: "vue-quiz-wpa.firebaseapp.com",
  databaseURL: "https://vue-quiz-wpa.firebaseio.com",
  projectId: "vue-quiz-wpa",
  storageBucket: "vue-quiz-wpa.appspot.com",
  messagingSenderId: "1045922508746"
});

export default firebase;
