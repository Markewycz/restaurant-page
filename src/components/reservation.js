import { elementFromHtml } from "./helperFunctions";

const reservation = elementFromHtml(`
  <div class="reservation">
    <div class="reservation-container">
      <div class="form-container text-square">
        <h4>&raquo; BOOK TABLE &laquo;</h4>
        <form action="" class="form">
          <div class="input-row">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" />
          </div>
          <div class="input-row">
            <label for="lastName">Last name</label>
            <input type="text" id="lastName" />
          </div>
          <div class="input-row">
            <label for="email">E-mail</label>
            <input type="email" id="email" />
          </div>
          <div class="input-row">
            <label for="date">Date</label>
            <input type="date" id="date" />
          </div>
          <div class="input-row">
            <label for="time">Time</label>
            <input type="time" id="time" />
          </div>
          <div class="input-row">
            <label for="party-size">Party size</label>
            <input type="text" id="party-size" />
          </div>
          <button type="submit" class="button submit">Send</button>
        </form>
      </div>
      <div class="img-square"></div>
    </div>
  </div>
`);

export default reservation;
