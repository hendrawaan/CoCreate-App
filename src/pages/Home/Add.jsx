import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { MdAdd } from "react-icons/md";

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

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Postingan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="post">
              <Form.Label>Judul</Form.Label>
              <Form.Control
              valueId="postTitle"
                as="textarea"
                rows={2}
                placeholder="Post Title.."
              />
              <Form.Label>Tuliskan postingan Anda</Form.Label>
              <Form.Control
              valueId="postDeskripsi"
                as="textarea"
                rows={4}
                placeholder="Bagikan pemikiran anda..."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;