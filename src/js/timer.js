const startBtn = document.querySelector(".start-play");
const stopwatch = document.querySelector(".stopwatch");
const result = document.querySelector(".result");
const goodBtn = document.querySelector(".good-answer");
const badBtn = document.querySelector(".wrong-answer");

let countTime;
let minutes = 2;
let seconds = 0;
let points = 0;

const handleStart = () => {
	clearInterval(countTime);

	countTime = setInterval(() => {
		seconds--;

		if (seconds === -1) {
			minutes--;
			if (minutes === 0) {
				stopwatch.style.color = "red";
			}
			seconds = 59;
			stopwatch.textContent = `${minutes}:${seconds}`;
		} else if (minutes === 0 && seconds <= 30) {
			stopwatch.classList.add("pulse");
			stopwatch.textContent = `${minutes}:${seconds}`;
		} else if (seconds < 10) {
			stopwatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 10 && seconds <= 59) {
			stopwatch.textContent = `${minutes}:${seconds}`;
		}
	}, 1000);
};

startBtn.addEventListener("click", handleStart);

goodBtn.addEventListener("click", () => {
	points += 5;
	result.textContent = points;
	result.classList.add("addPoint");
	setTimeout(() => {
		result.classList.remove("addPoint");
	}, 1000);
});

badBtn.addEventListener("click", () => {
	points -= 5;
	result.textContent = points;
	result.classList.add("removePoint");
	setTimeout(() => {
		result.classList.remove("removePoint");
	}, 1000);
});
