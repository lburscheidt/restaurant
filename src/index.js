import "./styles.css";
import { createMain } from "./main";
import { createMenu } from "./menu";
import { createContact } from "./contact";
createMain();
// let homeBtn = document.querySelector("#home");
// let menuBtn = document.querySelector("#menu");
// let contactBtn = document.querySelector("#contact");
let nav = document.querySelector("nav");
let content = document.querySelector("#content");
nav.addEventListener("click", (e) => {
  let target = e.target;
  switch (target.id) {
    case "home":
      content.innerHTML = "";
      createMain();
      break;
    case "menu":
      content.innerHTML = "";
      createMenu();
      break;
    case "contact":
      content.innerHTML = "";
      createContact();
      break;
  }
});
