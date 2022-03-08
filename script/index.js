import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC5k1b2Snd92Bot_kSMQy6-eonm88KjprA",
    authDomain: "github-site-authentication.firebaseapp.com",
    databaseURL: "https://github-site-authentication-default-rtdb.europe-west1.firebasedatabase.app",
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

let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let log = document.querySelector(".log")

let logout = document.querySelector("#log_out");
let login = document.querySelector("#log_in");

let user_name = document.getElementById("name");
let user_job = document.getElementById("job");

let user_image = document.getElementById("user_image");

let login_button = document.getElementById("log_in");

btn.onclick = function() {
    sidebar.classList.toggle("active");
}

searchBtn.onclick = function() {
}

logout.onclick = function() {
    signOut(auth).then(() => {
        // Sign-out successful
        log.classList.toggle("logged");
    })
    .catch((error) => {
        // an error occurred
    });
}

login.onclick = function() {
    log.classList.toggle("logged");
}

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        const uid = user.uid;
        log.classList.toggle("logged");
        
        const userdata = ref(database, "users/" + user.uid)
        onValue(userdata, (snapshot) => {
            const data = snapshot.val()
            console.log(data);

            user_name.innerHTML = data.displayname;
            user_job.innerHTML = data.username;

            if (data.userimage == "not_set") {
                user_image.classList.toggle("not_set");
            } else {
                user_image.style.backgroundImage = "ciao.jpg";
            }
        });
    } else {
        // User is signed out
        console.log("not logged");

        user_image.style.width = "0";
        login_button.style.left = "47%"

        user_name.innerHTML = "";
        user_job.innerHTML = "";
    }
});