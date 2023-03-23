const btns = document.querySelectorAll(
	".main_game-mode-container-buttons-button"
);

const alertInfo = document.querySelector(".info");

const unlockBtns = (arr) => {
	const user = JSON.parse(sessionStorage.getItem("user"));
	if (user) {
		arr.forEach((element) => {
			element.disabled = false;
		});
		alertInfo.style.display = "none";
	} else {
		arr.forEach((element) => {
			element.disabled = true;
		});
	}
};

unlockBtns(btns);
