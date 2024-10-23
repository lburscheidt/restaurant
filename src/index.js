import "./styles.css";
import udon from "./udon.jpg";
console.log("hello");

let content = document.querySelector("#content");

let heading = document.createElement("h1");
heading.textContent = "Naomi's Noodles";
let tagline = document.createElement("p");
tagline.textContent = "We're the home of authentic Japanese cuisine.";

let figure = document.createElement("figure");
let image = document.createElement("img");
image.src = udon;
image.className = "food";
let figcaption = document.createElement("figcaption");
figcaption.textContent = "Our signature udon noodles";
content.appendChild(heading);
content.appendChild(tagline);
content.appendChild(figure);
figure.appendChild(image);
figure.appendChild(figcaption);
