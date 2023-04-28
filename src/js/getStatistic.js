import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
	getAuth,
	onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import {
	getDatabase,
	ref,
	get,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
let results = [];

const flatScore = document.querySelector(".flatScore");
const spatialScore = document.querySelector(".spatialScore");
const mixScore = document.querySelector(".mixScore");

const getHighestScores = async (user) => {
	if (user) {
		const userId = user.uid;
		const userRef = ref(db, "users/" + userId);
		const snapshot = await get(userRef);

		const highScores = {
			highScoreFlat: snapshot.val().highScoreFlat || 0,
			highScoreSpatial: snapshot.val().highScoreSpatial || 0,
			highScoreMix: snapshot.val().highScoreMix || 0,
		};

		return highScores;
	} else {
		console.log(user);
		throw new Error("No user is currently logged in.");
	}
};

onAuthStateChanged(auth, async (user) => {
	try {
		const highScores = await getHighestScores(user);
		flatScore.textContent = `${highScores.highScoreFlat} pkt`;
		spatialScore.textContent = `${highScores.highScoreSpatial} pkt`;
		mixScore.textContent = `${highScores.highScoreMix} pkt`;
	} catch (error) {
		console.error(error);
	}
});
