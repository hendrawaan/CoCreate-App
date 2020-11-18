<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from "./App";
// import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AdminHome from './pages/PagesAdmin/AdminHome';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

>>>>>>> hilman

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

reportWebVitals();
