const nextBtn = document.querySelector(".next");
const canvas = document.querySelector(".canvas");
const content = document.querySelector(".content");
const downloadBtn = document.querySelector(".downloadFile");

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
});

const saveImagesToFile = () => {
	if (images.length >= 1) {
		const imagesHtml = images
			.map(
				(image) =>
					`<div style="text-align:center;"><p>${image.content}</p><img src="${image.data}" alt="${image.name} style="margin: 0 auto;"></div>`
			)
			.join("");

		const fileContent = `<!DOCTYPE html><html><head><title>Moje rozwiązania</title></head><body style="display:flex; flex-direction: column; align-items:center; background-color:rgb(182, 213, 255); font-family: sans-serif;color:rgb(27, 28, 108)"><h1 style="color:#ffffff;">Moje rozwiązania</h1><div style="display:flex; flex-direction: column; align-items:center">${imagesHtml}</div></body></html>`;
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
});
