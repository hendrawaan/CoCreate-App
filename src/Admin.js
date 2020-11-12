import React from 'react';
import 'mdbreact/dist/css/mdb.css';
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './Content'


function Admin() {
return (
    <div>
    <div>
    </div>
    <div className="container justify-content-center">
    <div className="tab-wrapper">
    <div className='container-fluid' >
        <div className="row justify-content-center ">
        <div className="col-sm-12">

            <Tabs className="conatiner mx-auto" defaultActiveKey="profile">
            <Tab eventKey="home" title="Home">
                <div className="tab-item-wrapper">
                <h5>Home Dashbord</h5>
                </div>
                <Content />
            </Tab>
            <Tab className="conatiner mx-auto" eventKey="content" title="Content">
                <div className="tab-item-wrapper">
                <h5>Content Details</h5>
                
                </div>
            </Tab>
            <Tab className="conatiner mx-auto" eventKey="laporan" title="Laporan">
                <div className="tab-item-wrapper">
                <h5>Laporan Info</h5>
                
                </div>
            </Tab>
            </Tabs>
        </div>
        </div>
    </div>
    </div>
    </div>
    </div>
);
}
export default Admin;