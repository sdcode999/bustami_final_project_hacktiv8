window.addEventListener("scroll", function () {
  const header = document.querySelector(".header-nav");
  header.classList.toggle("stick", window.scrollY > 0);
});

const navLink = document
  .querySelector(".header-nav nav ul")
  .querySelectorAll("a");

navLink.forEach((Element) => {
  Element.addEventListener("click", function () {
    navLink.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

// const logoClick = document.querySelector(".header-nav .logo a");

// logoClick.addEventListener("click", function () {
//   const home = document.querySelector(".header-nav nav ul a");

//   home.classList.add("active");
// });
