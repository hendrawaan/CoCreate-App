import React, { useState } from "react";
<<<<<<< HEAD
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

const Home = () => {
  return (
    <Container fluid style={{ backgroundColor: "#F1F6F9", padding: 0 }}>
      <Container fluid style={{ backgroundColor: "#14274E" }}>
        <Row className="align-items-center" style={{ padding: 10 }}>
          <Col md={8}>
            <img style={{ height: "80%" }} src={homeLogo} alt="Home Logo" />
          </Col>
          <Col md={4} className="align-middle">
            <div className="d-flex flex-row-reverse">
              <div className="" style={{ display: "inline" }}>
                <Button className="inline">Register</Button>
                <Button>Login</Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="align-items-middle m-2" style={{}}>
          <Col style={{}}>
            <Carousel ClassName="">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselFirst}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselSecond}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselThird}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row style={{}}>
          <div className="mx-auto">
            <Button style={{ marginLeft: 3 }} className="my-2">
              Instagram
            </Button>
            <Button style={{ marginLeft: 3 }} className="my-2">
              Facebook
            </Button>
            <Button style={{ marginLeft: 3 }} className="my-2">
              Twitter
            </Button>
          </div>
        </Row>
      </Container>
      <Row style={{}}>
        <Col
          md={3}
          style={{
            padding: 50
          }}
        >
          <Row>
            <Col style={{}}>
              <div class="d-flex flex-column">
                <div class="p-2">
                  <Button style={{ width: "100%" }}>Home</Button>
                </div>
                <div class="p-2">
                  <Button style={{ width: "100%" }}>About</Button>
                </div>
                <div class="p-2">
                  <Button style={{ width: "100%" }}>Profil</Button>
                </div>
                <div class="p-2">
                  <Button style={{ width: "100%" }}>Menu</Button>
                </div>
                <div class="p-2">
                  <Button style={{ width: "100%" }}>Menu</Button>
                </div>
              </div>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col style={{}}>
              <Card style={{}}>
                <Card.Header as="h4">My Event</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </Card>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col style={{}}>
              <h1>Calendar</h1>
            </Col>
          </Row>
        </Col>
        <Col md={9} style={{ paddingTop: 50, paddingRight: 50 }}>
          <Row>
            <Col style={{}}>
              <div className="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search" />
                <div className="input-group-append">
                  <Button class="btn btn-outline-secondary" type="button">
                    Input
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col style={{}}>
              <Card className="mb-2">
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card ClassName="mb-2">
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
=======
import { Button } from "react-bootstrap";
export default function Home() {
  const [isLogin, setLogin] = useState(localStorage.getItem("token"));

  const logout = () => {
    localStorage.removeItem("token");
    setLogin(null);
  };

  const login = () => {
    window.location = "/login";
  };

  return (
    <div className="text-center m-5">
      <h1>Ini Halaman Home</h1>
      <br />
      <Button
        variant="primary"
        type="submit"
        onClick={isLogin ? logout : login}
      >
        {isLogin ? "Logout" : "Login"}
      </Button>
    </div>
  );
}
>>>>>>> f4432e1e9715e25331310804e3783a31c32ac6ac
