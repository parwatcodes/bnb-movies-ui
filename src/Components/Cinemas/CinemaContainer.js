import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CinemaComponent from "./CinemaComponent";
import { addCinema, fetchCinemas, deleteCinema } from "./actions";

class CinemaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchCinemas();
  }

  render() {
    return (
      <div className="p-5 width-50-center">
        {this.props.user.role === 1 && (
          <Link to="/add-cinema">
            <Button type="button" variant="contained" color="primary">
              Add a cinema
            </Button>
          </Link>
        )}
        <CinemaComponent {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cinemas: state.cinemas.data,
    loading: state.cinemas.loading,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCinema: data => {
      dispatch(addCinema(data));
    },
    fetchCinemas: () => {
      dispatch(fetchCinemas());
    },
    deleteCinema: cinemaID => {
      dispatch(deleteCinema(cinemaID));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CinemaContainer);
