import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { loginIllustrator } from "../../assets/images";
import "./Login.css";

/**
 * Login page.
 * Author : Abdurraziq Bachmid
 * Date   : 11/11/2020
 */
const Login = () => {

  return (
    <Container>
      <Row className="vh-100 align-items-center row-login">
        <Col md={8} lg={9} className="d-none d-md-block">
          <img
            className="w-100"
            src={loginIllustrator}
            alt="Login Illustration"
          />
        </Col>
        <Col md={4} lg={3}>
          <h1 className="mb-5">Login</h1>
          <p className="mb-4">
            Hai Selemat datang!
            <br />
            Login dulu yuk...
          </p>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <p>
              Lupa password? <a href="./">Klik disini</a>
            </p>
            <Button className="mt-5 mb-3" variant="primary" type="submit" block>
              Login
            </Button>
            <p>
              Belum punya akun? <a href="./">Klik disini</a>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login
