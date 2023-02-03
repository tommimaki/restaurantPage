import { pageLoad } from "./pageLoad";
import { homePage } from "./pages/home";
import { menuPage } from "./pages/menu";
import { contactPage } from "./pages/contact";

import NavBar from "./navbar";

const nav = new NavBar();

const content = document.getElementById("content");
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");

const clearContent = () => {
  content.innerHTML = "";
};

window.onload = () => {
  tabs("home");
};

const buttons = [homeButton, menuButton, contactButton];

buttons.forEach(button => {
  button.addEventListener("click",(e)=> {tabs(e.target.className)
  });
});

const tabs = (e) => {
  clearContent();
  nav.createNav();
  if (e) {
    let page = e;
    switch (page) {
      case "home":
        homePage();
        break;
      case "menu":
        menuPage();
        break;
      case "contact":
        contactPage();
        break;
      default:
    }
  } else {
    console.log(`e is undefined ${e}`);
  }
};
