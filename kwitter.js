function done(){
  
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjVB2GPWPv3xlFMILzjddE4Qnbl-jNxHk",
  authDomain: "meetable-e3495.firebaseapp.com",
  projectId: "meetable-e3495",
  storageBucket: "meetable-e3495.appspot.com",
  messagingSenderId: "19998622920",
  appId: "1:19998622920:web:db67f8e71c11e7ca2c91fd",
  measurementId: "G-TQZ6TZHDNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//extra
function done(){
   var email= document.getElementById("el_mail").value;
   localStorage.setItem("e-mail",email);
   var passcode = document.getElementById("passcode_1").value;
   localStorage.setItem("passcode", passcode);
   var username = document.getElementById("user_your_name").value;
   localStorage.setItem("yourname",username) ;
   window.location="kwitter_room.html";

   firebase.database().ref("/").child(username).update({
      purpose : "Username"
    });

    firebase.database().ref("/").child(passcode).update({
      purpose : "passcode"
    });

    firebase.database().ref("/").child(email).update({
      purpose : "email"
    });
}  