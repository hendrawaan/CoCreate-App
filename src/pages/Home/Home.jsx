import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  ListGroup,
  Carousel,
  Dropdown,
  Modal
} from "react-bootstrap";
import {
  homeLogo,
  carouselFirst,
  carouselSecond,
  carouselThird
} from "../../assets/images";
import { FaHome } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GrTechnology } from "react-icons/gr";
import { BiMoney } from "react-icons/bi";
import { GiLifeInTheBalance } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../store/profile";
import { logout } from "../../store/user";
import Add from "./Add";

/* Hanya untuk testing */
export default function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const { profile } = useSelector(state => state.profile);
  useEffect(() => {
    if (user) {
      dispatch(getProfile(user.token));
    } else if (!user) {
      window.location = "/login";
    }
  }, [dispatch, user]);

  const register = () => {
    window.location = "/register";
  };

  // const add = function Add() {
  //   const [show, setShow] = useState(false);
  
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  // }


  return (
    <Container fluid style={{ backgroundColor: "#F1F6F9", padding: 0 }}>
      <Container fluid style={{ backgroundColor: "#14274E" }}>
        <Row className="align-items-center" style={{ padding: 10 }}>
          <Col md={8}>
            <img style={{ height: 70 }} src={homeLogo} alt="Home Logo" />
          </Col>
          <Col md={4} className="align-middle">
            <div className="d-flex flex-row-reverse">
              <div className="" style={{ display: "inline" }}>
                {/* <Button variant="primary" type="submit" onClick={register}>
                  {isLogin ? "Username" : "Register"}
                </Button> */}
                <Button
                  variant="primary"
                  type="submit"
                  onClick={
                    user
                      ? () => dispatch(logout())
                      : () => (window.location = "/login")
                  }
                >
                  {user ? "Logout" : "Login"}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        {/* <Row className="align-items-center" style={{}}>
          <Col className="m-5 align-items-center">
            <Carousel className="" style={{ margin: "auto" }}>
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
                  className="d-block"
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
                  className="d-block"
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
        </Row> */}
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
              <div className="d-flex flex-column">
                <div className="mx-auto text-center w-100">
                  <Card style={{}}>
                    <Card.Header>
                      <CgProfile size={100} />
                    </Card.Header>
                    <ListGroup variant="flush">
                      {profile && (
                        <div>
                          <ListGroup.Item>{profile.user.name}</ListGroup.Item>
                          <ListGroup.Item>{profile.user.email}</ListGroup.Item>
                          <ListGroup.Item>
                            {profile.user.verification === "False"
                              ? " belum "
                              : " sudah "}{" "}
                            terverifikasi test
                          </ListGroup.Item>
                        </div>
                      )}
                    </ListGroup>
                  </Card>
                </div>
                <div className="p-2">
                  <Button variant="light" style={{ width: "100%" }}>
                    <FaHome /> Home
                  </Button>
                </div>
                <div className="p-2">
                  <Button variant="light" style={{ width: "100%" }}>
                    <MdEvent />
                    Event
                  </Button>
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
            <Col>
              {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Choose Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Keuangan</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">IT</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Lifestyle</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <div className="d-flex flex-row">
                <div>
                  <Button variant="light">
                    <GrTechnology />
                    <p className="px-2" style={{ float: "right" }}>
                      Technology
                    </p>
                  </Button>
                </div>
                <div>
                  <Button variant="light">
                    <BiMoney />
                    <p className="px-2" style={{ float: "right" }}>
                      Keuangan
                    </p>
                  </Button>
                </div>
                <div>
                  <Button variant="light">
                    <GiLifeInTheBalance />
                    <p className="px-2" style={{ float: "right" }}>
                      Lifestyle
                    </p>
                  </Button>
                </div>
              </div>
            </Col>
            <Col style={{}}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <div className="input-group-append">
                  <Button className="btn btn-outline-secondary" type="button">
                    Input
                  </Button>
                </div>
              </div>
            </Col>
          </Row>


          {/* <Button variant="primary" onClick={this.Add.handleShow}>
            Add Post
          </Button>

          <Modal show={this.Add.show} onHide={this.Add.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.Add.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.Add.handleClose}>
                Save Changes
              </Button>
              </Modal.Footer>
          </Modal> */}
        
          <Add triggerText={Add.triggerText} onSubmit={Add.onSubmit}/>


          <Row>
            <Col style={{}}>
              <Card className="mb-2">
                <Card.Header as="h5">Title #1</Card.Header>
                <Card.Body>
                  <Card.Title>
                    <CgProfile /> <p>Username</p>
                  </Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
              <Card className="mb-2">
                <Card.Header as="h5">Title #2</Card.Header>
                <Card.Body>
                  <Card.Title>
                    <CgProfile /> <p>Username</p>
                  </Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
