import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  InputGroup,
  FormControl,
  Card,
  ListGroup,
  Carousel,
  CarouselItem
} from "react-bootstrap";
import {
  homeLogo,
  carouselFirst,
  carouselSecond,
  carouselThird
} from "../../assets/images";

const Regis = () => {
  return (
    <Container fluid style={{ backgroundColor: "#14274E" }}>
      <Row className="align-items-center" style={{ height: "100vh" }}>
        <div className="mx-auto">
          <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default Regis;
