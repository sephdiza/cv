// SELECTORS
const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector(".nav-list");

// EVENT LISTENER
menuBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
  menuBtn.classList.toggle("toggle");
});
