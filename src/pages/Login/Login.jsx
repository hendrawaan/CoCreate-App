import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { loginIllustration, logoSmall } from "../../assets/images";
import "./Login.css";

/**
 * Login page.
 * Halaman untuk login.
 * Author : Abdurraziq Bachmid
 * Date   : 11/11/2020
 */
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [actionLogin, setActionLogin] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [username, setUsername] = useState("");

  /**
   * Fungsi untuk menangani proses ketika user mensubmit permintaan login.
   * @param {object} e Element
   */
  const submitHandler = e => {
    e.preventDefault();
    setErrorMsg();
    setActionLogin(true);

    fetch("http://54.158.203.226:80/api/v1/login", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        password: password
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => res.json())
      .then(res => {
        const { code, data } = res;
        if (code === 200) {
          localStorage.setItem("token", data.token);
          window.location = "/";
        } else if (code === 400) {
          setErrorMsg("Nama atau password salah");
        } else {
          throw new Error("Error");
        }
      })
      .catch(err => {
        setErrorMsg("Upss... Sepertinya terjadi kesalahan.");
        console.log(err);
      })
      .finally(() => {
        setActionLogin(false);
        setUsername(username);
      });
  };

  return (
    <Container>
      <Row className="vh-100 align-items-center row-login">
        <Col lg={9} className="d-none d-lg-block">
          <img
            className="w-100 login-illustration"
            src={loginIllustration}
            alt="Login Illustration"
          />
        </Col>
        <Col lg={3}>
          <img className="mx-auto d-block mb-4" src={logoSmall} alt="logo" />
          <h1 className="mb-4 text-center">Login</h1>
          <hr />
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Control
                required
                type="text"
                placeholder="Masukkan nama/email"
                name="name"
                autoComplete="username"
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                required
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
            <p>
              Lupa password? <a href="./">Klik disini</a>
            </p>
            <small className="text-danger ">{errorMsg}</small>
            <Button
              className="mt-4 mb-3"
              variant="primary"
              type="submit"
              block
              disabled={actionLogin}
            >
              {actionLogin && (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              <span className="ml-2">Masuk</span>
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
