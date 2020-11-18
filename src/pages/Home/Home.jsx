import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  ListGroup,
  Carousel,
  Dropdown
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
import { AiOutlineHeart } from "react-icons/ai";
import { GiLifeInTheBalance } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../store/profile";

export function Home() {
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

  const feed = [
    {
      id: 1,
      title: "Berkembang dalam Industri 4.0",
      tag: "Teknologi",
      posted_by: "Harits"
    },
    {
      id: 2,
      title: "Ayo mulai belajar React Redux",
      tag: "Teknologi",
      posted_by: "Arif"
    },
    {
      id: 3,
      title: "Bahaya duduk di depan komputer lebih dari 45 menit!",
      tag: "Kesehatan",
      posted_by: "Ruli"
    },
    {
      id: 4,
      title: "Jangan lupa sarapan!",
      tag: "Kesehatan",
      posted_by: "Rian"
    },
    {
      id: 5,
      title: "Menabung Emas. Halal dan kaya di masa tua",
      tag: "Keuangan",
      posted_by: "Raziq"
    }
  ];

  const filterClickTech = () => {
    return feed
      .filter(feeding => feeding.tag === "Teknologi")
      .map(filteredFeed => (
        <Card className="mb-2" key={filteredFeed.id}>
          <Card.Header as="h5">{filteredFeed.title}</Card.Header>
          <Card.Body>
            <Card.Title>
              <CgProfile /> <p>{filteredFeed.posted_by}</p>
            </Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: "transparent" }}>
              <AiOutlineHeart />
            </Button>
          </Card.Footer>
        </Card>
      ));
  };

  return (
    <Container fluid style={{ backgroundColor: "#F1F6F9", padding: 0 }}>
      {/* <Container fluid style={{ backgroundColor: "#14274E" }}>
        <Row className="align-items-center" style={{ padding: 10 }}>
          <Col md={8}>
            <img style={{ height: 70 }} src={homeLogo} alt="Home Logo" />
          </Col>
          <Col md={4} className="align-middle">
            <div className="d-flex flex-row-reverse">
              <div className="" style={{ display: "inline" }}>
                <Button variant="primary" type="submit" onClick={register}>
                  {isLogin ? "Username" : "Register"}
                </Button>
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
        <Row className="align-items-center" style={{}}>
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
        </Row>
      </Container> */}
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
                            terverifikasi
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
                  <Button
                    variant="light"
                    style={{ width: "100%" }}
                    type="submit"
                    onClick={() => (window.location = "/profile")}
                  >
                    <MdEvent />
                    Profile
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
                  <Button variant="light" onClick={filterClickTech}>
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
          <Row>
            <Col style={{}}>{}</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
