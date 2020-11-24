import React, { useState, useEffect, useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MdAdd } from "react-icons/md";
import "./Group.css";

const Add = () => {
  const [show, setShow] = useState(false);
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [postTime, setPostTime] = useState();
  const didMountRef = useRef(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (didMountRef.current) {
      // fetch("http://kelompok6.dtstakelompok1.com/api/v1/group/add", {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8",
      //     Authorization: user.token
      //   },
      //   body: JSON.stringify({
      //     nama_group: nama,
      //     deskripsi_group: deskripsi
      //   })
      // }).then(res => res.json());
      alert("You are submitting " + nama + " and " + deskripsi);
    } else didMountRef.current = true;
  }, [postTime]);

  const getTimeNow = () => {
    const date = Date.now();
    const timeStamp = Math.floor(date / 1000);
    setPostTime(timeStamp);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    getTimeNow();
  };

  return (
    <>
      <Button variant="primary" style={{ width: "100%" }} onClick={handleShow}>
        <MdAdd />
        Create a Group
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="form-add-post"
      >
        <Modal.Header closeButton>
          <Modal.Title>Postingan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="postFeed">
              <Form.Label className="label-form">Nama Group</Form.Label>
              <Form.Control
                className="input"
                name="namaGroup"
                as="input"
                placeholder="Add title"
                value={nama}
                onChange={e => setNama(e.target.value)}
              />
              <Form.Label className="label-form">Deskripsi</Form.Label>
              <Form.Control
                name="deskripsi"
                as="textarea"
                rows={4}
                placeholder="Add content post"
                value={deskripsi}
                onChange={e => setDeskripsi(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
