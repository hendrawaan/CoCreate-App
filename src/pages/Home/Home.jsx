
import React, { useState, useEffect } from "react";
import PostFeed from './PostFeed'
import Feed from './Feed'
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  ListGroup,
  Carousel,
  Dropdown,
  Form,
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
  const { user } = useSelector((state) => state.user);
  const { profile } = useSelector((state) => state.profile);
  useEffect(() => {
    if (user) {
      dispatch(getProfile(user.token));
    }
  }, [dispatch, user]);

  const register = () => {
    window.location = "/register";
  };

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
      </Container>
      <Row>
        <Col
          md={3}
          style={{
            padding: 50,
          }}
        >
          <Row>
            <Col>
              <div className="d-flex flex-column">
                <div className="mx-auto text-center w-100">
                  <Card>
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
                <div className="p-2">
                  <Add />
                </div>
              </div>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
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
            <Col>
              <h1>Calendar</h1>
            </Col>
          </Row>
        </Col>
        <Col md={9} style={{ paddingTop: 50, paddingRight: 50 }}>
          <Row>
            <Col>
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
            <Col>
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
            <Col>
              <Card className="mb-3 mt-2">
                <h3 className="text-center">Postingan</h3>
                <Form className="container">
                    <Form.Group controlId="postFeed">
                    <Form.Label className="label-form">Title</Form.Label>
                    <Form.Control className="input"
                    name="title"
                        as="input"
                        placeholder="Add title"
                    />
                    <Form.Label className="label-form">Post Content</Form.Label>
                    <Form.Control
                        name="isi"
                        as="textarea"
                        rows={4}
                        placeholder="Add content post"
                    />
                    </Form.Group>
                    <Col md={{ span: 10, offset: 10 }} className="mb-3">
                    <Button variant="primary" >
                        Post
                    </Button>
                    </Col>
                </Form>
              </Card >
              <Feed title={<PostFeed />} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
