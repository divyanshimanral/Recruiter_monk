const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.getElementById("nav2");

console.log(nav);

open_btn.addEventListener("click", () => {
  nav.classList.add("visible");
  open_btn.body.style.display = "none";
});
close_btn.addEventListener("click", () => {
  nav.classList.remove("visible");
});
