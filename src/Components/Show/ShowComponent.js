import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Show.css";

class ShowDetails extends Component {
  render() {
    return (
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
            <div class="date-slider">
              <div class="slider-contain">
                <div
                  id="dateSlide"
                  class="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div class="carousel-inner" id="listDivId" role="listbox">
                    <div class="item">
                      {" "}
                      <span
                        class="slider-date"
                        data-datevalue="2018-10-20"
                        data-showdateindex="0"
                      >
                        Today
                      </span>
                    </div>
                    <div class="item active">
                      {" "}
                      <span
                        class="slider-date"
                        data-datevalue="2018-10-21"
                        data-showdateindex="1"
                      >
                        Tomorrow
                      </span>
                    </div>
                    <div class="item ">
                      {" "}
                      <span
                        class="slider-date"
                        data-datevalue="2018-10-22"
                        data-showdateindex="2"
                      >
                        Mon (Oct 22, 2018)
                      </span>
                    </div>
                    <div class="item ">
                      {" "}
                      <span
                        class="slider-date"
                        data-datevalue="2018-10-23"
                        data-showdateindex="3"
                      >
                        Tue (Oct 23, 2018)
                      </span>
                    </div>{" "}
                  </div>
                  <a
                    class="left carousel-control"
                    id="leftArrowId"
                    href="#dateSlide"
                    role="button"
                    data-slide="prev"
                    sumvalue="-1"
                    onclick="leftRightArrowClick(this)"
                  />
                  <a
                    class="right carousel-control"
                    id="rightArrowId"
                    href="#dateSlide"
                    role="button"
                    data-slide="next"
                    sumvalue="1"
                    onclick="leftRightArrowClick(this)"
                  />
                </div>
              </div>
            </div>
            <input id="TheatreName" name="TheatreName" type="hidden" value="" />

            <div class="show-movies" id="showDateTimeDivId">
              <div class="show-movies">
                <div class="show-movie clearfix">
                  <div class="col-xs-12 col-sm-4 col-md-3 pad-0">
                    <h2 class="show-hall-name">QFX Civil Mall</h2>
                  </div>
                  <div class="col-xs-12 col-sm-8 col-md-9 pad-0">
                    <div class="show-times pad-sm-l-15">
                      <Link
                        className="time-mark time-mark-available"
                        to="/getMovieDetails/:movieID/:cinemaID"
                      >
                        <span class=" time">08:45</span>
                        <span class="hour">Hrs</span>
                      </Link>
                      <a
                        class="time-mark time-mark-available"
                        href="/ShoppingCart/Index?ShowID=121417&amp;RatingDescription=PG&amp;RunTime=1 Hr43 mins&amp;ShowCategory=2D&amp;ShowDate=10/21/2018 11:00:00 AM&amp;TheatreName=QFX Civil Mall&amp;EventName=Jai Bhole&amp;occupancy=Available"
                      >
                        <span class=" time">11:00</span>
                        <span class="hour">Hrs</span>
                      </a>
                      <a
                        class="time-mark time-mark-available"
                        href="/ShoppingCart/Index?ShowID=121414&amp;RatingDescription=PG&amp;RunTime=1 Hr43 mins&amp;ShowCategory=2D&amp;ShowDate=10/21/2018 2:30:00 PM&amp;TheatreName=QFX Civil Mall&amp;EventName=Jai Bhole&amp;occupancy=Available"
                      >
                        <span class=" time">14:30</span>
                        <span class="hour">Hrs</span>
                      </a>
                      <a
                        class="time-mark time-mark-available"
                        href="/ShoppingCart/Index?ShowID=121406&amp;RatingDescription=PG&amp;RunTime=1 Hr43 mins&amp;ShowCategory=2D&amp;ShowDate=10/21/2018 5:15:00 PM&amp;TheatreName=QFX Civil Mall&amp;EventName=Jai Bhole&amp;occupancy=Available"
                      >
                        <span class=" time">17:15</span>
                        <span class="hour">Hrs</span>
                      </a>
                      <a
                        class="time-mark time-mark-available"
                        href="/ShoppingCart/Index?ShowID=121375&amp;RatingDescription=PG&amp;RunTime=1 Hr43 mins&amp;ShowCategory=2D&amp;ShowDate=10/21/2018 8:15:00 PM&amp;TheatreName=QFX Civil Mall&amp;EventName=Jai Bhole&amp;occupancy=Available"
                      >
                        <span class=" time">20:15</span>
                        <span class="hour">Hrs</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="show-movies">
                <div class="show-movie clearfix">
                  <div class="col-xs-12 col-sm-4 col-md-3 pad-0">
                    <h2 class="show-hall-name">QFX Chhaya Center</h2>
                  </div>
                  <div class="col-xs-12 col-sm-8 col-md-9 pad-0">
                    <div class="show-times pad-sm-l-15">
                      <a
                        class="time-mark time-mark-available"
                        href="/ShoppingCart/Index?ShowID=121403&amp;RatingDescription=PG&amp;RunTime=1 Hr43 mins&amp;ShowCategory=2D&amp;ShowDate=10/21/2018 9:00:00 AM&amp;TheatreName=QFX Chhaya Center&amp;EventName=Jai Bhole&amp;occupancy=Available"
                      >
                        <span class=" time">09:00</span>
                        <span class="hour">Hrs</span>
                      </a>
                      <a
                        class="time-mark time-mark-available"
                        href="/ShoppingCart/Index?ShowID=121394&amp;RatingDescription=PG&amp;RunTime=1 Hr43 mins&amp;ShowCategory=2D&amp;ShowDate=10/21/2018 11:30:00 AM&amp;TheatreName=QFX Chhaya Center&amp;EventName=Jai Bhole&amp;occupancy=Available"
                      >
                        <span class=" time">11:30</span>
                        <span class="hour">Hrs</span>
                      </a>
                      <a
                        class="time-mark time-mark-available"
                        href="/ShoppingCart/Index?ShowID=121395&amp;RatingDescription=PG&amp;RunTime=1 Hr43 mins&amp;ShowCategory=2D&amp;ShowDate=10/21/2018 5:00:00 PM&amp;TheatreName=QFX Chhaya Center&amp;EventName=Jai Bhole&amp;occupancy=Available"
                      >
                        <span class=" time">17:00</span>
                        <span class="hour">Hrs</span>
                      </a>
                      <a
                        class="time-mark time-mark-available"
                        href="/ShoppingCart/Index?ShowID=121396&amp;RatingDescription=PG&amp;RunTime=1 Hr43 mins&amp;ShowCategory=2D&amp;ShowDate=10/21/2018 7:30:00 PM&amp;TheatreName=QFX Chhaya Center&amp;EventName=Jai Bhole&amp;occupancy=Available"
                      >
                        <span class=" time">19:30</span>
                        <span class="hour">Hrs</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="show-movies">
                <div class="show-movie clearfix">
                  <div class="col-xs-12 col-sm-4 col-md-3 pad-0">
                    <h2 class="show-hall-name">QFX LABIM Mall</h2>
                  </div>
                  <div class="col-xs-12 col-sm-8 col-md-9 pad-0">
                    <div class="show-times pad-sm-l-15">
                      <a
                        class="time-mark time-mark-available"
                        href="/ShoppingCart/Index?ShowID=121349&amp;RatingDescription=PG&amp;RunTime=1 Hr43 mins&amp;ShowCategory=2D&amp;ShowDate=10/21/2018 12:15:00 PM&amp;TheatreName=QFX LABIM Mall&amp;EventName=Jai Bhole&amp;occupancy=Available"
                      >
                        <span class=" time">12:15</span>
                        <span class="hour">Hrs</span>
                      </a>
                      <a
                        class="time-mark time-mark-available"
                        href="/ShoppingCart/Index?ShowID=121347&amp;RatingDescription=PG&amp;RunTime=1 Hr43 mins&amp;ShowCategory=2D&amp;ShowDate=10/21/2018 2:30:00 PM&amp;TheatreName=QFX LABIM Mall&amp;EventName=Jai Bhole&amp;occupancy=Available"
                      >
                        <span class=" time">14:30</span>
                        <span class="hour">Hrs</span>
                      </a>
                      <a
                        class="time-mark time-mark-available"
                        href="/ShoppingCart/Index?ShowID=121348&amp;RatingDescription=PG&amp;RunTime=1 Hr43 mins&amp;ShowCategory=2D&amp;ShowDate=10/21/2018 5:00:00 PM&amp;TheatreName=QFX LABIM Mall&amp;EventName=Jai Bhole&amp;occupancy=Available"
                      >
                        <span class=" time">17:00</span>
                        <span class="hour">Hrs</span>
                      </a>
                      <a
                        class="time-mark time-mark-available"
                        href="/ShoppingCart/Index?ShowID=121350&amp;RatingDescription=PG&amp;RunTime=1 Hr43 mins&amp;ShowCategory=2D&amp;ShowDate=10/21/2018 7:30:00 PM&amp;TheatreName=QFX LABIM Mall&amp;EventName=Jai Bhole&amp;occupancy=Available"
                      >
                        <span class=" time">19:30</span>
                        <span class="hour">Hrs</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="show-movies">
                <div class="show-movie clearfix">
                  <div class="col-xs-12 col-sm-4 col-md-3 pad-0">
                    <h2 class="show-hall-name">QFX Kumari</h2>
                  </div>
                  <div class="col-xs-12 col-sm-8 col-md-9 pad-0">
                    <div class="show-times pad-sm-l-15">
                      <a
                        class="time-mark time-mark-available"
                        href="/ShoppingCart/Index?ShowID=121338&amp;RatingDescription=PG&amp;RunTime=1 Hr43 mins&amp;ShowCategory=2D&amp;ShowDate=10/21/2018 9:00:00 AM&amp;TheatreName=QFX Kumari&amp;EventName=Jai Bhole&amp;occupancy=Available"
                      >
                        <span class=" time">09:00</span>
                        <span class="hour">Hrs</span>
                      </a>
                      <a
                        class="time-mark time-mark-available"
                        href="/ShoppingCart/Index?ShowID=121339&amp;RatingDescription=PG&amp;RunTime=1 Hr43 mins&amp;ShowCategory=2D&amp;ShowDate=10/21/2018 3:00:00 PM&amp;TheatreName=QFX Kumari&amp;EventName=Jai Bhole&amp;occupancy=Available"
                      >
                        <span class=" time">15:00</span>
                        <span class="hour">Hrs</span>
                      </a>
                      <a
                        class="time-mark time-mark-available"
                        href="/ShoppingCart/Index?ShowID=121340&amp;RatingDescription=PG&amp;RunTime=1 Hr43 mins&amp;ShowCategory=2D&amp;ShowDate=10/21/2018 6:00:00 PM&amp;TheatreName=QFX Kumari&amp;EventName=Jai Bhole&amp;occupancy=Available"
                      >
                        <span class=" time">18:00</span>
                        <span class="hour">Hrs</span>
                      </a>
                    </div>
                  </div>
                </div>
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

              <div class="time-indicators">
                <div class="time-indicator time-indi-sold">Sold Out</div>
                <div class="time-indicator time-indi-fast">Filling Fast</div>
                <div class="time-indicator time-indi-avail">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowDetails;
