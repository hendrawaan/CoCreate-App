import React, { Fragment } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentPost from "../../components/Admin/ContentPost";
import Header from "../../components/Admin/Header";
import Footer from "../../components/Admin/Footer";
import TableUser from "../../components/Admin/TableUser";
import ListAdminHome from "../../components/Admin/ListAdminHome";

function AdminHome() {
  return (
    <Fragment>
      <Header />
      <div className="container justify-content-center">
        <div className="tab-wrapper">
          <div className="container-fluid">
            <div className="row justify-content-center ">
              <div className="col-sm-12">
                <Tabs className="conatiner mx-auto" defaultActiveKey="home">
                  <Tab eventKey="home" title="Home">
                    <div className="tab-item-wrapper">
                      <h5>Home Dashbord List</h5>
                    </div>
                    <ListAdminHome />
                  </Tab>
                  <Tab
                    className="conatiner mx-auto"
                    eventKey="content"
                    title="Content"
                  >
                    <div className="tab-item-wrapper">
                      <h5>Content</h5>
                      <ContentPost />
                    </div>
                  </Tab>
                  <Tab
                    className="conatiner mx-auto"
                    eventKey="table"
                    title="Table"
                  >
                    <div className="tab-item-wrapper">
                      <h5>Table User</h5>
                      <TableUser />
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
export default AdminHome;
