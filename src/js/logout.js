import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
	getAuth,
	signOut,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const app = initializeApp(firebaseConfig);

const signout = document.querySelector(".sign-out");
const auth = getAuth();

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




