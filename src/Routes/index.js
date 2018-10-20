import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Movie from "../Components/Movie/MovieContainer";
import LoginComponent from "../Components/Login/LoginContainer";
import SignupComponent from "../Components/Signup/SignupContainer";
import Show from "../Components/Show/ShowComponnet";
import MovieDetails from "../Components/Movie/MovieDetails";
import MovieForm from "../Components/Movie/MovieFormComponent";
import CinemaComponent from "../Components/Cinemas/CinemaContainer";
import CinemaForm from "../Components/Cinemas/CinemaFormComponent";
import SeatDetails from "../Components/Seat/SeatContainer";
import ProfileComponent from "../Components/Profile/ProfileContainer";
import ChangePasswordComponent from "../Components/ChangePassword/ChangePasswordContainer";

const checkAuth = () => {
  const token = localStorage.getItem("jwtToken");
  if (!token) {
    return false;
  }
  return true;
};

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/movies" }} />
      )
    }
  />
);

export default () => (
  <Switch>
    <Route exact path="/" component={Movie} />
    <Route path="/movies" component={Movie} />
    <Route path="/login" component={LoginComponent} />
    <Route path="/cinemas" component={CinemaComponent} />
    <Route path="/register" component={SignupComponent} />
    <AuthRoute path="/profile" component={ProfileComponent} />
    <AuthRoute path={`/add-movie`} component={MovieForm} />
    <AuthRoute path={`/add-cinema`} component={CinemaForm} />
    <AuthRoute path={`/edit-movie/:movieID`} component={MovieForm} />
    <Route path={`/getShowDetails/:movieID`} component={Show} />
    <Route exact path={`/getMovieDetails/:movieID`} component={MovieDetails} />
    <AuthRoute
      path={`/getMovieDetails/:movieID/:cinemaID`}
      component={SeatDetails}
    />
    <AuthRoute path="/change-password" component={ChangePasswordComponent} />
  </Switch>
);
