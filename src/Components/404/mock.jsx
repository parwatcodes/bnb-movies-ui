import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
           <div>
        <a class="index-links undefined" href="/jackets?f=gender%3Amen">
          <div>
            More Jackets
            <span class="index-arrow" />
          </div>
        </a>

        <div class="content">
          <div class="content-box book-details">
            <div class="clearfix">
              <div class="col-xs-12 col-sm-8 col-md-8">
                <div class="col-md-7 pad-t-15">
                  <h1>Jai Bhole</h1>
                </div>
                <div class="col-md-5 pad-t-15 mar-t-15">
                  <p class="movie-type" />
                  <p>Runtime: 1 Hr 43 mins</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4">
                <img
                  class="img-responsive"
                  src="https://image.tmdb.org/t/p/w300/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-4" />
            </div>
              <div class="show-movies">
                <div class="show-movie clearfix">
                  <div class="col-xs-12 col-sm-4 col-md-3 pad-0">
                    <h2 class="show-hall-name">QFX Jai Nepal</h2>
                  </div>
                  <div class="col-xs-12 col-sm-8 col-md-9 pad-0">
                    <div class="show-times pad-sm-l-15">
                      <a
                        class="time-mark time-mark-available"
                        href="/ShoppingCart/Index?ShowID=121310&amp;RatingDescription=PG&amp;RunTime=1 Hr43 mins&amp;ShowCategory=2D&amp;ShowDate=10/21/2018 3:15:00 PM&amp;TheatreName=QFX Jai Nepal&amp;EventName=Jai Bhole&amp;occupancy=Available"
                      >
                        <span class=" time">15:15</span>
                        <span class="hour">Hrs</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
