import React from "react";
import { Form } from "react-bootstrap";

const FormLogin = (props) => {
  return (
    <Form.Group controlId={props.name}>
      <Form.Control required {...props} />
    </Form.Group>
  );
};

export default FormLogin;
