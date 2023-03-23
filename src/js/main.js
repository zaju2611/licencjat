const burgerButton = document.querySelector(".nav_container-burgerButton");
const nav = document.querySelector(".nav_container-list");
const navitems = document.querySelectorAll("nav_container-list-item");

burgerButton.addEventListener("click", () => {
	nav.classList.add("active");
});

nav.addEventListener("click", () => {
	nav.classList.remove("active");
});

navitems.forEach((item) => {
	item.addEventListener("click", () => {
		nav.classList.remove("active");
	});
});
