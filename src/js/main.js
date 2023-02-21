const footerYear = document.querySelector(".footer_year");
const answerCard = document.querySelector(
	".mainDraw_container-cards-container-answer-board"
);
const drawingCard = document.querySelector(
	".mainDraw_container-cards-container-drawing-board"
);
const checkBtn = document.querySelector(".check-answer");
const answerBtns = document.querySelectorAll(".button-answer");
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

checkBtn.addEventListener("click", () => {
	answerCard.classList.toggle("a-active");
	drawingCard.classList.toggle("d-active");
	answerBtns.forEach((element) => {
		element.classList.toggle("b-active");
	});
});
