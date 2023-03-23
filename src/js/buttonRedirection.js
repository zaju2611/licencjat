const flatBtn = document.querySelector(".one");
const spatialBtn = document.querySelector(".two");
const mixBtn = document.querySelector(".three");

const redirection = (name) => {
	window.location.href = `/draw.html?game=${name}`;
};

flatBtn.addEventListener("click", () => {
	redirection("flat");
});
spatialBtn.addEventListener("click", () => {
	redirection("spatial");
});
mixBtn.addEventListener("click", () => {
	redirection("mix");
});
