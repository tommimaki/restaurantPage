
import { homePage } from "./pages/home";
import { menuPage } from "./pages/menu";
import { contactPage } from "./pages/contact";

import NavBar from "./navbar";
import { footer } from "./footer";

const nav = new NavBar();

const content = document.getElementById("content");
const homeButton = document.querySelector(".homeBtn");
const menuButton = document.querySelector(".menuBtn");
const contactButton = document.querySelector(".contactBtn");

const clearContent = () => {
  content.innerHTML = "";
};

window.onload = () => {
  tabs("homeBtn");
};

const buttons = [homeButton, menuButton, contactButton];

buttons.forEach(button => {
  button.addEventListener("click",(e)=> {tabs(e.target.className)
  });
});

const tabs = (e) => {
  clearContent();
  nav.createNav();
  footer();
  
  if (e) {
    let page = e;
    switch (page) {
      case "homeBtn":
        homePage();

        break;
      case "menuBtn":
        menuPage();
        break;
      case "contactBtn":
        contactPage();
        break;
      default:
    }
  } else {
    console.log(`e is undefined ${e}`);
  }
};
