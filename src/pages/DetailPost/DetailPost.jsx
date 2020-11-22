import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row
} from "react-bootstrap";
import { FaHeart, FaRegCommentDots, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { profileimg } from "../../assets/images";
import { LoadingIndicator } from "../../components";
import { clearFeedState, getFeed } from "../../store/feed";
import { comment } from "./data";
import "./DetailPost.css";


export const DetailPost = ({ location }) => {
  const pathend = location.pathname.split("/").pop();

  const history = useHistory();
  const dispatch = useDispatch();

  const [like, setLike] = useState(true);
  const { feed } = useSelector((state) => state.feed);

  useEffect(() => {
    dispatch(getFeed(parseInt(pathend)));

    return () => {
      dispatch(clearFeedState("feedDetail"));
    };
  }, [dispatch, pathend]);

  const ContentComment = () => {
    return (
      <>
        <ListGroup variant="flush">
          {comment.map(function (item, i) {
            return (
              <ListGroup.Item key={i}>
                <small>@{item.username}</small>
                <p className="m-0 p-0">{item.comment}</p>
              </ListGroup.Item>
            );
          })}
        </ListGroup>

        <Form className="mt-5">
          <Form.Group controlId="text">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Type a comment...."
            />
          </Form.Group>

          <div className="d-block text-right">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </>
    );
  };

  return (
    <>
      {
        feed?.feedDetail
          ? (<Container className="py-5">
              <Row className="mb-4">
                <Col lg={9}>
                  <h6>
                    {moment
                      .unix(feed?.feedDetail?.waktu)
                      .format("DD MMM YYYY hh:mm")}
                  </h6>

                  <h3 className="mb-3">{feed?.feedDetail?.judul}</h3>
                  <p>
                    Author: {feed?.feedDetail?.name_user} -
                    <b> @{feed?.feedDetail?.username}</b>
                  </p>
                </Col>
              </Row>

              <Row>
                <Col
                  lg={9}
                  className="article-container order-lg-first order-last"
                >
                  <p>{feed?.feedDetail?.isi_feed}</p>
                  <h3 className="mt-5 mb-3">Comment:</h3>
                  <ContentComment />
                </Col>
                
                <Col lg={3} className="order-lg-last order-first mb-5">
                  {feed?.feedDetail?.id_user && (
                    <Card className="card-profile mx-auto">
                      <div className="upper-container">
                        <Image
                          roundedCircle
                          className="image-profile"
                          src={profileimg}
                          alt="profile-image"
                        />
                      </div>
                      
                      <Card.Body
                        className="lower-container"
                        type="button"
                        onClick={() =>
                          history.push("/profile/" + feed?.feedDetail?.id_user)
                        }
                      >
                        <small className="m-0 p-0">
                          {feed?.feedDetail?.name_user}
                        </small>
                        <h6 className="m-0 p-0">
                          @{feed?.feedDetail?.username}
                        </h6>
                      </Card.Body>

                      <Card.Footer>
                        <Row className="align-center">
                          <Col xs={6}>
                            <p
                              className="p-0 m-0"
                              onClick={() => setLike(!like)}
                            >
                              {
                                like
                                  ? (<FaHeart color="red" className="mr-2" />)
                                  : (<FaRegHeart className="mr-2" />)
                              }
                              {feed?.feedDetail?.jumlah_liker}
                            </p>
                          </Col>

                          <Col xs={6}>
                            <p className="p-0 m-0">
                              <FaRegCommentDots className="mr-2" />
                              {feed?.feedDetail?.jumlah_comment}
                            </p>
                          </Col>

                        </Row>
                      </Card.Footer>
                    </Card>
                  )}
                </Col>
              </Row>
            </Container>)

          : (<LoadingIndicator />)
      }
    </>
  );
}
