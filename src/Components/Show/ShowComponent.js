import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Show.css";

// IDEA: Possible implementations -@mac at 10/21/2018, 11:21:15 PM
// Add a new component to select the movies for today, tommorrow and upcoming days
class ShowDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cinema: '',
      movie: {}
    };
  }
  componentDidMount() {
    const movieID = this.props.match.params.movieID;
    let movie = this.props.movies.find(mov => mov._id === movieID);
    this.setState(
      {
        movie
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    if (this.state.movie) {
      let movieID = this.props.match.params.movieID;
      if (this.state.movie) {
        let {
          trailer_link,
          poster_link,
          cast,
          description,
          name,
          director,
          release_date,
          run_time,
          genre
        } = this.state.movie;
        return (
          <div>
            <div
              class="content"
              style={{
                padding: "70px"
              }}
            >
              <div class="content-box book-details">
                <div class="clearfix">
                  <div>
                    <div>
                      <h1>{name}</h1>
                    </div>
                    <div class="pad-t-15 mar-t-15">
                      <p class="movie-type" />
                      <p>Runtime: {run_time}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-4">
                      <img
                        class="img-responsive"
                        src={poster_link}
                        height="350px"
                        width="260px"
                      />
                    </div>
                    <div class="col-8 show-movies" id="showDateTimeDivId">
                      <div class="show-movies">
                        <div class="show-movie clearfix">
                          <div className="row">
                            <div class="col-4">
                              <h2 class="show-hall-name">QFX Civil Mall</h2>
                            </div>
                            <div class="col-8">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return "Loading...";
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.data,
    cinemas: state.cinemas.data
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowDetails);
