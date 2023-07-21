import { elementFromHtml } from "./helperFunctions.js";

const openingHours = elementFromHtml(`
<div class="opening-tab">
<div class="banner-break">
<img class="banner" id="bannerImg" alt="banner" />
<img class="logo" id="logoImg" alt="logo" />
</div>
<div class="opening-hours-container">
<div class="opening-primary-text">
<p>- OPENING HOURS -</p>
      </div>
      <div class="opening-hours">
        <div class="day-cell">
          <p class="day">monday</p>
          <p class="hours">12h <code>&#8212;</code> 15h</p>
        </div>
        <div class="day-cell">
          <p class="day">tuesday</p>
          <p class="hours afternoon">12h <code>&#8212;</code> 15h</p>
          <p class="hours evening">19h <code>&#8212;</code> 23h</p>
        </div>
        <div class="day-cell">
          <p class="day">wednesday</p>
          <p class="hours afternoon">12h <code>&#8212;</code> 15h</p>
          <p class="hours evening">19h <code>&#8212;</code> 23h</p>
        </div>
        <div class="day-cell">
          <p class="day">thursday</p>
          <p class="hours afternoon">12h <code>&#8212;</code> 15h</p>
          <p class="hours evening">19h <code>&#8212;</code> 23h</p>
        </div>
        <div class="day-cell">
          <p class="day">friday</p>
          <p class="hours afternoon">12h <code>&#8212;</code> 15h</p>
          <p class="hours evening">19h <code>&#8212;</code> 0h</p>
        </div>
        <div class="day-cell">
          <p class="day">saturday</p>
          <p class="hours">12h <code>&#8212;</code> 0h</p>
        </div>
        <div class="day-cell">
          <p class="day">sunday</p>
          <p class="hours">12h <code>&#8212;</code> 17h</p>
        </div>
      </div>
      <div class="opening-sub-text">
        <p>
          Live music every Friday and Saturday night. Acoustic pop rock
          music.
        </p>
      </div>
    </div>
  </div>
`);

export default openingHours;
