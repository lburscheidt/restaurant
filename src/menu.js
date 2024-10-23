import soup from "./img/laura-limsenkhe-2a1-ttrWiw0-unsplash.jpg";
import rice from "./img/denise-chan-XEXQokCWiKc-unsplash.jpg";
import udon from "./udon.jpg";
export function createMenu() {
  let content = document.querySelector("#content");
  let heading = document.createElement("h1");
  heading.textContent = "Our menu";
  let tagline = document.createElement("p");
  tagline.textContent = "So many dishes, so little time";

  let figure_soup = document.createElement("figure");
  let image_soup = document.createElement("img");
  image_soup.src = soup;
  image_soup.className = "food";
  let figcaption_soup = document.createElement("figcaption");
  figcaption_soup.textContent = "Tasty ramen";

  let figure_udon = document.createElement("figure");
  let image_udon = document.createElement("img");
  image_udon.src = udon;
  image_udon.className = "food";
  let figcaption_udon = document.createElement("figcaption");
  figcaption_udon.textContent = "Our signature udon noodles";

  let figure_rice = document.createElement("figure");
  let image_rice = document.createElement("img");
  image_rice.src = rice;
  image_rice.className = "food";
  let figcaption_rice = document.createElement("figcaption");
  figcaption_rice.textContent = "Our signature udon noodles";

  content.appendChild(heading);
  content.appendChild(tagline);
  content.appendChild(figure_udon);
  figure_udon.appendChild(image_udon);
  figure_udon.appendChild(figcaption_udon);
  content.appendChild(figure_soup);
  figure_soup.appendChild(image_soup);
  figure_soup.appendChild(figcaption_soup);
  content.appendChild(figure_rice);
  figure_rice.appendChild(image_rice);
  figure_rice.appendChild(figcaption_rice);
}
