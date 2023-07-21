import { elementFromHtml } from "./helperFunctions";

const aboutUs = elementFromHtml(`
  <div class="about-us">
    <div class="about-container">
      <div class="text-square">
        <h4>&raquo; ABOUT US &laquo;</h4>
        <p>
          Indulge in authentic and refined cuisine, carefully crafted with
          the finest ingredients sourced from Italy.
        </p>
        <p>
          Explore a menu inspired by diverse regions, from handmade pasta to
          premium meats and seafood.
        </p>
        <p>
          Elevate your experience with our extensive selection of fine wines
          and spirits. Join us for an unforgettable culinary journey in an
          elegant ambiance.
        </p>
      </div>
      <div class="img-square"></div>
    </div>
  </div>
`);

export default aboutUs;
