import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  ListGroup
} from "react-bootstrap";

import { FaHome } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { BiMoney } from "react-icons/bi";
import { GiLifeInTheBalance } from "react-icons/gi";
import { AiOutlineNumber } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../store/profile";

export function Trending() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const { profile } = useSelector(state => state.profile);

  const [filter, setFilter] = useState("Teknologi");

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

  const filterKesehatan = () => {
    setFilter = "Kesehatan";
  };

  return (
    <Container fluid style={{ backgroundColor: "#F1F6F9", padding: 0 }}>

      <Row style={{}}>

        {/* sisi kiri  */}
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

                </div>
                <div className="p-2">
                  <Button
                    variant="primary"
                    style={{ width: "100%" }}
                    type="submit"
                    onClick={() => (window.location = "/trending")}
                  >
                    <AiOutlineNumber />
                    Tranding Topic
                  </Button>
                </div>
                <div className="p-2">
                  <Button variant="outline-dark" style={{ width: "100%" }}>
                    <FaHome /> Home
                  </Button>
                </div>
                <div className="p-2">
                  <Button
                    variant="outline-dark"
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

          {/* isi tranding */}

        </Col>
        <Col md={6} style={{ paddingTop: 50, paddingRight: 50 }}>
          <Row>
            <Col>

              <div className="d-flex flex-row">
                <div>
                  <Button
                    variant="primary"
                    onClick={() => setFilter("Trending")}
                    style={{ width: "100%" }}
                  >

                    <AiOutlineNumber />
                    <p style={{ float: "right" }}>
                      Tranding
                    </p>
                  </Button>
                </div>

              </div>
            </Col>

          </Row>
          <Row>
            <Col style={{}}>
              {feed
                .filter(feeding => feeding.tag === filter)
                .map(filteredFeed => (
                  <Card className="mb-2" >
                    <Card.Header as="h5">
                      {/* <Col style={{}}>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                          <div className="input-group-append">
                            <Button className="btn btn-outline-secondary" type="button">
                              <BiSearchAlt />
                            </Button>
                          </div>
                        </div>
                      </Col> */}
                      Tren Untuk Anda
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        #NewTeachnology
                      </Card.Title>
                      <Card.Text>
                        3.230 <AiFillHeart />
                      </Card.Text>

                    </Card.Body>
                    <Card.Footer>

                    </Card.Footer>
                  </Card>
                ))}
            </Col>
          </Row>

          {/* sisi kanan */}
        </Col>
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

                </div>
                <div className="p-2">
                  <Button variant="outline-dark" style={{ width: "100%" }}>
                    <GrTechnology />
                     Technology
                  </Button>
                </div>
                <div className="p-2">
                  <Button
                    variant="outline-dark"
                    style={{ width: "100%" }}
                    type="submit"
                    onClick={() => (window.location = "/profile")}
                  >
                    <BiMoney />
                    Finance
                  </Button>
                </div>
                <div className="p-2">
                  <Button
                    variant="outline-dark"
                    style={{ width: "100%" }}
                    type="submit"
                    onClick={() => (window.location = "/trending")}
                  >
                    <GiLifeInTheBalance />
                    Lifestyle
                  </Button>
                </div>
              </div>
              <hr />
            </Col>
          </Row>
        </Col>

      </Row>
    </Container >
  );
}

