import React, { Component, Fragment } from "react";
// import { Container } from "reactstrap";
import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "./Components/NavHeader";
import Routes from "./Routes/index";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <Routes />
      </Fragment>
    );
  }
}

export default App;
