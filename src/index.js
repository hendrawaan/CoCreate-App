import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AdminHome from './pages/PagesAdmin/AdminHome';
// import PagePost from './pages/PagesAdmin/PagePost';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


ReactDOM.render(
  <React.StrictMode>
    <AdminHome />
    {/* <PagePost /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
