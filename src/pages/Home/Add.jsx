import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { MdAdd } from "react-icons/md";
import './Home.css'

  const Add = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" style={{ width: "100%" }} onClick={handleShow}>
        <MdAdd />
        New Post
      </Button>

      <Modal show={show} onHide={handleClose} centered className="form-add-post">
        <Modal.Header closeButton>
          <Modal.Title>Postingan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
