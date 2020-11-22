import React from "react";
import { Form } from "react-bootstrap";

export const FormLogin = (props) => {
  return (
    <Form.Group controlId={props.name}>
      <Form.Control required {...props} />
    </Form.Group>
  );
};
