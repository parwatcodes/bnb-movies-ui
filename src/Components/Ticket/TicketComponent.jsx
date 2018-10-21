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
            QFX Labim <span>Cinema</span>
          </h1>
          <div class="title">
            <h2>How I met your Mother</h2>
            <span>movie</span>
          </div>
          <div class="name">
            <h2>Vladimir Kudinov</h2>
            <span>name</span>
          </div>
          <div class="seat">
            <h2>156</h2>
            <span>seat</span>
          </div>
          <div class="time">
            <h2>12:00</h2>
            <span>time</span>
          </div>
        </div>
        <div class="tcard cardRight">
          <div class="eye" />
          <div class="number">
            <h3>156</h3>
            <span>seat</span>
          </div>
          <div class="barcode" />
        </div>
      </div>
    );
  }
}

export default TicketComponent;
