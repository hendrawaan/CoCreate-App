import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { loginIllustrator } from "../../assets/images";
import "./Login.css";

/**
 * Login page.
 * Halaman untuk login.
 * Author : Abdurraziq Bachmid
 * Date   : 11/11/2020
 */
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Fungsi untuk menangani proses ketika user mensubmit permintaan login.
   * @param {object} e Element
   */
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Emai: ${email}\nPass: ${password}`);
  };

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
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="formEmail">
              <Form.Control
                required
                type="email"
                placeholder="Masukkan email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                required
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <p>
              Lupa password? <a href="./">Klik disini</a>
            </p>
            <Button className="mt-5 mb-3" variant="primary" type="submit" block>
              Masuk
            </Button>
            <p>
              Belum punya akun? <a href="./">Klik disini</a>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
