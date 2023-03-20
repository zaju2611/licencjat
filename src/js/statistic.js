const button = document.querySelector(".buttonPopup");
const score = document.querySelector(".resultPopupValue");

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import {
	getDatabase,
	ref,
	onValue,
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

const auth = getAuth(app);

const updateHighscore = (newScore) => {
	const user = auth.currentUser;

	if (user) {
		const userId = user.uid;
		const userRef = ref(db, "users/" + userId);

		onValue(userRef, (snapshot) => {
			const currentHighScore = snapshot.val().highScore;

			if (newScore > currentHighScore) {
				update(userRef, { highScore: newScore })
					.then(() => {
						console.log("User's high score has been updated.");
					})
					.catch((error) => {
						console.error("Error updating user's high score: ", error);
					});
			} else {
				console.log("New score is lower than the current high score.");
			}
		});
	} else {
		console.error("No user is currently logged in.");
	}
};

button.addEventListener("click", () => {
	updateHighscore(Number(score.textContent));
	location.href = "http://localhost:3000/index.html";
});
