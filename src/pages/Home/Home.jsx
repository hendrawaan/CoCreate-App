import React, { useEffect, useState, state } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  ListGroup,
  InputGroup,
  FormControl
} from "react-bootstrap";
import { homeLogo } from "../../assets/images";
import { FaHome } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GrTechnology } from "react-icons/gr";
import { BiMoney, BiCommentDots } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { GiLifeInTheBalance } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../store/profile";

export function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const { profile } = useSelector(state => state.profile);

  const [filter, setFilter] = useState("Teknologi");
  const [showcomment, setShowcomment] = useState(false);
  const [clickedcomment, setClickedcomment] = useState();
  const [feeds, setFeeds] = useState([
    {
      id_post: 1,
      title: "Berkembang dalam Industri 4.0",
      tag: "Teknologi",
      posted_by: "Harits",
      liked: 25,
      comment: 5,
      isLikedByUser: false
    },
    {
      id_post: 2,
      title: "Ayo mulai belajar React Redux",
      tag: "Teknologi",
      posted_by: "Arif",
      liked: 15,
      comment: 3,
      isLikedByUser: false
    },
    {
      id_post: 3,
      title: "Bahaya duduk di depan komputer lebih dari 45 menit!",
      tag: "Kesehatan",
      posted_by: "Ruli",
      liked: 45,
      comment: 7,
      isLikedByUser: false
    },
    {
      id_post: 4,
      title: "Jangan lupa sarapan!",
      tag: "Kesehatan",
      posted_by: "Rian",
      liked: 23,
      comment: 3,
      isLikedByUser: false
    },
    {
      id_post: 5,
      title: "Menabung Emas. Halal dan kaya di masa tua",
      tag: "Keuangan",
      posted_by: "Raziq",
      liked: 54,
      comment: 6,
      isLikedByUser: false
    },
    {
      id_post: 6,
      title: "Belajar Laravel",
      tag: "Teknologi",
      posted_by: "Raziq",
      liked: 12,
      comment: 5,
      isLikedByUser: false
    },
    {
      id_post: 7,
      title: "Belajar Flutter",
      tag: "Teknologi",
      posted_by: "Raziq",
      liked: 23,
      comment: 10,
      isLikedByUser: false
    }
  ]);

  useEffect(() => {
    if (user) {
      dispatch(getProfile(user.token));
    }
  }, [dispatch, user]);

  let profileData = profile?.user;
  const register = () => {
    window.location = "/register";
  };

  useEffect(() => {
    if (user) {
      dispatch(getProfile(user.token));
    }
  }, [dispatch, user]);

  useEffect(() => {
    fetch("");
  }, []);

  console.log("feeds", feeds);

  const commentClick = id_post => {
    setShowcomment(!showcomment);
    console.log(id_post);
  };

  return (
    <Container fluid style={{ backgroundColor: "#F1F6F9", padding: 0 }}>
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
                          <ListGroup.Item>{profileData?.name}</ListGroup.Item>
                          <ListGroup.Item>{profileData?.email}</ListGroup.Item>
                          <ListGroup.Item>
                            {profileData?.verification === "False"
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
              <div className="d-flex flex-row">
                <div>
                  <Button
                    variant="light"
                    onClick={() => setFilter("Teknologi")}
                  >
                    <GrTechnology />
                    <p className="px-2" style={{ float: "right" }}>
                      My Feed
                    </p>
                  </Button>
                </div>
                <div>
                  <Button
                    variant="light"
                    onClick={() => setFilter("Teknologi")}
                  >
                    <GrTechnology />
                    <p className="px-2" style={{ float: "right" }}>
                      Technology
                    </p>
                  </Button>
                </div>
                <div>
                  <Button variant="light" onClick={() => setFilter("Keuangan")}>
                    <BiMoney />
                    <p className="px-2" style={{ float: "right" }}>
                      Keuangan
                    </p>
                  </Button>
                </div>
                <div>
                  <Button
                    variant="light"
                    onClick={() => setFilter("Kesehatan")}
                  >
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
            <Col style={{}}>
              <Container>
                <Row className="show-grid">
                  {feeds
                    .filter(feeding => feeding.tag === filter)
                    .map(filteredFeed => (
                      <Col md={6} key={filteredFeed.id_post}>
                        <Card className="my-4">
                          <Card.Header as="h4">
                            {filteredFeed.title}
                          </Card.Header>
                          <Card.Body>
                            <Card.Title>
                              <div className="row">
                                <div className="col-md-1 text-center">
                                  <CgProfile />
                                </div>
                                <div className="col-md-11">
                                  <p>{filteredFeed.posted_by}</p>
                                </div>
                              </div>
                            </Card.Title>
                            <Card.Text>
                              With supporting text below as a natural lead-in to
                              additional content.
                            </Card.Text>
                            <Button
                              variant="outline-primary"
                              onClick={() => (window.location = "./detailpost")}
                            >
                              Read More
                            </Button>
                          </Card.Body>
                          <Card.Footer>
                            <AiOutlineHeart /> {filteredFeed.liked}
                            {"  "}
                            <BiCommentDots /> {filteredFeed.comment}
                          </Card.Footer>
                          <Card.Footer>
                            <Button
                              variant={
                                !filteredFeed.isLikedByUser
                                  ? "outline-secondary"
                                  : "danger"
                              }
                              className="m-1 btn-alert"
                              onClick={() => {
                                setFeeds(prevFeeds =>
                                  feeds.map(item =>
                                    item.id_post === filteredFeed.id_post &&
                                    filteredFeed.isLikedByUser == false
                                      ? {
                                          ...item,
                                          liked: item.liked + 1,
                                          isLikedByUser: true
                                        }
                                      : item.id_post === filteredFeed.id_post &&
                                        filteredFeed.isLikedByUser == true
                                      ? {
                                          ...item,
                                          liked: item.liked - 1,
                                          isLikedByUser: false
                                        }
                                      : item
                                  )
                                );
                              }}
                            >
                              <AiOutlineHeart />{" "}
                              {!filteredFeed.isLikedByUser ? "Like" : "Liked"}
                            </Button>
                            <Button
                              variant="warning"
                              className="m-1"
                              onClick={() =>
                                filteredFeed.id_post === 1
                                  ? commentClick(filteredFeed.id_post)
                                  : null
                              }
                            >
                              <BiCommentDots /> Comment
                            </Button>
                          </Card.Footer>
                          {showcomment ? (
                            <Card.Footer className="">
                              <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                  <InputGroup.Text id="basic-addon1">
                                    <CgProfile />
                                  </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                  placeholder="Tulis komentar..."
                                  aria-label="Comment"
                                />
                              </InputGroup>
                            </Card.Footer>
                          ) : null}
                        </Card>
                      </Col>
                    ))}
                </Row>
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
