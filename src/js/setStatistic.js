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

const gameTypeData = {
	flat: "highScoreFlat",
	spatial: "highScoreSpatial",
	mix: "highScoreMix",
};

const updateHighscore = (newScore) => {
	const user = auth.currentUser;

	if (user) {
		const userId = user.uid;
		const userRef = ref(db, "users/" + userId);
		console.log(user.uid);
		return new Promise((resolve, reject) => {
			onValue(userRef, (snapshot) => {
				const currentHighScore = snapshot.val()[gameTypeData[gameType]];
				if (newScore > currentHighScore) {
					update(userRef, { [gameTypeData[gameType]]: newScore })
						.then(() => {
							console.log(`User's high score ${gameType} has been updated.`);
							resolve();
						})
						.catch((error) => {
							console.error(
								`Error updating user's high score ${gameType}: `,
								error
							);
							reject(error);
						});
				} else {
					location.href = "http://localhost:3000/index.html";
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
