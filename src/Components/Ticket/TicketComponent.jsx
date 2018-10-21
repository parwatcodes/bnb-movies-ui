import React, { Component } from "react";
import "./Ticket.css";
class TicketComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="cardWrap">
        <div class="tcard cardLeft">
          <h1>
            QFX Labim
          </h1>
          <div class="title">
            <h2>Venom <span style={{
              float: "right",
              color: "black"
            }}>Invoice no: 190826</span></h2>
            <span>movie</span>
          </div>
          <div class="name">
            <h2>Nabin Bhandari</h2>
            <span>name</span>
          </div>
          <div class="seat">
            <h2>Wed, 11-2018</h2>
            <span>date</span>
          </div>
          <div class="time">
            <h2>12:00 PM</h2>
            <span>time</span>
          </div>
          <div class="time" style={{
            float: "right"
          }}>
            <h2>Rs. 1200</h2>
            <span>total price</span>
          </div>
        </div>
        <div class="tcard cardRight">
          <div class="eye" />
          <div class="number">
            <h6>A1, A2, A3, A4</h6>
            <span>seat</span>
          </div>
          <div class="barcode" />
        </div>
      </div>
    );
  }
}

export default TicketComponent;
