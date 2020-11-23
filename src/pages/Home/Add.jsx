import React, { useEffect, useState, useRef } from "react";
import { Button, Form, Modal, Col } from "react-bootstrap";
import { MdAdd } from "react-icons/md";
import "./Home.css";
import moment from "moment";
import { getProfile } from "../../store/profile";
import { useDispatch, useSelector } from "react-redux";

const Add = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setTitle("");
    setPostType();
    setCategory("");
    setIsi("");
  };
  const handleShow = () => setShow(true);
  const { user } = useSelector(state => state.user);
  const [title, setTitle] = useState("");
  const [isi, setIsi] = useState("");
  const [postType, setPostType] = useState();
  const [category, setCategory] = useState();
  const [postTime, setPostTime] = useState();
  const didMountRef = useRef(false);

  // const FeedPost = () => {
  // const [post, setPost] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const getTimeNow = () => {
    const date = Date.now();
    const timeStamp = Math.floor(date / 1000);
    setPostTime(timeStamp);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    getTimeNow();
  };

  useEffect(() => {
    if (didMountRef.current) {
      alert(
        `Submitting title: ${title} and postType: ${postType} and categoryType: ${category} and isi: ${isi} and time: ${postTime}`
      );
      fetch("http://kelompok6.dtstakelompok1.com/api/v1/feed/add", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: user.token
        },
        body: JSON.stringify({
          judul: title,
          id_kat_feed: category,
          id_jen_feed: postType,
          isi_feed: isi,
          waktu: postTime
        })
      }).then(res => res.json());
      handleClose();
    } else didMountRef.current = true;
  }, [postTime]);

  const sendBody = {};

  return (
    <>
      <Button
        className="ml-3"
        variant="primary"
        style={{ width: "100%" }}
        onClick={handleShow}
      >
        <MdAdd />
        New Post
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="form-add-post"
      >
        <Modal.Header closeButton>
          <Modal.Title>Create New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="postFeed">
              <Form.Label className="label-form">Title</Form.Label>
              <Form.Control
                className="input"
                name="title"
                as="input"
                placeholder="Add title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label className="label-form">Tag</Form.Label>
                  <Form.Control
                    as="select"
                    value={category}
                    onChange={e => setCategory(parseInt(e.target.value))}
                  >
                    <option>Choose Category...</option>
                    <option value={1}>Teknologi</option>
                    <option value={2}>Finance</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label className="label-form">Post type</Form.Label>
                  <Form.Control
                    as="select"
                    value={postType}
                    onChange={e => setPostType(parseInt(e.target.value))}
                  >
                    <option>Choose Post Type...</option>
                    <option value={1}>Artikel</option>
                    <option value={2}>Project</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Label className="label-form">Post Content</Form.Label>
              <Form.Control
                name="isi"
                as="textarea"
                rows={4}
                placeholder="Add content post"
                value={isi}
                onChange={e => setIsi(e.target.value)}
              />
              <Button type="submit">Post</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
