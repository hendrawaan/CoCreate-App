import React, { useEffect, useState, state } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  CardDeck,
  ListGroup,
  Carousel,
  Dropdown,
  InputGroup,
  FormControl
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
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { GiLifeInTheBalance } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../store/profile";

export function Home() {
  const feed = [
    {
      id_post: 1,
      title: "Berkembang dalam Industri 4.0",
      tag: "Teknologi",
      posted_by: "Harits",
      liked: 25,
      comment: 5
    },
    {
      id_post: 2,
      title: "Ayo mulai belajar React Redux",
      tag: "Teknologi",
      posted_by: "Arif",
      liked: 15,
      comment: 3
    },
    {
      id_post: 3,
      title: "Bahaya duduk di depan komputer lebih dari 45 menit!",
      tag: "Kesehatan",
      posted_by: "Ruli",
      liked: 45,
      comment: 7
    },
    {
      id_post: 4,
      title: "Jangan lupa sarapan!",
      tag: "Kesehatan",
      posted_by: "Rian",
      liked: 23,
      comment: 3
    },
    {
      id_post: 5,
      title: "Menabung Emas. Halal dan kaya di masa tua",
      tag: "Keuangan",
      posted_by: "Raziq",
      liked: 54,
      comment: 6
    },
    {
      id_post: 6,
      title: "Belajar Laravel",
      tag: "Teknologi",
      posted_by: "Raziq",
      liked: 12,
      comment: 5
    },
    {
      id_post: 7,
      title: "Belajar Flutter",
      tag: "Teknologi",
      posted_by: "Raziq",
      liked: 23,
      comment: 10
    }
  ];

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const { profile } = useSelector(state => state.profile);

  const [filter, setFilter] = useState("Teknologi");
  const [like, setLike] = useState();
  const [feeds, setFeeds] = useState([feed]);

  // const incrementMe = () => {
  //   setCounter(counter + 1);
  //   console.log("liked");
  // };

  useEffect(() => {
    if (user) {
      dispatch(getProfile(user.token));
    }
  }, [dispatch, user]);

  const register = () => {
    window.location = "/register";
  };

  const handleClick = () => {
    // update the books state property by adding a new book
    setFeeds([...feeds, { title: "A new Book", id: "..." }]);
  };

  console.log("feeds", feeds);
  console.log("feed", feed);

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
                  {feed
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
                            <Button variant="outline-primary">Read More</Button>
                          </Card.Body>
                          <Card.Footer>
                            <AiOutlineHeart /> {filteredFeed.liked}
                            {"  "}
                            <AiOutlineComment /> {filteredFeed.comment}
                          </Card.Footer>
                          <Card.Footer>
                            <Button
                              variant="danger"
                              className="m-1 btn-alert"
                              onClick={() => {
                                let key = filteredFeed.id_post;
                                setFeeds(prevState => ({
                                  feed: prevState.feed.map(el =>
                                    el.key === key
                                      ? { ...el, liked: filteredFeed.liked + 1 }
                                      : el
                                  )
                                }));
                                console.log("after click", filteredFeed.liked);
                              }}
                            >
                              <AiOutlineHeart /> Likes
                            </Button>
                            <Button variant="warning" className="m-1">
                              <AiOutlineComment /> Comment
                            </Button>
                          </Card.Footer>
                          <Card.Footer>
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
