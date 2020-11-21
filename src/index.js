import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <App />,
  document.getElementById("root")
)

reportWebVitals();
