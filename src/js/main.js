// initalize swiper slider
var swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Dark Mode Theme

let body = document.querySelector("body");
let darkBtn = document.querySelector(".dark-btns");

// if user previously selected theme
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

getCurrentTheme = () =>
  document.body.classList.contains("dark__mode") ? "dark" : "light";
getCurrentIcon = () =>
  darkBtn.classList.contains("active") ? "dark" : "light";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    "dark__mode"
  );
  darkBtn.classList[selectedIcon === "dark" ? "add" : "remove"]("active");
}

darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark__mode");
  darkBtn.classList.toggle("active");
  // save current theme preferences to localStorage
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Fixed Header
const header = document.querySelector("header");

function addFixedHeader() {
  if (window.scrollY > 72) {
    header.classList.add("fixed__header");
  } else {
    header.classList.remove("fixed__header");
  }
}

window.addEventListener("scroll", addFixedHeader);

// scroll to top Btn

let scrollTopBtn = document.querySelector(".scroll-to-top");

let showScrollBtn = () =>
  window.scrollY >= 150
    ? scrollTopBtn.classList.add("show")
    : scrollTopBtn.classList.remove("show");

let scrollToTop = () =>
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });

window.addEventListener("scroll", showScrollBtn);
scrollTopBtn.addEventListener("click", scrollToTop);

// scrollSpy

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav__link");

let scrollSpy = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top > offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(`.nav__link[href*=${id}]`)
          .classList.add("active");
      });
    }
  });
};

window.addEventListener("scroll", scrollSpy);
