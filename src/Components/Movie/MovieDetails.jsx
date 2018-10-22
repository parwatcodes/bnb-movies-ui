import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import moment from "moment";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    // console.log(this.props, movieID);
    if (this.state.movie) {
      let {
        trailer_link,
        cast,
        description,
        name,
        director,
        release_date,
        run_time,
        genre
      } = this.state.movie;
      const movieID = this.props.match.params.movieID;

      return (
        <div className="p-5 width-50-center">
          <Link
            to={`/edit-movie/${movieID}`}
            params={{
              action: "edit"
            }}
          >
            <Button variant="contained" color="primary" type="button">
              Edit Movie
            </Button>
          </Link>
          <div className="row">
            <div className="col-md-8">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  id="youtubePlayer"
                  className="embed-responsive-item"
                  frameBorder="0"
                  allowFullScreen="1"
                  title="YouTube video player"
                  width="350"
                  height="260"
                  src={
                    trailer_link &&
                    `https://www.youtube.com/embed/${
                      trailer_link.split("watch?v=")[1]
                    }`
                  }
                />
              </div>
              <div className="mar-t-15 mar-b-15">
                <a className="ticket" href="/Home/GetTicketBookDetail?EventID=7308">
                  <i className="exo exo-ticket" />
                </a>
                <a
                  className="fb-share"
                  target="_blank"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.qfxcinemas.com/Home/GetMovieDetails?EventID=7308"
                >
                  <i className="exo exo-fb-share" />
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <h3 className="mar-t-0 movie-title">{name}</h3>
              {/* <p className="movie-type">Adult</p> */}
              <div className="movie-info">
                <p>
                  <span className="col-md-5 col-xs-6">Releasing Date :</span>
                  <span className="col-md-7 col-xs-6">
                    {moment(release_date).format("dddd")},
                    {moment(release_date).format("MMM Do YYYY")}
                  </span>
                </p>
                <p>
                  <span className="col-md-5 col-xs-6">Run Time :</span>
                  <span className="col-md-7 col-xs-6">{run_time}</span>
                </p>
                <p>
                  <span className="col-md-5 col-xs-6">Director :</span>
                  <span className="col-md-7 col-xs-6">{director}</span>
                </p>
                <p>
                  <span className="col-md-5 col-xs-6">Genre :</span>
                  <span className="col-md-7 col-xs-6">{genre}</span>
                </p>
                <p>
                  <span className="col-md-5 col-xs-6">Cast :</span>
                  <span className="col-md-7 col-xs-6">{cast}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mar-t-15">
            <br />
            <br />
            <p>{description}</p>
          </div>
        </div>
      );
    }

    return "Loading";
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.data
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
