import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export const ModalFeed = (props) => {
  const [isTextEmpty, setTextEmpety] = useState(true);

  return (
    <Modal {...props}
      size="md"
      aria-labelledby="modal-feed"
      centered>

      <Modal.Header closeButton>
        <Modal.Title id="modal-feed">
          {
            props?.category
              ? "Edit"
              : "Add"
          } Feed Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => e.preventDefault()}>
          <Form.Group>
            <Form.Label>Feed Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan Feed Category"
              defaultValue={props?.category}
              onChange={(e) => {
                props.onChange(e);
                setTextEmpety(false);
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          disabled={isTextEmpty}
          onClick={() => {
            props.onSubmit();
            setTextEmpety(true);
          }}
        >
          {
            props?.category
              ? "Update"
              : "Tambah"
          }
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            props.onHide();
            setTextEmpety(true);
          }}
        >
          Batal
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
