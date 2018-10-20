import React, { Component } from "react";
import "./Seat.css";
class Seat extends Component {
  render() {
    return (
      <div id="SeatTable" class="seat-table-wrap">
        <table class="qfx-seats">
          <tbody>
            <tr>
              <td class="qfx-seat-alpha">
                <table class="seat-alphabets">
                  <tbody>
                    <tr>
                      <td>
                        <div class="seat seatMark">F</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="seat seatMark">E</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="seat seatMark">D</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="seat seatMark">C</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="seat seatMark">B</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="seat seatMark">A</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <div class="seat-scroll">
                  <table class="seat-numbers" id="seatTableId">
                    <tbody>
                      <tr class="seat-row layout-0">
                        <td
                          class="soldSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="F"
                          data-seatposition="1"
                          onclick="addSeat(this)"
                          id="seat-174210"
                        >
                          <div class="seat">1</div>
                        </td>
                        <td
                          class="soldSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="F"
                          data-seatposition="2"
                          onclick="addSeat(this)"
                          id="seat-174211"
                        >
                          <div class="seat">2</div>
                        </td>
                        <td
                          class="soldSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="F"
                          data-seatposition="3"
                          onclick="addSeat(this)"
                          id="seat-174212"
                        >
                          <div class="seat">3</div>
                        </td>
                        <td
                          class="soldSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="F"
                          data-seatposition="4"
                          onclick="addSeat(this)"
                          id="seat-174213"
                        >
                          <div class="seat">4</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="F"
                          data-seatposition="5"
                          onclick="addSeat(this)"
                          id="seat-174214"
                        >
                          <div class="seat">5</div>
                        </td>
                        <td
                          class="reservedSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="F"
                          data-seatposition="6"
                          onclick="addSeat(this)"
                          id="seat-174215"
                        >
                          <div class="seat">6</div>
                        </td>
                        <td
                          class="reservedSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="F"
                          data-seatposition="7"
                          onclick="addSeat(this)"
                          id="seat-174216"
                        >
                          <div class="seat">7</div>
                        </td>
                        <td
                          class="reservedSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="F"
                          data-seatposition="8"
                          onclick="addSeat(this)"
                          id="seat-174217"
                        >
                          <div class="seat">8</div>
                        </td>
                        <td
                          class="reservedSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="F"
                          data-seatposition="9"
                          onclick="addSeat(this)"
                          id="seat-174218"
                        >
                          <div class="seat">9</div>
                        </td>
                        <td
                          class="soldSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="F"
                          data-seatposition="10"
                          onclick="addSeat(this)"
                          id="seat-174219"
                        >
                          <div class="seat">10</div>
                        </td>
                        <td
                          class="soldSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="F"
                          data-seatposition="11"
                          onclick="addSeat(this)"
                          id="seat-174220"
                        >
                          <div class="seat">11</div>
                        </td>
                        <td
                          class="soldSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="F"
                          data-seatposition="12"
                          onclick="addSeat(this)"
                          id="seat-174221"
                        >
                          <div class="seat">12</div>
                        </td>
                        <td
                          class="soldSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="F"
                          data-seatposition="13"
                          onclick="addSeat(this)"
                          id="seat-174222"
                        >
                          <div class="seat">13</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="F"
                          data-seatposition="14"
                          onclick="addSeat(this)"
                          id="seat-174335"
                        >
                          <div class="seat">14</div>
                        </td>
                        <td class="emptySeat normalSeat" />
                      </tr>
                      <tr class="seat-row layout-0">
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="E"
                          data-seatposition="1"
                          onclick="addSeat(this)"
                          id="seat-174197"
                        >
                          <div class="seat">1</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="E"
                          data-seatposition="2"
                          onclick="addSeat(this)"
                          id="seat-174198"
                        >
                          <div class="seat">2</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="E"
                          data-seatposition="3"
                          onclick="addSeat(this)"
                          id="seat-174199"
                        >
                          <div class="seat">3</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="E"
                          data-seatposition="4"
                          onclick="addSeat(this)"
                          id="seat-174200"
                        >
                          <div class="seat">4</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="E"
                          data-seatposition="5"
                          onclick="addSeat(this)"
                          id="seat-174201"
                        >
                          <div class="seat">5</div>
                        </td>
                        <td
                          class="reservedSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="E"
                          data-seatposition="6"
                          onclick="addSeat(this)"
                          id="seat-174202"
                        >
                          <div class="seat">6</div>
                        </td>
                        <td
                          class="reservedSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="E"
                          data-seatposition="7"
                          onclick="addSeat(this)"
                          id="seat-174203"
                        >
                          <div class="seat">7</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="E"
                          data-seatposition="8"
                          onclick="addSeat(this)"
                          id="seat-174204"
                        >
                          <div class="seat">8</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="E"
                          data-seatposition="9"
                          onclick="addSeat(this)"
                          id="seat-174205"
                        >
                          <div class="seat">9</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="E"
                          data-seatposition="10"
                          onclick="addSeat(this)"
                          id="seat-174206"
                        >
                          <div class="seat">10</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="E"
                          data-seatposition="11"
                          onclick="addSeat(this)"
                          id="seat-174207"
                        >
                          <div class="seat">11</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="E"
                          data-seatposition="12"
                          onclick="addSeat(this)"
                          id="seat-174208"
                        >
                          <div class="seat">12</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="E"
                          data-seatposition="13"
                          onclick="addSeat(this)"
                          id="seat-174209"
                        >
                          <div class="seat">13</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="E"
                          data-seatposition="14"
                          onclick="addSeat(this)"
                          id="seat-174334"
                        >
                          <div class="seat">14</div>
                        </td>
                        <td class="emptySeat normalSeat" />
                      </tr>
                      <tr class="seat-row layout-0">
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="D"
                          data-seatposition="1"
                          onclick="addSeat(this)"
                          id="seat-174184"
                        >
                          <div class="seat">1</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="D"
                          data-seatposition="2"
                          onclick="addSeat(this)"
                          id="seat-174185"
                        >
                          <div class="seat">2</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="D"
                          data-seatposition="3"
                          onclick="addSeat(this)"
                          id="seat-174186"
                        >
                          <div class="seat">3</div>
                        </td>
                        <td
                          class="reservedSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="D"
                          data-seatposition="4"
                          onclick="addSeat(this)"
                          id="seat-174187"
                        >
                          <div class="seat">4</div>
                        </td>
                        <td
                          class="reservedSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="D"
                          data-seatposition="5"
                          onclick="addSeat(this)"
                          id="seat-174188"
                        >
                          <div class="seat">5</div>
                        </td>
                        <td
                          class="reservedSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="D"
                          data-seatposition="6"
                          onclick="addSeat(this)"
                          id="seat-174189"
                        >
                          <div class="seat">6</div>
                        </td>
                        <td
                          class="reservedSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="D"
                          data-seatposition="7"
                          onclick="addSeat(this)"
                          id="seat-174190"
                        >
                          <div class="seat">7</div>
                        </td>
                        <td
                          class="reservedSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="D"
                          data-seatposition="8"
                          onclick="addSeat(this)"
                          id="seat-174191"
                        >
                          <div class="seat">8</div>
                        </td>
                        <td
                          class="reservedSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="D"
                          data-seatposition="9"
                          onclick="addSeat(this)"
                          id="seat-174192"
                        >
                          <div class="seat">9</div>
                        </td>
                        <td
                          class="reservedSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="D"
                          data-seatposition="10"
                          onclick="addSeat(this)"
                          id="seat-174193"
                        >
                          <div class="seat">10</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="D"
                          data-seatposition="11"
                          onclick="addSeat(this)"
                          id="seat-174194"
                        >
                          <div class="seat">11</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="D"
                          data-seatposition="12"
                          onclick="addSeat(this)"
                          id="seat-174195"
                        >
                          <div class="seat">12</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="D"
                          data-seatposition="13"
                          onclick="addSeat(this)"
                          id="seat-174196"
                        >
                          <div class="seat">13</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="D"
                          data-seatposition="14"
                          onclick="addSeat(this)"
                          id="seat-174333"
                        >
                          <div class="seat">14</div>
                        </td>
                        <td class="emptySeat normalSeat" />
                      </tr>
                      <tr class="seat-row layout-0">
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="C"
                          data-seatposition="1"
                          onclick="addSeat(this)"
                          id="seat-174171"
                        >
                          <div class="seat">1</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="C"
                          data-seatposition="2"
                          onclick="addSeat(this)"
                          id="seat-174172"
                        >
                          <div class="seat">2</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="C"
                          data-seatposition="3"
                          onclick="addSeat(this)"
                          id="seat-174173"
                        >
                          <div class="seat">3</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="C"
                          data-seatposition="4"
                          onclick="addSeat(this)"
                          id="seat-174174"
                        >
                          <div class="seat">4</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="C"
                          data-seatposition="5"
                          onclick="addSeat(this)"
                          id="seat-174175"
                        >
                          <div class="seat">5</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="C"
                          data-seatposition="6"
                          onclick="addSeat(this)"
                          id="seat-174176"
                        >
                          <div class="seat">6</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="C"
                          data-seatposition="7"
                          onclick="addSeat(this)"
                          id="seat-174177"
                        >
                          <div class="seat">7</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="C"
                          data-seatposition="8"
                          onclick="addSeat(this)"
                          id="seat-174178"
                        >
                          <div class="seat">8</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="C"
                          data-seatposition="9"
                          onclick="addSeat(this)"
                          id="seat-174179"
                        >
                          <div class="seat">9</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="C"
                          data-seatposition="10"
                          onclick="addSeat(this)"
                          id="seat-174180"
                        >
                          <div class="seat">10</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="C"
                          data-seatposition="11"
                          onclick="addSeat(this)"
                          id="seat-174181"
                        >
                          <div class="seat">11</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="C"
                          data-seatposition="12"
                          onclick="addSeat(this)"
                          id="seat-174182"
                        >
                          <div class="seat">12</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="C"
                          data-seatposition="13"
                          onclick="addSeat(this)"
                          id="seat-174183"
                        >
                          <div class="seat">13</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="C"
                          data-seatposition="14"
                          onclick="addSeat(this)"
                          id="seat-174332"
                        >
                          <div class="seat">14</div>
                        </td>
                        <td class="emptySeat normalSeat" />
                      </tr>
                      <tr class="seat-row layout-0">
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="B"
                          data-seatposition="1"
                          onclick="addSeat(this)"
                          id="seat-174158"
                        >
                          <div class="seat">1</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="B"
                          data-seatposition="2"
                          onclick="addSeat(this)"
                          id="seat-174159"
                        >
                          <div class="seat">2</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="B"
                          data-seatposition="3"
                          onclick="addSeat(this)"
                          id="seat-174160"
                        >
                          <div class="seat">3</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="B"
                          data-seatposition="4"
                          onclick="addSeat(this)"
                          id="seat-174161"
                        >
                          <div class="seat">4</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="B"
                          data-seatposition="5"
                          onclick="addSeat(this)"
                          id="seat-174162"
                        >
                          <div class="seat">5</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="B"
                          data-seatposition="6"
                          onclick="addSeat(this)"
                          id="seat-174163"
                        >
                          <div class="seat">6</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="B"
                          data-seatposition="7"
                          onclick="addSeat(this)"
                          id="seat-174164"
                        >
                          <div class="seat">7</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="B"
                          data-seatposition="8"
                          onclick="addSeat(this)"
                          id="seat-174165"
                        >
                          <div class="seat">8</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="B"
                          data-seatposition="9"
                          onclick="addSeat(this)"
                          id="seat-174166"
                        >
                          <div class="seat">9</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="B"
                          data-seatposition="10"
                          onclick="addSeat(this)"
                          id="seat-174167"
                        >
                          <div class="seat">10</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="B"
                          data-seatposition="11"
                          onclick="addSeat(this)"
                          id="seat-174168"
                        >
                          <div class="seat">11</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="B"
                          data-seatposition="12"
                          onclick="addSeat(this)"
                          id="seat-174169"
                        >
                          <div class="seat">12</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="B"
                          data-seatposition="13"
                          onclick="addSeat(this)"
                          id="seat-174170"
                        >
                          <div class="seat">13</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="B"
                          data-seatposition="14"
                          onclick="addSeat(this)"
                          id="seat-174331"
                        >
                          <div class="seat">14</div>
                        </td>
                        <td class="emptySeat normalSeat" />
                      </tr>
                      <tr class="seat-row layout-0">
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="A"
                          data-seatposition="1"
                          onclick="addSeat(this)"
                          id="seat-174147"
                        >
                          <div class="seat">1</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="A"
                          data-seatposition="2"
                          onclick="addSeat(this)"
                          id="seat-174148"
                        >
                          <div class="seat">2</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="A"
                          data-seatposition="3"
                          onclick="addSeat(this)"
                          id="seat-174149"
                        >
                          <div class="seat">3</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="A"
                          data-seatposition="4"
                          onclick="addSeat(this)"
                          id="seat-174150"
                        >
                          <div class="seat">4</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="A"
                          data-seatposition="5"
                          onclick="addSeat(this)"
                          id="seat-174151"
                        >
                          <div class="seat">5</div>
                        </td>
                        <td class="emptySeat normalSeat" />
                        <td class="emptySeat normalSeat" />
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="A"
                          data-seatposition="8"
                          onclick="addSeat(this)"
                          id="seat-174949"
                        >
                          <div class="seat">8</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="A"
                          data-seatposition="9"
                          onclick="addSeat(this)"
                          id="seat-174153"
                        >
                          <div class="seat">9</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="A"
                          data-seatposition="10"
                          onclick="addSeat(this)"
                          id="seat-174154"
                        >
                          <div class="seat">10</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="A"
                          data-seatposition="11"
                          onclick="addSeat(this)"
                          id="seat-174155"
                        >
                          <div class="seat">11</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="A"
                          data-seatposition="12"
                          onclick="addSeat(this)"
                          id="seat-174156"
                        >
                          <div class="seat">12</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="A"
                          data-seatposition="13"
                          onclick="addSeat(this)"
                          id="seat-174157"
                        >
                          <div class="seat">13</div>
                        </td>
                        <td
                          class="normalSeat"
                          data-section="Audi 1 Platinum Plus"
                          data-rowlabel="A"
                          data-seatposition="14"
                          onclick="addSeat(this)"
                          id="seat-174330"
                        >
                          <div class="seat">14</div>
                        </td>
                        <td class="emptySeat normalSeat" />
                      </tr>
                      <tr>
                        <td
                          style={{
                            "text-align": "center;"
                          }}
                          colspan="31"
                          class="normalSeat"
                        >
                          <span class="seatScreen">Screen</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>


<div class="seat-indicators">
            <div class="tbl">
                <div class="tbl-col indicators">
                    <div class="seat-indicator seat-indi-avai">Available</div>
                    <div class="seat-indicator seat-indi-rese">Reserved</div>
                    <div class="seat-indicator seat-indi-sold">Sold Out</div>
                    <div class="seat-indicator seat-indi-your">Your Seat</div>
                    <div class="seat-indicator seat-indi-unavail">Unavailable</div>
                    
                </div>
                <div class="tbl-col btn-book-submit">
                    <a href="javascript:void(0)" onclick="BookTransaction(event)"><i class="exo exo-btn-reserve"></i></a>
                        <a href="javascript:void(0)" onclick="goToPayment(this,18928277)"><i class="exo exo-btn-buy"></i></a>                    
                </div>
            </div>
        </div>

      </div>
      
    );
  }
}

export default Seat;
