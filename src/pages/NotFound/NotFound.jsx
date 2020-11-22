import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { notFoundIlustration } from "../../assets/images";

/**
 * Author : Muhammad Febriansyah
 * Date   : 19/11/2020
 */
export function NotFound() {
  const history = useHistory();
  return (
    <Container className="my-5">
      <Button variant="danger" onClick={() => history.goBack()}>
        Go Back
      </Button>
      <img
        className="mx-auto d-block"
        alt="Not found"
        src={notFoundIlustration}
        style={{ maxHeight: "calc(100vh - 120px)" }}
      />
    </Container>
  );
}
