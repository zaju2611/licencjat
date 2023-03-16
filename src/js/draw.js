const colorDiv = document.querySelector(".setColor");
const colorPicker = document.getElementById("color-picker");
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });
const toolsBtns = document.querySelectorAll(".tool");
const fillColor = document.querySelector("#fill-color");
const sizeSlider = document.querySelector("#size-slider");
const colorsBtns = document.querySelectorAll(".colors .option");
const clearCanvas = document.querySelector(".clear-canvas");
const answerCard = document.querySelector(
	".mainDraw_container-cards-container-answer-board"
);
const drawingCard = document.querySelector(
	".mainDraw_container-cards-container-drawing-board"
);
const checkBtn = document.querySelector(".check-answer");
const answerBtns = document.querySelectorAll(".button-answer");
let isDrawing = false;
let brushWidth = 5;
let selectedTool = "brush";
let prevMouseX, prevMouseY, snapshot;
let selectedColor = "#000000";
let data = 0;

window.addEventListener("load", () => {
	canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
});

const setColor = () => {
	colorDiv.style.backgroundColor = colorPicker.value;
	selectedColor = colorPicker.value;
};

const startDraw = (e) => {
	isDrawing = true;
	prevMouseX = e.offsetX;
	prevMouseY = e.offsetY;
	ctx.beginPath();
	ctx.lineWidth = brushWidth;
	ctx.strokeStyle = selectedColor;
	ctx.fillStyle = selectedColor;
	snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
};

const stopDraw = () => {
	isDrawing = false;
};

const drawRect = (e) => {
	if (!fillColor.checked) {
		return ctx.strokeRect(
			e.offsetX,
			e.offsetY,
			prevMouseX - e.offsetX,
			prevMouseY - e.offsetY
		);
	}
	ctx.fillRect(
		e.offsetX,
		e.offsetY,
		prevMouseX - e.offsetX,
		prevMouseY - e.offsetY
	);
};

const drawCircle = (e) => {
	ctx.beginPath();
	let radius = Math.sqrt(
		Math.pow(prevMouseX - e.offsetX, 2) + Math.pow(prevMouseY - e.offsetY, 2)
	);
	ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
	if (fillColor.checked) {
		return ctx.fill();
	}
	ctx.stroke();
};

const drawTriangle = (e) => {
	ctx.beginPath();
	ctx.moveTo(prevMouseX, prevMouseY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
	ctx.closePath();
	if (fillColor.checked) {
		return ctx.fill();
	}
	ctx.stroke();
};

const drawLine = (e) => {
	ctx.beginPath();
	ctx.moveTo(prevMouseX, prevMouseY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
};

const removeDrawing = (e) => {
	ctx.strokeStyle = "#fff";
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
};

const drawing = (e) => {
	if (!isDrawing) return;
	ctx.putImageData(snapshot, 0, 0);

	switch (selectedTool) {
		case "brush":
			ctx.lineTo(e.offsetX, e.offsetY);
			ctx.stroke();
			break;
		case "rectangle":
			drawRect(e);
			break;
		case "circle":
			drawCircle(e);
			break;
		case "triangle":
			drawTriangle(e);
			break;
		case "line":
			drawLine(e);
			break;
		case "eraser":
			removeDrawing(e);
			break;
		default:
			break;
	}
};

toolsBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		document.querySelector(".options .active").classList.remove("active");
		btn.classList.add("active");
		selectedTool = btn.id;
		console.log(selectedTool);
	});
});

colorDiv.addEventListener("input", setColor);

sizeSlider.addEventListener("change", () => {
	brushWidth = sizeSlider.value;
});

colorsBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		document.querySelector(".options .selected").classList.remove("selected");
		btn.classList.add("selected");
		selectedColor = window
			.getComputedStyle(btn)
			.getPropertyValue("background-color");
	});
});

clearCanvas.addEventListener("click", () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});

checkBtn.addEventListener("click", () => {
	answerCard.classList.toggle("a-active");
	drawingCard.classList.toggle("d-active");
	answerBtns.forEach((element) => {
		element.classList.toggle("b-active");
	});
});

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mousemove", drawing);

