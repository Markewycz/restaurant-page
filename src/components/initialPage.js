import { elementFromHtml } from "./helperFunctions.js";
import logo from "/src/assets/img/logo-white.svg";

const content = document.querySelector(".content");

const header = elementFromHtml(`
  <header class="header">
    <div class="header-reservation">
      <div class="tlf-numbers">
      <span>+39 123-4567-890</span>
        <span>|</span>
        <span>+39 123-4567-890</span>
      </div>
      <a href="" class="book-table">Book table</a>
    </div>
    <div class="header-logo">
      <img id="logoImg" class="logo" alt="logo" />
    </div>
    <div class="restaurant-status">
      <span>Thursday 02:34 - We are closed.</span>
      </div>
  </header>
`);

const navbar = elementFromHtml(`
  <nav class="nav-bar">
    <ul>
      <li><button type="button" class="button nav-btn active">Home</button></li>
      <li><button type="button" class="button nav-btn">Opening hours</button></li>
      <li><button type="button" class="button nav-btn">About us</button></li>
      <li><button type="button" class="button nav-btn">Menu</button></li>
      <li><button type="button" class="button nav-btn">Reservation</button></li>
      <li><button type="button" class="button nav-btn">Contacts</button></li>
    </ul>
  </nav>
`);

content.appendChild(header);
header.appendChild(navbar);
document.getElementById("logoImg").src = logo;

export { content, navbar, header };
