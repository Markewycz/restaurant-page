import { elementFromHtml } from "./helperFunctions.js";

const contacts = elementFromHtml(`
<div class="footer">
  <div class="banner-break">
    <img class="banner" id="bannerImg" alt="banner" />
    <img class="logo" id="logoImg" alt="logo" />
  </div>
    <div class="footer-content">
      <div class="footer-informations">
        <div class="address">
          <h4>Address</h4>
          <p>Via Melisurgo 74</p>
          <p>Ponte Del Giglio, 55060</p>
        </div>
        <div class="contacts">
          <h4>Contacts</h4>
          <p>abruzzo@example.com</p>
          <p>+39 123-4567-890</p>
          <p>+39 123-4567-890</p>
        </div>
      </div>
      <div class="footer-opening-hours">
        <h4>Opening Hours</h4>
        <div class="footer-opening-hours">
          <div class="footer-days">
            <p>Monday</p>
            <p>Tuesday</p>
            <p>Wednesday</p>
            <p>Thursday</p>
            <p>Friday</p>
            <p>Saturday</p>
            <p>Sunday</p>
          </div>
          <div class="footer-hours">
            <p>12h <code>&#8212;</code> 15h</p>
            <p>12h <code>&#8212;</code> 15h</p>
            <p>12h <code>&#8212;</code> 15h</p>
            <p>12h <code>&#8212;</code> 15h</p>
            <p>12h <code>&#8212;</code> 15h</p>
            <p>12h <code>&#8212;</code> 15h</p>
            <p>12h <code>&#8212;</code> 15h</p>
          </div>
        </div>
      </div>
      <div class="contact-us">
        <h4>Contact us</h4>
        <form action="" class="footer-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <textarea
            name="message"
            id="message"
            rows="2"
            placeholder="Message"
          ></textarea>
          <button type="submit" class="button submit">Send</button>
        </form>
      </div>
    </div>
    <div class="author">
      <p>All rights reserved © 2023 <strong>Gracjan Markiewicz</strong></p>
      <a href="/src/assets/img/github.svg"><div class="github"></div></a>
    </div>
  </div>
`);

export default contacts;
