const nextBtn = document.querySelector(".next");
const canvas = document.querySelector(".canvas");
const content = document.querySelector(".content");
const downloadBtn = document.querySelector(".downloadFile");
const text = document.querySelector(".textPopup");
const images = [];

const saveImage = () => {
	const image = canvas.toDataURL("image/png");
	images.push({
		data: image,
		content: content.textContent,
		name: `image_${images.length + 1}.png`,
	});
};

nextBtn.addEventListener("click", () => {
	saveImage();
	window.scrollTo(0, 0);
});

const saveImagesToFile = () => {
	if (images.length >= 1) {
		const imagesHtml = images
			.map(
				(image) =>
					`<div style="text-align:center;"><p>${image.content}</p><img src="${image.data}" alt="${image.name} style="margin: 0 auto;"></div>`
			)
			.join("");

		const fileContent = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Moje rozwiązania</title></head><body style="display:flex; flex-direction: column; align-items:center; background-color:rgb(182, 213, 255); font-family: sans-serif;color:rgb(27, 28, 108)"><h1 style="color:#ffffff; font-size: 40px">Moje rozwiązania</h1><div style="width:100%; display:flex; flex-direction: column; align-items:center">${imagesHtml}</div></body></html>`;
		const blob = new Blob([fileContent], { type: "text/html;charset=utf-8" });
		const url = URL.createObjectURL(blob);

		const link = document.createElement("a");
		link.href = url;
		link.download = "rozwiazania_zadan.html";
		link.click();
	}
};

downloadBtn.addEventListener("click", () => {
	console.log("cos tam");
	saveImagesToFile();
	text.classList.add("fade-out");
	setTimeout(() => {
		text.textContent = "Wyślij nauczycielowi pobrany plik do sprawdzenia";

		// Usuń klasę z animacją
		text.classList.remove("fade-out");
		text.classList.add("fade-in");
	}, 1000);
});
