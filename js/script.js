const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".header-menu__list");

menuBtn.addEventListener("click", () => {
	menuMobile.classList.toggle("menu--open");
});
