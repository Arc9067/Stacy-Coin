const navToggle = document.querySelector(".nav-toggle");
const header = document.querySelector(".header");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  header.classList.toggle("open");
});
