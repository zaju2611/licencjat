const startBtn = document.querySelector(".start-play");
const stopwatch = document.querySelector(".stopwatch");
const popup = document.querySelector(".popupResult");
const confettiSettings = { target: "my-canvas" };
const conf = document.querySelector("#my-canvas");
const confetti = new ConfettiGenerator(confettiSettings);
const closeBtn = document.querySelector(".buttonPopup");
const result = document.querySelector(".result");
const resultPopup = document.querySelector(".resultPopupValue");

let countTime;
let minutes = 5;
let seconds = 0;

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
			resultPopup.textContent = result.innerHTML;
			clearInterval(countTime);
		}
	}, 1000);
};

startBtn.addEventListener("click", handleStart);

closeBtn.addEventListener("click", () => {
	popup.classList.remove("activePopup");
	conf.style.visibility = "hidden";
});
confetti.render();
