const menuBtn = document.querySelector(".hamburger");
const listItems = document.querySelector(".menu-list");

function activating() {
  menuBtn.classList.toggle("is-active");
  listItems.classList.toggle("is-active");
}

menuBtn.addEventListener("click", activating);
