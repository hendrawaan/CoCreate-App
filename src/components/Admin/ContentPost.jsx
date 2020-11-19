import React, { Fragment } from "react";
// import logo from '../../assets/images/logo.jpg';
import { Card } from "react-bootstrap";
import "./ComponentAdmin.css";

const ContentPost = () => {
  return (
    <Fragment>
      <Card>
        {/* <Card.Img variant="top" src={logo} /> */}
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default ContentPost;
