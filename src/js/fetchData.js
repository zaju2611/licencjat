const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });
const taskContent = document.querySelector(".content");
const answerCard = document.querySelector(
	".mainDraw_container-cards-container-answer-board"
);
const result = document.querySelector(".result");
const goodBtn = document.querySelector(".good-answer");
const badBtn = document.querySelector(".wrong-answer");
const startBtn = document.querySelector(".start-play");
const answerBtns = document.querySelectorAll(".button-answer");
const clearCanvas = document.querySelector(".clear-canvas");
const drawingCard = document.querySelector(
	".mainDraw_container-cards-container-drawing-board"
);
const arr = [];
let points = 0;
let index = Math.floor(Math.random() * 7) + 1;
arr.push(index);
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
	getDatabase,
	ref,
	child,
	get,
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

const database = getDatabase(app);

function setBackground(index) {
	const backgroundImage = new Image();
	const dataRef = ref(getDatabase());
	get(child(dataRef, `exercise/${index}`))
		.then((snapshot) => {
			if (snapshot.exists()) {
				const data = snapshot.val();
				backgroundImage.src = data.z;
			} else {
				console.log("no data available");
			}
		})
		.catch((error) => {
			console.error(error);
		});

	backgroundImage.addEventListener("load", () => {
		ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
	});
}

function setTaskContent(index) {
	const dataRef = ref(getDatabase());
	get(child(dataRef, `exercise/${index}`))
		.then((snapshot) => {
			if (snapshot.exists()) {
				const data = snapshot.val();
				taskContent.textContent = data.t;
			} else {
				console.log("no data available");
			}
		})
		.catch((error) => {
			console.error(error);
		});
}

function setAnswer(index) {
	const dataRef = ref(getDatabase());
	get(child(dataRef, `exercise/${index}`))
		.then((snapshot) => {
			if (snapshot.exists()) {
				const data = snapshot.val();
				answerCard.style.backgroundImage = `url('${data.o}')`;
				answerCard.style.backgroundSize = "contain";
			} else {
				console.log("no data available");
			}
		})
		.catch((error) => {
			console.error(error);
		});
}

function addPoint(index) {
	const dataRef = ref(getDatabase());
	get(child(dataRef, `exercise/${index}`))
		.then((snapshot) => {
			if (snapshot.exists()) {
				const data = snapshot.val();
				points += data.p;
				result.textContent = points;
			} else {
				console.log("no data available");
			}
		})
		.catch((error) => {
			console.error(error);
		});

	result.classList.add("addPoint");
	setTimeout(() => {
		result.classList.remove("addPoint");
	}, 1000);
}

function removePoint(index) {
	const dataRef = ref(getDatabase());
	get(child(dataRef, `exercise/${index}`))
		.then((snapshot) => {
			if (snapshot.exists()) {
				const data = snapshot.val();
				points -= data.p;
				result.textContent = points;
			} else {
				console.log("no data available");
			}
		})
		.catch((error) => {
			console.error(error);
		});

	result.classList.add("removePoint");
	setTimeout(() => {
		result.classList.remove("removePoint");
	}, 1000);
}

function setData(index) {
	setBackground(index);
	setTaskContent(index);
	setAnswer(index);
}

function removeAnswerCards() {
	answerCard.classList.remove("a-active");
	drawingCard.classList.remove("d-active");
	answerBtns.forEach((element) => {
		element.classList.remove("b-active");
	});
}

function getRandomUniqueNumber(min, max, arr) {
	let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	while (arr.includes(randomNumber)) {
		randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	}
	arr.push(randomNumber);
	return randomNumber;
}

clearCanvas.addEventListener("click", function () {
	setData(index);
});

startBtn.addEventListener("click", function () {
	setData(index);
});

goodBtn.addEventListener("click", function () {
	addPoint(index);
	index = getRandomUniqueNumber(1, 7, arr);
	console.log(index);
	setData(index);
	removeAnswerCards();
});

badBtn.addEventListener("click", function () {
	removePoint(index);
	index = getRandomUniqueNumber(1, 7, arr);
	console.log(index);
	setData(index);
	removeAnswerCards();
});