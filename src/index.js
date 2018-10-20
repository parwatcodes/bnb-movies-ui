import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";

import "./index.css";
import App from "./App";

import configureStore from "./store";

import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import history from './history'

// if (process.env.NODE_ENV !== "production") {
//   const { whyDidYouUpdate } = require("why-did-you-update");
//   whyDidYouUpdate(React);
// }

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
