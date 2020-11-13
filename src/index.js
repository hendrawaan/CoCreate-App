import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AdminHome from './pages/PagesAdmin/AdminHome';
// import HeaderPage from './HeaderPage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


ReactDOM.render(
  <React.StrictMode>
    {/* <HeaderPage /> */}
    <AdminHome />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
