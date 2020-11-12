import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  InputGroup,
  FormControl
} from "react-bootstrap";

const Home = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#F1F6F9", padding: 0, height: 2000 }}
    >
      <Container fluid style={{ backgroundColor: "#14274E" }}>
        <Row style={{}}>
          <Col md={8}>Logo</Col>
          <Col md={4}>Register/login</Col>
        </Row>
        <Row style={{}}>
          <Col style={{ backgroundColor: "#FFF", margin: 100, height: 300 }}>
            <h1>Carousel</h1>
          </Col>
        </Row>
        <Row style={{}}>
          <h1>Sosmed</h1>
        </Row>
      </Container>
      <Row style={{ height: "100vh" }}>
        <Col
          md={3}
          style={{
            padding: 50
          }}
        >
          <Row>
            <Col style={{ backgroundColor: "green", height: 300 }}>
              <h1>Menu-Menu</h1>
            </Col>
          </Row>
          <Row>
            <Col style={{ backgroundColor: "blue", height: 300 }}>
              <h1>Event</h1>
            </Col>
          </Row>
          <Row>
            <Col style={{ backgroundColor: "pink", height: 300 }}>
              <h1>Calendar</h1>
            </Col>
          </Row>
        </Col>
        <Col md={9} style={{ padding: 50 }}>
          <Row>
            <Col style={{ backgroundColor: "red", height: 50 }}>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                  style={{ width: "90%" }}
                />
                <Button type="submit">Submit</Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col style={{ backgroundColor: "yellow", height: 1000 }}>
              Konten
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
