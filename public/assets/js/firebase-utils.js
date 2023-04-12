// Import the functions you need from the SDKs you need
import { initializeApp } from "/firebase/app";
import { getAnalytics } from "/firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDshJ5xVOd4raxowLRh4zFlSfMg7m9OY98",
  authDomain: "hr-api-helper.firebaseapp.com",
  projectId: "hr-api-helper",
  storageBucket: "hr-api-helper.appspot.com",
  messagingSenderId: "960422278630",
  appId: "1:960422278630:web:db3bd7869a86ba512e5227",
  measurementId: "G-1NGWGC7H8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app);