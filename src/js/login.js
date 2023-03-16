import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import {
	getDatabase,
	set,
	ref,
	update,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
const firebaseConfig = {
	apiKey: "AIzaSyAhj6kkaS_fMvLOwL-J4SXJ_DWSwejBmlo",
	authDomain: "licencjat-2a013.firebaseapp.com",
	databaseURL: "https://licencjat-2a013-default-rtdb.firebaseio.com",
	projectId: "licencjat-2a013",
	storageBucket: "licencjat-2a013.appspot.com",
	messagingSenderId: "676690164407",
	appId: "1:676690164407:web:b234c74f6f771f59a1ab32",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

const password = document.querySelector("#password");
const email = document.querySelector("#mail");
const sendBtn = document.querySelector(".login");
const error = document.querySelector(".error-text");
const closeBtn = document.querySelector(".close");
const signin = document.querySelector(".sign-in");
const signout = document.querySelector(".sign-out");
const results = document.querySelector(".results");

const showErr = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector(".error-text");
	formBox.classList.add("error");
	errorMsg.textContent = msg;
};

sendBtn.addEventListener("click", (e) => {
	e.preventDefault();
	signInWithEmailAndPassword(auth, email.value, password.value)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			const lgDate = new Date();
			// ...
			update(ref(db, "users/" + user.uid), {
				last_login: lgDate,
			})
				.then(() => {
					email.value = "";
					password.value = "";
					error.style.visibility = "hidden";
					sessionStorage.setItem("user", JSON.stringify(user));
					location.href = "http://localhost:3000/index.html";
				})
				.catch((error) => {
					alert("error " + error);
				});
		})
		.catch((error) => {
			showErr(email, "Użytkownik nie istnieje");
		});
});

signout.addEventListener("click", (e) => {
	e.preventDefault();
	signOut(auth)
		.then(() => {
			sessionStorage.removeItem("user");
			location.href = "http://localhost:3000/index.html";
		})
		.catch((error) => {
			alert("błąd przy wylogowywaniu");
		});
});
