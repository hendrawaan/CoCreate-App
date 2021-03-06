import React, { useState, useEffect, useRef } from "react";
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
  FormControl,
  Form
} from "react-bootstrap";
import { homeLogo } from "../../assets/images";
import { FaHome } from "react-icons/fa";
import { MdEvent, MdSettingsInputAntenna } from "react-icons/md";
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

function Post() {
  const [realFeeds, setRealFeeds] = useState([]);
  const { user } = useSelector(state => state.user);
  const [filter, setFilter] = useState(0);
  const history = useHistory();
  const [selectedElement, toggleElement] = useState(-1);
  const [likes, setLikes] = useState([]);
  const [comment, setComments] = useState([]);
  const [idFeedComment, setIdFeedComment] = useState([]);
  const didMountRef = useRef(false);

  const getPost = () => {
    fetch("http://kelompok6.dtstakelompok1.com/api/v1/feeds/user", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: user.token
      }
    })
      .then(res => res.json())
      .then(data => {
        setRealFeeds(data.data.feeds);
        console.log("realfeeddieffect", data.data.feeds);
      });
  };

  useEffect(() => {
    getPost();
  }, [likes]);

  useEffect(() => {
    if (didMountRef.current) {
      console.log("like di effect", likes);
      fetch("http://kelompok6.dtstakelompok1.com/api/v1/feeds/like", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: user.token
        },
        body: JSON.stringify(likes)
      }).then(res => res.json());
    } else didMountRef.current = true;
  }, [likes]);

  useEffect(() => {
    if (didMountRef.current) {
      fetch("http://kelompok6.dtstakelompok1.com/api/v1/feeds/comment/add", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: user.token
        },
        body: JSON.stringify(comment)
      }).then(res => res.json());
    } else didMountRef.current = true;
  }, [setComments]);

  const commentClick = index => {
    console.log(index);
    toggleElement(selectedElement === index ? -1 : index);
  };

  const commentSubmit = evt => {
    evt.preventDefault();
    console.log(comment);
    console.log(idFeedComment);
  };

  const likeClick = (id, isLike) => {
    const isLiked = !isLike ? true : false;
    setLikes({ id_feed: id, like: isLiked });
    console.log("ini likes di likeclick", likes);
  };

  return realFeeds
    .filter(filtering =>
      filter === 0 ? filtering.id_kat_feed : filtering.id_kat_feed === filter
    )
    .map((items, index) => (
      <Col md={6} key={index}>
        <Card className="my-4">
          <Card.Body>
            <Card.Title>
              <Row className="d-flex align-items-center justify-content-center">
                <Col md={2} className="">
                  <CgProfile size={40} />
                </Col>
                <Col md={10} className="">
                  <p>{items.judul}</p>
                </Col>
              </Row>
              <Row className="d-flex flex-row align-items-center justify-content-center">
                <p style={{ fontSize: 10 }}>
                  Posted By: {items.name_user} |{" "}
                  {moment.unix(items.waktu).format("YYYY-MM-DD HH:mm")} |{" "}
                  {items.nama_kategori}
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
              variant={!items.is_like ? "outline-secondary" : "danger"}
              className="m-1 btn-alert"
              onClick={() => {
                likeClick(items.id, items.is_like);
              }}
            >
              <AiOutlineHeart /> {!items.is_like ? "Like" : "Liked"}
            </Button>
            <Button
              variant="warning"
              className="m-1"
              onClick={() => commentClick(index)}
            >
              <BiCommentDots /> Comment
            </Button>
          </Card.Footer>
          {selectedElement === index ? (
            <Card.Footer className="">
              <Form onSubmit={commentSubmit}>
                <InputGroup className="mb-3">
                  <FormControl
                    className="input"
                    as="input"
                    placeholder="Tulis komentar..."
                    aria-label="Comment"
                    value={comment}
                    onChange={e => setComments(e.target.value)}
                  />
                  <input
                    type="hidden"
                    id="custId"
                    name="custId"
                    value={idFeedComment}
                    onChange={setIdFeedComment(items.id)}
                  ></input>
                </InputGroup>
                <Button type="submit">Submit</Button>
              </Form>
            </Card.Footer>
          ) : null}
        </Card>
      </Col>
    ));
}

export function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const { profile } = useSelector(state => state.profile);
  const history = useHistory();

  useEffect(() => {
    if (user) {
      dispatch(getProfile(user.token));
    }
  }, [dispatch, user]);

  let profileData = profile?.user;

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
                        </div>
                      )}
                    </ListGroup>
                  </Card>
                </div>
                <div className="p-2"></div>
              </div>
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
                  <Post />
                </Row>
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
