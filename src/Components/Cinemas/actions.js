import { FETCH_CINEMAS, ADD_CINEMA, DELETE_CINEMA } from "./constants";

export function fetchCinemas() {
  return {
    type: FETCH_CINEMAS
  };
}

export function addCinema(data) {
  return {
    type: ADD_CINEMA,
    data
  };
}

export function deleteCinema(cinemaID) {
  return {
    type: DELETE_CINEMA,
    cinemaID
  };
}
