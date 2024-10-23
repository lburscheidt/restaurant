import "./styles.css";
export function createContact() {
  let content = document.querySelector("#content");
  let address = document.createElement("div");
  address.innerHTML =
    "<p>You can find us at:<br> 60 Berwick St<br>London<br>W1F 8SU</p>";

  content.appendChild(address);
}
