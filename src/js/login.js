import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
	getAuth,
	signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import {
	getDatabase,
	ref,
	update,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

const password = document.querySelector("#password");
const email = document.querySelector("#mail");
const sendBtn = document.querySelector(".login");
const error = document.querySelector(".error-text");

let err = 0;

const showErr = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector(".error-text");
	formBox.classList.add("error");
	errorMsg.textContent = msg;
};

const clearErr = (input) => {
	const formBox = input.parentElement;
	formBox.classList.remove("error");
};

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value.trim() === "") {
			showErr(el, el.placeholder.toLowerCase() + " !");
			err++;
		} else {
			clearErr(el);
			err--;
		}
	});
};

sendBtn.addEventListener("click", (e) => {
	e.preventDefault();
	checkForm([email, password]);

	signInWithEmailAndPassword(auth, email.value, password.value)
		.then((userCredential) => {
			const user = userCredential.user;
			const lgDate = new Date();

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
			if (err === 0) {
				showErr(email, "Wprowadzono błędne dane");
				email.value = "";
				password.value = "";
			}
		});
});
