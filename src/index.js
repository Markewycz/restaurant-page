import "./css/style.css";
import { appendImages } from "./components/helperFunctions.js";
import { content, navbar, header } from "./components/initialPage.js";
import openingHours from "./components/openingHours.js";
import aboutUs from "./components/aboutUs.js";
import menu from "./components/menu.js";
import reservation from "./components/reservation.js";
import contacts from "./components/contacts.js";

import banner1 from "./assets/img/banner-min.jpg";
import banner2 from "./assets/img/banner-footer.jpg";
import logo from "./assets/img/logo-white.svg";

const nav = document.querySelectorAll(".nav-btn");
nav[0].classList.add("active");

nav.forEach((item) => {
  item.addEventListener("click", () => {
    nav.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.toggle("active");

    if (item.textContent === "Home") {
      content.replaceChildren();
      content.appendChild(header);
      header.appendChild(navbar);
    }

    if (item.textContent === "Opening hours") {
      content.replaceChildren();
      content.appendChild(openingHours);
      appendImages(banner1, logo, "bannerImg", "logoImg");
      openingHours.appendChild(navbar);
    }

    if (item.textContent === "About us") {
      content.replaceChildren();
      content.appendChild(aboutUs);
      aboutUs.appendChild(navbar);
    }

    if (item.textContent === "Menu") {
      content.replaceChildren();
      content.appendChild(menu);
      menu.appendChild(navbar);
    }

    if (item.textContent === "Reservation") {
      content.replaceChildren();
      content.appendChild(reservation);
      reservation.appendChild(navbar);
    }

    if (item.textContent === "Contacts") {
      content.replaceChildren();
      content.appendChild(contacts);
      appendImages(banner2, logo, "bannerImg", "logoImg");
      contacts.appendChild(navbar);
    }
  });
});
