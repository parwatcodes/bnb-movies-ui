import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
<div class="checkout">
				<div class="sinopsis">
					<button class="back">
						<i class="zmdi zmdi-arrow-left"></i>
					</button>						
					<img class="cover" src="https://image.tmdb.org/t/p/w300/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg" style={{
                        backgroundImage: "url(https://image.tmdb.org/t/p/w300//gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg)"
                    }} />
					<h3>Wonder Woman</h3>
					<p>An Amazon princess comes to the world of Man to become the greatest of the female superheroes.</p>
					<span>Wed, 28 Jun </span>
					<small>16:00 (2h 15m)</small>
				</div>
				<section>
					<ul class="legend">
						<li>available</li>
						<li>taken</li>
					</ul>
					<span>Select your seats</span>
					<div class="seats"><div class="seat taken ">A1</div><div class="seat  aisle-right">A2</div><div class="seat  ">A3</div><div class="seat  ">A4</div><div class="seat  ">A5</div><div class="seat  ">A6</div><div class="seat taken ">A7</div><div class="seat taken aisle-left">A8</div><div class="seat  ">A9</div><div class="seat  ">B1</div><div class="seat  aisle-right">B2</div><div class="seat  ">B3</div><div class="seat taken ">B4</div><div class="seat  ">B5</div><div class="seat taken ">B6</div><div class="seat  ">B7</div><div class="seat  aisle-left">B8</div><div class="seat  ">B9</div><div class="seat taken ">C1</div><div class="seat  aisle-right">C2</div><div class="seat  ">C3</div><div class="seat taken ">C4</div><div class="seat  ">C5</div><div class="seat  ">C6</div><div class="seat taken ">C7</div><div class="seat  aisle-left">C8</div><div class="seat  ">C9</div><div class="seat  ">D1</div><div class="seat taken aisle-right">D2</div><div class="seat  ">D3</div><div class="seat taken ">D4</div><div class="seat  ">D5</div><div class="seat  ">D6</div><div class="seat  ">D7</div><div class="seat  aisle-left">D8</div><div class="seat taken ">D9</div><div class="seat taken ">E1</div><div class="seat aisle-right selected">E2</div><div class="seat  ">E3</div><div class="seat  ">E4</div><div class="seat  ">E5</div><div class="seat  ">E6</div><div class="seat taken ">E7</div><div class="seat  aisle-left">E8</div><div class="seat  ">E9</div><div class="seat  ">F1</div><div class="seat aisle-right selected">F2</div><div class="seat  ">F3</div><div class="seat taken ">F4</div><div class="seat taken ">F5</div><div class="seat  ">F6</div><div class="seat  ">F7</div><div class="seat  aisle-left">F8</div><div class="seat  ">F9</div><div class="seat taken ">G1</div><div class="seat aisle-right selected">G2</div><div class="seat taken ">G3</div><div class="seat  ">G4</div><div class="seat  ">G5</div><div class="seat  ">G6</div><div class="seat taken ">G7</div><div class="seat  aisle-left">G8</div><div class="seat  ">G9</div><div class="seat taken ">H1</div><div class="seat aisle-right selected">H2</div><div class="seat  ">H3</div><div class="seat taken ">H4</div><div class="seat  ">H5</div><div class="seat  ">H6</div><div class="seat  ">H7</div><div class="seat taken aisle-left">H8</div><div class="seat  ">H9</div><div class="seat taken aisle-top">I1</div><div class="seat  aisle-top">I2</div><div class="seat  aisle-top">I3</div><div class="seat  aisle-top">I4</div><div class="seat  aisle-top">I5</div><div class="seat taken aisle-top">I6</div></div>
					<div class="screen">screen</div>
				</section>
				<div class="total">
					<small>Total </small><span>$21.76</span>
					<button>CHECKOUT</button>
					<div class="loader"></div>
				</div>
			</div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
