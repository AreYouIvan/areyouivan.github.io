import "./styles/styles.scss";
import icon from "../src/assets/images/favicon.png";
const profileURL = "https://avatars.githubusercontent.com/u/73669701";

const logo = document.querySelector(".imgs");
logo.src = icon;

const profile = document.querySelector(".picture");
profile.src = profileURL;

const menuBtn = document.querySelector(".hamburger");
const listItems = document.querySelector(".menu-list");
const text = document.querySelector(".text");

const activating = () => {
  menuBtn.classList.toggle("is-active");
  listItems.classList.toggle("is-active");
  text.classList.toggle("hide");
};

menuBtn.addEventListener("click", activating);
