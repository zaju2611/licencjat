const score = document.querySelector(".resultPopupValue");

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import {
	getDatabase,
	ref,
	onValue,
	update,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const urlParams = new URLSearchParams(window.location.search);
const gameType = urlParams.get("game");
console.log(gameType);

const auth = getAuth(app);

const updateHighscore = (newScore) => {
	const user = auth.currentUser;

	if (user) {
		const userId = user.uid;
		const userRef = ref(db, "users/" + userId);
		console.log(user.uid);
		return new Promise((resolve, reject) => {
			onValue(userRef, (snapshot) => {
				if (gameType === "flat") {
					const currentHighScore = snapshot.val().highScoreFlat;
					if (newScore > currentHighScore) {
						update(userRef, { highScoreFlat: newScore })
							.then(() => {
								console.log("User's high score flat has been updated.");
								resolve();
							})
							.catch((error) => {
								console.error("Error updating user's high score flat: ", error);
								reject(error);
							});
					} else {
						location.href = "http://localhost:3000/index.html";
					}
				} else if (gameType === "spatial") {
					const currentHighScore = snapshot.val().highScoreSpatial;
					if (newScore > currentHighScore) {
						update(userRef, { highScoreSpatial: newScore })
							.then(() => {
								console.log("User's high score spatial has been updated.");
								resolve();
							})
							.catch((error) => {
								console.error(
									"Error updating user's high score spatial: ",
									error
								);
								reject(error);
							});
					} else {
						location.href = "http://localhost:3000/index.html";
					}
				} else if (gameType === "mix") {
					const currentHighScore = snapshot.val().highScoreMix;
					if (newScore > currentHighScore) {
						update(userRef, { highScoreMix: newScore })
							.then(() => {
								console.log("User's high score mix has been updated.");
								resolve();
							})
							.catch((error) => {
								console.error("Error updating user's high score mix: ", error);
								reject(error);
							});
					} else {
						location.href = "http://localhost:3000/index.html";
					}
				}
			});
		});
	} else {
		return Promise.reject("No user is currently logged in.");
	}
};

closeBtn.addEventListener("click", async () => {
	await updateHighscore(Number(score.textContent));
	location.href = "http://localhost:3000/index.html";
});
