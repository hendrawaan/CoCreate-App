import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { loginIllustration, logoSmall } from "../../assets/images";
import { FacebookLoginBtn, GoogleLoginBtn } from "../../components";
import { login } from "../../store/user";
import "./Login.css";

/**
 * Login page.
 * Halaman untuk login.
 * Author : Abdurraziq Bachmid
 * Date   : 11/11/2020
 */
const Login = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.user);

  const [dataLogin, setDataLogin] = useState();
  const updateField = (e) => {
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    });
  };

  // TODO: Nanti akan diimplementasikan jika backend bisa menghandle
  // login via FB
  const responseFacebook = (response) => {
    console.log(response);
  };

  // TODO: Nanti akan diimplementasikan jika backend bisa menghandle
  // login via Google
  const responseGoogle = (response) => {
    console.log(response);
  };

  /**
   * Fungsi untuk menangani submit form login.
   * @param {object} e Element
   */
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(dataLogin));
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
          <img className="mx-auto d-block mb-3" src={logoSmall} alt="logo" />
          <h1 className="mb-4 text-center">Login</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Control
                required
                type="text"
                placeholder="Masukkan nama/email"
                name="name"
                autoComplete="username"
                onChange={updateField}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                required
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="current-password"
                onChange={updateField}
              />
            </Form.Group>
            <small>
              Lupa password? <a href="./">Klik disini</a> <br />
              <span className="text-danger ">{error}</span>
            </small>

            <Button
              className="my-3"
              variant="outline-secondary"
              type="submit"
              block
              disabled={loading}
            >
              {loading ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  className="mr-2"
                  aria-hidden="true"
                />
              ) : (
                <FaEnvelope className="mr-2" />
              )}
              <span>Masuk dengan Email</span>
            </Button>
          </Form>

          <div className="hr-text">
            <span>atau</span>
          </div>
          <FacebookLoginBtn callback={responseFacebook} />
          <GoogleLoginBtn callback={responseGoogle} />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
