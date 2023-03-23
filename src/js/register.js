import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import {
	getDatabase,
	set,
	ref,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#password2");
const email = document.querySelector("#email");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const closeBtn = document.querySelector(".close");
const popup = document.querySelector(".popup");

function registerUser() {
	createUserWithEmailAndPassword(auth, email.value, password.value)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			set(ref(db, "users/" + user.uid), {
				username: username.value,
				email: email.value,
				highScoreFlat: "",
				highScoreSpatial: "",
				highScoreMix: "",
				password: encPass(),
			})
				.then(() => {
					popup.classList.add("show-popup");
					username.value = "";
					email.value = "";
					password.value = "";
					confirmPassword.value = "";
				})
				.catch((error) => {
					alert("error " + error);
				});
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			alert(errorMessage);
		});
}

const encPass = () => {
	const pass = CryptoJS.AES.encrypt(password.value, password.value);
	return pass.toString();
};

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
		if (el.value === "") {
			showErr(el, el.placeholder + "!");
		} else {
			clearErr(el);
		}
	});
};

const checkLenght = (input, min) => {
	if (input.value.length < min) {
		showErr(
			input,
			`${input.previousElementSibling.innerText.slice(
				0,
				-1
			)} musi zawierać minimum ${min} znaki`
		);
	}
};

const checkPassword = (input1, input2) => {
	if (input1.value != input2.value) {
		showErr(input2, "Hasła są różne!");
	}
};

const checkErrors = () => {
	const allInputs = document.querySelectorAll(
		".mainRegister_container-form-box"
	);
	let errorCount = 0;
	allInputs.forEach((element) => {
		if (element.classList.contains("error")) {
			errorCount++;
		}
	});
	if (errorCount == 0) {
		registerUser();
	}
	console.log(errorCount);
};

const checkEmail = (input) => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1-3}\.[0-9]{1-3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
	if (re.test(input.value)) {
		clearErr(email);
	} else {
		showErr(input, "Email jest niepoprawny");
	}
};

clearBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const arr = [username, password, confirmPassword, email];
	arr.forEach((element) => {
		element.value = "";
		clearErr(element);
	});
});

sendBtn.addEventListener("click", (e) => {
	e.preventDefault();
	checkForm([username, password, confirmPassword, email]);
	checkLenght(username, 3);
	checkLenght(password, 8);
	checkPassword(password, confirmPassword);
	checkEmail(email);
	checkErrors();
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
closeBtn.addEventListener("click", (e) => {
	e.preventDefault();
	location.href = "http://localhost:3000/login.html";
});
