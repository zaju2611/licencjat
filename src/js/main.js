const footerYear = document.querySelector(".footer_year");
const burgerButton = document.querySelector(".nav_container-burgerButton");
const nav = document.querySelector(".nav_container-list");
const navitems = document.querySelectorAll("nav_container-list-item");

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

burgerButton.addEventListener("click", () => {
	nav.classList.add("active");
});

navitems.forEach((item) => {
	item.addEventListener("click", () => {
		nav.classList.remove("active");
	});
});

handleCurrentYear();
