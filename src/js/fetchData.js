const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });
const taskContent = document.querySelector(".content");
const answerCard = document.querySelector(
	".mainDraw_container-cards-container-answer-board"
);
const checkAnswer = document.querySelector(".check-answer");
const result = document.querySelector(".result");
const goodBtn = document.querySelector(".good-answer");
const badBtn = document.querySelector(".wrong-answer");
const startBtn = document.querySelector(".start-play");
const answerBtns = document.querySelectorAll(".button-answer");
const clearCanvas = document.querySelector(".clear-canvas");
const drawingCard = document.querySelector(
	".mainDraw_container-cards-container-drawing-board"
);
const userPoints = document.querySelector(".points");
const nextBtn = document.querySelector(".next");
const resultPopup = document.querySelector(".resultPopup");
const urlParams = new URLSearchParams(window.location.search);
const gameType = urlParams.get("game");

const arr = [];
let points = 0;
let index = 0;

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
	getDatabase,
	ref,
	child,
	get,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

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
		const aspectRatio = backgroundImage.width / backgroundImage.height;
		let width = canvas.width;
		let height = canvas.height;
		if (width / aspectRatio < height) {
			height = width / aspectRatio;
		} else {
			width = height * aspectRatio;
		}

		const x = (canvas.width - width) / 2;
		const y = (canvas.height - height) / 2;

		ctx.drawImage(backgroundImage, x, y, width, height);
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
				answerCard.style.backgroundPosition = "center";
				answerCard.style.backgroundRepeat = "no-repeat";
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

const randUniqueNumber = (min, max) => {
	const index = Math.floor(Math.random() * (max - min + 1)) + min;
	return index;
};

const fetchData = (gameType) => {
	if (gameType === "flat") {
		index = randUniqueNumber(1, 23);
	} else if (gameType === "spatial") {
		index = randUniqueNumber(24, 41);
	} else if (gameType === "mix" || gameType === "teacher") {
		index = randUniqueNumber(1, 41);
	}
	console.log(index);
};

function getRandomUniqueNumber(arr) {
	fetchData(gameType);
	while (arr.includes(index)) {
		fetchData(gameType);
	}
	arr.push(index);
	return index;
}

if (gameType === "teacher") {
	nextBtn.style.display = "block";
	checkAnswer.style.display = "none";
	goodBtn.style.display = "none";
	badBtn.style.display = "none";
	userPoints.style.display = "none";
	resultPopup.style.display = "none";
	document.querySelector(".downloadFile").style.display = "block";
	document.querySelector(".textPopup").textContent =
		"Pobierz plik z odpowiedziami";
}

nextBtn.addEventListener("click", () => {
	index = getRandomUniqueNumber(arr);
	setData(index);
});

clearCanvas.addEventListener("click", function () {
	setData(index);
});

startBtn.addEventListener("click", function () {
	fetchData(gameType);
	setData(index);
	arr.push(index);
	clearCanvas.disabled = false;
	checkAnswer.disabled = false;
	nextBtn.disabled = false;
	startBtn.disabled = true;
});

goodBtn.addEventListener("click", function () {
	addPoint(index);
	index = getRandomUniqueNumber(arr);
	console.log(index);
	setData(index);
	removeAnswerCards();
	window.scrollTo(0, 0);
});

badBtn.addEventListener("click", function () {
	removePoint(index);
	index = getRandomUniqueNumber(arr);
	setData(index);
	removeAnswerCards();
	window.scrollTo(0, 0);
});
