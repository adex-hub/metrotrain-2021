const searchIcon = document.querySelector("#s");
const search = document.querySelector("#search");
search.addEventListener("mouseover", () => {
  searchIcon.style.display = "inline";
  searchIcon.style.transition = "0.5s display";
  search.style.transition = "1s padding";
});
search.addEventListener("mouseout", () => {
  searchIcon.style.display = "none";
  search.style.transition = "1s padding";
});

//Svg click animation
const move1 = document.querySelector(".move-1");
const move2 = document.querySelector(".move-2");
const move3 = document.querySelector(".move-3");
const move4 = document.querySelector(".move-4");
const menu = document.querySelector(".svgmenu");
const body = document.body;
const logo = document.querySelector(".logo");
const menuDrawer = document.querySelector("#menu-options");

menu.addEventListener("click", () => {
  move1.classList.toggle("active");
  move2.classList.toggle("active");
  move3.classList.toggle("active");
  move4.classList.toggle("active");
  body.classList.toggle("hide-overflow");
  menuDrawer.classList.toggle("open");
  logo.classList.toggle("op");
});
