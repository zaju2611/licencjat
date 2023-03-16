const startBtn = document.querySelector(".start-play");
const stopwatch = document.querySelector(".stopwatch");
const popup = document.querySelector(".popupResult");
const confettiSettings = { target: "my-canvas" };
const conf = document.querySelector("#my-canvas");
const confetti = new ConfettiGenerator(confettiSettings);
const closeBtn = document.querySelector(".buttonPopup");

let countTime;
let minutes = 0;
let seconds = 10;

const handleStart = () => {
	clearInterval(countTime);

	countTime = setInterval(() => {
		seconds--;

		if (seconds === -1) {
			minutes--;
			if (minutes == 0) {
				stopwatch.style.color = "red";
			}
			seconds = 59;
			stopwatch.textContent = `${minutes}:${seconds}`;
		} else if (minutes === 0 && seconds <= 30) {
			stopwatch.classList.add("pulse");
			stopwatch.textContent = `${minutes}:${seconds}`;
			if (seconds < 10) {
				stopwatch.textContent = `${minutes}:0${seconds}`;
			}
		} else if (seconds < 10) {
			stopwatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 10 && seconds <= 59) {
			stopwatch.textContent = `${minutes}:${seconds}`;
		}
		if (minutes === 0 && seconds === 0) {
			popup.classList.add("activePopup");
			conf.style.visibility = "visible";
			minutes = 0;
			seconds = 0;
			clearInterval(countTime);
		}
	}, 1000);
};

startBtn.addEventListener("click", handleStart);

closeBtn.addEventListener("click", () => {
	location.href = "http://localhost:3000/index.html";
	popup.classList.remove("activePopup");
	conf.style.visibility = "hidden";
});
confetti.render();
