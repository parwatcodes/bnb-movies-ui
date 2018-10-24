import { FETCH_MOVIES, ADD_MOVIE, FETCH_MOVIE_BY_ID, UPDATE_MOVIE_BY_ID } from "./constants";

export function fetchMovies() {
  return {
    type: FETCH_MOVIES
  };
}

export function addMovie(data) {
  return {
    type: ADD_MOVIE,
    data
  };
}

export function fetchMovieByID(movieID) {
  return {
    type: FETCH_MOVIE_BY_ID,
    movieID
  };
}

export function updateMovieByID(movieID, data) {
  return {
    type: UPDATE_MOVIE_BY_ID,
    movieID,
    data,
  }
}