import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC5k1b2Snd92Bot_kSMQy6-eonm88KjprA",
    authDomain: "github-site-authentication.firebaseapp.com",
    databaseURL: "https://github-site-authentication-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "github-site-authentication",
    storageBucket: "github-site-authentication.appspot.com",
    messagingSenderId: "49314878365",
    appId: "1:49314878365:web:0c33e2ecdbbffce14a9574",
    measurementId: "G-SZSG4RD9HR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();

document.getElementById("signup_button").addEventListener("click", (e) => {

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        set(ref(database, "users/" + user.uid), {
            username: username,
            email: email
        });

        window.location.href = "index.html";
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..

        alert(errorMessage);
    });
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        const uid = user.uid;
    } else {
        // User is signed out
    }
});