const startBtn = document.querySelector(".start-play");
const stopwatch = document.querySelector(".stopwatch");

let countTime;
let minutes = 1;
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
	}, 1000);
};

startBtn.addEventListener("click", handleStart);
