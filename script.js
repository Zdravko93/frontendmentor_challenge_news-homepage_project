const navBar = document.querySelector(".navigation");
const menuButton = document.querySelector(".menu-button");
const menuButtonClose = document.querySelector(".menu-close-container");
const backdrop = document.querySelector(".backdrop");

const openMobileMenu = () => {
  navBar.classList.add("open");
  backdrop.classList.add("active");
  menuButtonClose.classList.add("show");
};

const closeMobileMenu = () => {
  navBar.classList.remove("open");
  backdrop.classList.remove("active");
  menuButtonClose.classList.remove("show");
};

menuButton.addEventListener("click", openMobileMenu);
menuButtonClose.addEventListener("click", closeMobileMenu);
