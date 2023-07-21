import { elementFromHtml } from "./helperFunctions";

const menu = elementFromHtml(`
  <div class="menu">
    <div class="menu-container">
      <div class="img-square"></div>
      <div class="text-square">
        <h4>&raquo; MENU &laquo;</h4>
        <div class="menu-starter">
          <h3 class="menu-title">Starter</h3>
          <p>
            Mini Crab Cakes with a Spicy Remoulade Sauce<br />
            Calamari and Mussels, with Lemon<br />
            and Extra-Virgin Olive Oil and Baked Bread
          </p>
        </div>
        <div class="menu-main">
          <h3 class="menu-title">Main</h3>
          <p>
            Grilled Swordfish with a Herb and Citrus Marinade<br />
            Seasonal Vegetables and Baked Potatoes
          </p>
        </div>

        <div class="menu-dessert">
          <h3 class="menu-title">Dessert</h3>
          <p>Seasonal Fruit Platter Sorbet <br />or<br />Gelato</p>
        </div>
      </div>
    </div>
  </div>
`);

export default menu;
