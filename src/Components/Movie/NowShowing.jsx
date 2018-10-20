import React, { Component, Fragment } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Link, Route } from "react-router-dom";

import "./Movie.css";
const NowShowing = props => {
  const { movies, cinemas } = props;
  return (
    <div
      style={{
        textAlign: "center"
      }}
    >
      {movies.length
        ? movies.map(movie => (
            <div
              style={{
                display: "inline-block",
                verticalAlign: "top"
              }}
            >
              <Link to={`/getMovieDetails/${movie._id}`}>
                <Card
                  style={{
                    width: "250px",
                    margin: "15px 40px 40px 10px"
                  }}
                >
                  <CardImg src={movie.poster_link} />
                  <CardTitle
                    style={{
                      textAlign: "center"
                    }}
                  >
                    {movie.name}
                  </CardTitle>
                  <Link to={`/getShowDetails/${movie.id}`}>
                    <img
                      src="https://png.icons8.com/ios/1600/two-tickets.png"
                      className="ticket-icon"
                    />
                  </Link>
                </Card>
              </Link>
            </div>
          ))
        : null}
    </div>
  );
};

export default NowShowing;
