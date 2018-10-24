import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withFormik } from "formik";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TicketComponent from "../Ticket/TicketComponent";
import * as Yup from "yup";
import "./Seat.css";

class SeatMap extends Component {
  constructor() {
    super();
    this.state = {
      selectedSeats: [],
      totalAmount  : 100,
      showModal    : false
    };
  }

  toggleSeatSelect = (seatNumber) => {
    if(this.state.selectedSeats.includes(seatNumber)) {
      const selectedSeats = [...this.state.selectedSeats];
      const index = selectedSeats.indexOf(seatNumber);
      selectedSeats.splice(index, 1);
      this.setState({ 
        selectedSeats 
      });
    }
    else
      this.setState({ 
        selectedSeats: [...this.state.selectedSeats, seatNumber] 
      });
  }

  showModal = () => {
    this.setState({ showModal: true });
  }

  hideModal = () => {
    this.setState({ showModal: false });
  }

  print = () => {
    console.log('Print');
    var content = document.getElementById('ticket');
    var pri = document.getElementById('ifmcontentstoprint').contentWindow;
    pri.document.open();
    pri.document.write(content.innerHTML);
    pri.document.close();
    pri.focus();
    pri.print();
  }

  render() {
    const { selectedSeats, totalAmount, showModal } = this.state;
    const seatNumbers = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9'];
    const seatPlacement = seatNumbers.map(seatNumber => {
      return <div key={seatNumber} 
                  className={selectedSeats.includes(seatNumber)? 'seat selected' : 'seat'} 
                  onClick={() => this.toggleSeatSelect(seatNumber)}>
                  {seatNumber}
             </div>
    });
    const selectedSeatsDetail = <table class="Displaytable">
        <tr>
          <th>Name</th>
          <th>Number of Seats</th>
          <th>Seats</th>
        </tr>
        <tr key={selectedSeats.length}>
          <td>
            <textarea id="nameDisplay" disabled>
              Ram
            </textarea>
          </td>
          <td>
            <textarea id="NumberDisplay" disabled>
              {selectedSeats.length}
            </textarea>
          </td>
          <td>
            <textarea id="seatsDisplay" disabled>
              {selectedSeats.length > 0 ? selectedSeats.toString() : 'No seat selected'}
            </textarea>
          </td>
        </tr>
      </table>
    return (
      <div
      style={{
        textAlign: "center"
      }}>
        <div class="checkout">
          <div class="sinopsis">
            <button class="back">
              <i class="zmdi zmdi-arrow-left" />
            </button>
            <img
              class="cover"
              src="https://image.tmdb.org/t/p/w300/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg"
              alt='movie'
              style={{
                backgroundImage:
                  "url(https://image.tmdb.org/t/p/w300//gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg)"
              }}
            />
            <h3>Wonder Woman</h3>
            <p>
              An Amazon princess comes to the world of Man to become the
              greatest of the female superheroes.
            </p>
            <span>Wed, 28 Jun </span>
            <small>16:00 (2h 15m)</small>
          </div>
          <section>
            <ul class="legend">
              <li>available</li>
              <li>taken</li>
            </ul>
            <span>Select your seats</span>
            <div class="seats">
              {
                seatPlacement
              }
              {/* <div class="seat taken ">A1</div>
              <div class="seat  aisle-right">A2</div>
              <div class="seat  ">A3</div>
              <div class="seat  ">A4</div>
              <div class="seat  ">A5</div>
              <div class="seat  ">A6</div>
              <div class="seat taken ">A7</div>
              <div class="seat taken aisle-left">A8</div>
              <div class="seat  ">A9</div>
              <div class="seat  ">B1</div>
              <div class="seat  aisle-right">B2</div>
              <div class="seat  ">B3</div>
              <div class="seat taken ">B4</div>
              <div class="seat  ">B5</div>
              <div class="seat taken ">B6</div>
              <div class="seat  ">B7</div>
              <div class="seat  aisle-left">B8</div>
              <div class="seat  ">B9</div>
              <div class="seat taken ">C1</div>
              <div class="seat  aisle-right">C2</div>
              <div class="seat  ">C3</div>
              <div class="seat taken ">C4</div>
              <div class="seat  ">C5</div>
              <div class="seat  ">C6</div>
              <div class="seat taken ">C7</div>
              <div class="seat  aisle-left">C8</div>
              <div class="seat  ">C9</div>
              <div class="seat  ">D1</div>
              <div class="seat taken aisle-right">D2</div>
              <div class="seat  ">D3</div>
              <div class="seat taken ">D4</div>
              <div class="seat  ">D5</div>
              <div class="seat  ">D6</div>
              <div class="seat  ">D7</div>
              <div class="seat  aisle-left">D8</div>
              <div class="seat taken ">D9</div>
              <div class="seat taken ">E1</div>
              <div class="seat aisle-right selected">E2</div>
              <div class="seat  ">E3</div>
              <div class="seat  ">E4</div>
              <div class="seat  ">E5</div>
              <div class="seat  ">E6</div>
              <div class="seat taken ">E7</div>
              <div class="seat  aisle-left">E8</div>
              <div class="seat  ">E9</div>
              <div class="seat  ">F1</div>
              <div class="seat aisle-right selected">F2</div>
              <div class="seat  ">F3</div>
              <div class="seat taken ">F4</div>
              <div class="seat taken ">F5</div>
              <div class="seat  ">F6</div>
              <div class="seat  ">F7</div>
              <div class="seat  aisle-left">F8</div>
              <div class="seat  ">F9</div>
              <div class="seat taken ">G1</div>
              <div class="seat aisle-right selected">G2</div>
              <div class="seat taken ">G3</div>
              <div class="seat  ">G4</div>
              <div class="seat  ">G5</div>
              <div class="seat  ">G6</div>
              <div class="seat taken ">G7</div>
              <div class="seat  aisle-left">G8</div>
              <div class="seat  ">G9</div>
              <div class="seat taken ">H1</div>
              <div class="seat aisle-right selected">H2</div>
              <div class="seat  ">H3</div>
              <div class="seat taken ">H4</div>
              <div class="seat  ">H5</div>
              <div class="seat  ">H6</div>
              <div class="seat  ">H7</div>
              <div class="seat taken aisle-left">H8</div>
              <div class="seat  ">H9</div>
              <div class="seat taken aisle-top">I1</div>
              <div class="seat  aisle-top">I2</div>
              <div class="seat  aisle-top">I3</div>
              <div class="seat  aisle-top">I4</div>
              <div class="seat  aisle-top">I5</div>
              <div class="seat taken aisle-top">I6</div> */}
            </div>
            <div class="screen">screen</div>
            <br />
            <br />
            <div class="displayerBoxes">
              <center>
                {selectedSeatsDetail}
              </center>
            </div>
            <div
              style={{
                marginTop: "50px"
              }}
            >
              <small>Total Paying Amount: </small>
              <span>Rs.{totalAmount * selectedSeats.length}</span>
              &nbsp;&nbsp;&nbsp;
              <Modal isOpen={showModal} size="lg">
                <ModalHeader toggle={this.hideModal}>CHECKOUT</ModalHeader>
                <iframe
                  title='ticket' 
                  id="ifmcontentstoprint" style={{
                  height: '0px',
                  width: '0px',
                  position: 'absolute'
                }}></iframe> 
                <ModalBody id='ticket'>
                    <TicketComponent
                    totalAmount={totalAmount * selectedSeats.length}
                    selectedSeats={selectedSeats}/>
                </ModalBody>
                <ModalFooter>
                  <Button 
                    color="secondary" 
                    onClick={this.hideModal}>
                    Cancel
                  </Button>
                  <Button 
                    color="primary"
                    onClick={this.print}>
                    Print
                  </Button>
                 </ModalFooter>
              </Modal>
              <Button 
                variant="contained" 
                color="primary" 
                type="button" 
                onClick={this.showModal}
                disabled={selectedSeats.length < 1} >
                CHECKOUT
              </Button>
              <div class="loader" />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const EnhancedForm = withFormik({
  mapPropsToValues: props => {
    return {
      // email: props.user.email,
      // password: props.user.password,
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("name is required!"),
    description: Yup.string().required("description is required"),
    price: Yup.number().required("Please enter the price"),
    run_time: Yup.string().required("Please enter your run_time"),
    director: Yup.string().required("Please enter director of movie"),
    cast: Yup.string().required("Please enter cast of movie"),
    trailer_link: Yup.string().required(
      "Please enter the trailer link from youtube"
    )
    // gender: Yup.string().required("Please enter your gender")
  }),

  handleSubmit: (values, { props: { addMovie }, setSubmitting }) => {
    // let formData = new FormData();
    // for (let key in values) {
    //   formData.append(key, values[key]);
    // }
    // addMovie(formData);
  }
})(SeatMap);

const mapStateToProps = state => {
  return {
    cinemas: state.cinemas.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // addMovie: data => dispatch(addMovie(data)),
    // fetchCinemas: () => dispatch(fetchCinemas())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnhancedForm);
