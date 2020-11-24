import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { AdminHome, FeedCategory, TableUser } from "../../components";
export function Admin() {
  const { user } = useSelector((state) => state.user);

  const decodeToken = user ? jwt_decode(user.token) : false;

  if (decodeToken.type_user !== 1) {
    return <Redirect to="/error" />;
  }

  return (
    <Container className="mt-5 pb-5">
      <h1 >Admin Dasboard</h1>
      <hr className="mb-4"/>
      <Tabs className="conatiner mx-auto" defaultActiveKey="home">
        <Tab eventKey="home" title="Home">
          <h5 className="my-4">Home Dashbord List</h5>
          <AdminHome />
        </Tab>
        <Tab eventKey="content" title="Feed Category">
          <h5 className="my-4">Feed Category</h5>
          <FeedCategory />
        </Tab>
        <Tab eventKey="table" title="Users">
          <h5 className="my-4">User List</h5>
          <TableUser/>
        </Tab>
      </Tabs>
    </Container>
  );
}
