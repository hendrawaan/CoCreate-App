import React, { useState, useEffect } from "react";
import PostFeed from "./PostFeed";
import Feed from "./Feed";
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
import moment from "moment";
import { logout } from "../../store/user";
import Add from "./Add";
import { useHistory } from "react-router-dom";

export function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const { profile } = useSelector(state => state.profile);
  const history = useHistory();

  const [filter, setFilter] = useState(0);
  const [showcomment, setShowcomment] = useState(-1);
  const [clickedcomment, setClickedcomment] = useState();
  const [realFeeds, setRealFeeds] = useState([]);
  const [myCategory, setMyCategory] = useState([{ id: 1 }, { id: 2 }]);
  const [comment, setComments] = useState([]);
  const [feeds, setFeeds] = useState([
    {
      id: 1,
      title: "Berkembang dalam Industri 4.0",
      tag: "Teknologi",
      posted_by: "Harits",
      liked: 25,
      comment: 5,
      isLikedByUser: false
    },
    {
      id: 2,
      title: "Ayo mulai belajar React Redux",
      tag: "Teknologi",
      posted_by: "Arif",
      liked: 15,
      comment: 3,
      isLikedByUser: false
    },
    {
      id: 3,
      title: "Bahaya duduk di depan komputer lebih dari 45 menit!",
      tag: "Kesehatan",
      posted_by: "Ruli",
      liked: 45,
      comment: 7,
      isLikedByUser: false
    },
    {
      id: 4,
      title: "Jangan lupa sarapan!",
      tag: "Kesehatan",
      posted_by: "Rian",
      liked: 23,
      comment: 3,
      isLikedByUser: false
    },
    {
      id: 5,
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

  useEffect(() => {
    fetch("http://kelompok6.dtstakelompok1.com/api/v1/feeds/user", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: user.token
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setRealFeeds(data.data.feeds);
      });
  }, []);

  useEffect(() => {
    fetch("http://kelompok6.dtstakelompok1.com/api/v1/kategori/list/follow", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: user.token
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("category", data);
        setMyCategory(data.data.kategori_follow);
      });
  }, []);

  // console.log("feeds", feeds);
  console.log("realFeeds", realFeeds);
  console.log("realCategory", myCategory);

  const commentClick = id_post => {
    console.log("showcomment before:", showcomment);
    setShowcomment({ showcomment: showcomment === id_post ? -1 : id_post });
    console.log("di fungsi klik post:", id_post);
    console.log("di fungsi klik showcomment:", showcomment);
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
                          <ListGroup.Item>{profileData?.name}</ListGroup.Item>
                          <ListGroup.Item>{profileData?.email}</ListGroup.Item>
                          {/* <ListGroup.Item>
                            {profileData?.verification === "False"
                              ? " belum "
                              : " sudah "}{" "}
                            terverifikasi
                          </ListGroup.Item> */}
                        </div>
                      )}
                    </ListGroup>
                  </Card>
                </div>
                {/* <div className="p-2">
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
                </div> */}
                <div className="p-2"></div>
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
        </Col>
        <Col md={9} style={{ paddingTop: 50, paddingRight: 50 }}>
          <Row>
            <Col>
              <div className="d-flex flex-row">
                <div>
                  <Add />
                </div>
                {/* <div>
                  <Button variant="light" onClick={() => setFilter(0)}>
                    <GrTechnology />
                    <p className="px-2" style={{ float: "right" }}>
                      My Feed
                    </p>
                  </Button>
                </div>
                <div>
                  <Button variant="light" onClick={() => setFilter(1)}>
                    <GrTechnology />
                    <p className="px-2" style={{ float: "right" }}>
                      Technology
                    </p>
                  </Button>
                </div>
                <div>
                  <Button variant="light" onClick={() => setFilter(2)}>
                    <BiMoney />
                    <p className="px-2" style={{ float: "right" }}>
                      Keuangan
                    </p>
                  </Button>
                </div>
                <div>
                  <Button variant="light" onClick={() => setFilter(3)}>
                    <GiLifeInTheBalance />
                    <p className="px-2" style={{ float: "right" }}>
                      Lifestyle
                    </p>
                  </Button>
                </div> */}
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
          {/* **** BARIS ISI FEED **** */}
          <Row>
            <Col style={{}}>
              <Container>
                <Row className="show-grid">
                  {realFeeds
                    .filter(filtering =>
                      filter === 0
                        ? filtering.id_kat_feed
                        : filtering.id_kat_feed === filter
                    )
                    .map(items => (
                      <Col md={6} key={items.id}>
                        <Card className="my-4">
                          <Card.Body>
                            <Card.Title>
                              <Row className="d-flex align-items-center justify-content-center">
                                <Col md={2} className="">
                                  <CgProfile size={50} />
                                </Col>
                                <Col md={10} className="">
                                  <p>{items.judul}</p>
                                </Col>
                              </Row>
                              <Row className="d-flex flex-row align-items-center justify-content-center">
                                <p style={{ fontSize: 15 }}>
                                  Posted By: {items.name_user} |{" "}
                                  {moment
                                    .unix(items.waktu)
                                    .format("YYYY-MM-DD hh:mm")}{" "}
                                  | {items.id_kat_feed}
                                </p>
                              </Row>
                            </Card.Title>
                            <hr />
                            <Card.Text
                              style={{
                                height: 100,
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                              }}
                            >
                              {items.isi_feed}
                            </Card.Text>
                            <Button
                              variant="outline-primary"
                              onClick={() => history.push("feed/" + items.id)}
                            >
                              Read More
                            </Button>
                          </Card.Body>
                          <Card.Footer>
                            <AiOutlineHeart /> {items.jumlah_liker}
                            {"  "}
                            <BiCommentDots /> {items.jumlah_comment}
                          </Card.Footer>
                          <Card.Footer>
                            <Button
                              variant="danger"
                              // {
                              //   !items.isLikedByUser
                              //     ? "outline-secondary"
                              //     : "danger"
                              // }
                              className="m-1 btn-alert"
                              // onClick={() => {
                              //   setFeeds(prevFeeds =>
                              //     feeds.map(item =>
                              //       item.id_post === items.id_post &&
                              //       items.isLikedByUser == false
                              //         ? {
                              //             ...item,
                              //             liked: item.liked + 1,
                              //             isLikedByUser: true
                              //           }
                              //         : item.id_post === items.id_post &&
                              //           items.isLikedByUser == true
                              //         ? {
                              //             ...item,
                              //             liked: item.liked - 1,
                              //             isLikedByUser: false
                              //           }
                              //         : item
                              //     )
                              //   );
                              // }}
                            >
                              <AiOutlineHeart />{" "}
                              {/* {!items.isLikedByUser ? "Like" : "Liked"} */}
                              Like
                            </Button>
                            <Button
                              variant="warning"
                              className="m-1"
                              onClick={() => {
                                commentClick(items.id_post);
                                console.log("dari klik:", items.id);
                              }}
                            >
                              <BiCommentDots /> Comment
                            </Button>
                          </Card.Footer>
                          {showcomment === -1 ? (
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
