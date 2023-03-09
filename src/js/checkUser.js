const signin = document.querySelector(".sign-in");
const signout = document.querySelector(".sign-out");
const results = document.querySelector(".results");

function checkUser() {
	const user = JSON.parse(sessionStorage.getItem("user"));
	if (user) {
		signin.style.display = "none";
		signout.style.display = "inline";
		results.style.display = "inline";
	} else {
		signin.style.display = "inline";
		signout.style.display = "none";
		results.style.display = "none";
	}
}

checkUser();
