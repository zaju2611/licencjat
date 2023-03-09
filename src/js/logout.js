import { signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const signout = document.querySelector(".sign-out");

signout.addEventListener("click", (e) => {
	e.preventDefault();
	signOut(auth)
		.then(() => {
			alert("Wylogowano pomyślnie");
			sessionStorage.removeItem("user");
		})
		.catch((error) => {
			alert("błąd przy wylogowywaniu");
		});
});
