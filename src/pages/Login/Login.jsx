import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { loginIllustration } from "../../assets/images";
import { GoogleLoginBtn } from "../../components";
import { addUser, login } from "../../store/user";
import FormLogin from "./FormLogin";
import "./Login.css";

/**
 * Login page.
 * Halaman untuk login.
 * Author : Abdurraziq Bachmid
 * Date   : 11/11/2020
 */
const Login = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector(state => state.user);

  const [isLogin, setLogin] = useState(true);
  const [formData, setFormData] = useState();

  const updateField = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // TODO: Nanti akan diimplementasikan jika backend bisa menghandle
  // login via FB
  const responseFacebook = response => {
    console.log(response);
  };

  // TODO: Nanti akan diimplementasikan jika backend bisa menghandle
  // login via Google
  const responseGoogle = response => {
    console.log(response);
  };

  /**
   * Fungsi untuk menangani submit form login.
   * @param {object} e Element
   */
  const submitHandler = e => {
    e.preventDefault();
    if (isLogin) {
      dispatch(login(formData));
    } else {
      if (formData.password === formData.passwordConfirm) {
        dispatch(addUser(formData));
      } else {
        alert("Password tidak sama!");
      }
    }
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
        <Col lg={3} className="my-4">
          <h1 className="mb-4 text-center">{isLogin ? "Login" : "Daftar"}</h1>
          <Form onSubmit={submitHandler}>
            {!isLogin && (
              <>
                <FormLogin
                  type="text"
                  placeholder="Masukkan username"
                  name="username"
                  autoComplete={isLogin ? "username" : "off"}
                  onChange={updateField}
                />

                <FormLogin
                  type="text"
                  placeholder="Masukkan nama"
                  name="name"
                  autoComplete={isLogin ? "name" : "off"}
                  onChange={updateField}
                />
              </>
            )}
            <FormLogin
              type="email"
              placeholder="Masukkan email"
              name="email"
              autoComplete={isLogin ? "email" : "off"}
              onChange={updateField}
            />
            <FormLogin
              type="password"
              placeholder="Masukkan password"
              name="password"
              autoComplete={isLogin ? "current-password" : "new-password"}
              onChange={updateField}
            />
            {!isLogin && (
              <FormLogin
                type="password"
                placeholder="Konfirmasi password"
                name="passwordConfirm"
                autoComplete="new-password"
                onChange={updateField}
              />
            )}
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
              <span>
                {isLogin ? "Masuk dengan Email" : "Daftar dengan Email"}
              </span>
            </Button>
          </Form>

          {/* <FacebookLoginBtn callback={responseFacebook} /> */}
          <GoogleLoginBtn callback={responseGoogle} />
          <small>
            {isLogin ? "Belum punya akun? " : "Sudah punya akun? "}
            <span
              className="text-primary"
              type="button"
              onClick={() => setLogin(!isLogin)}
            >
              Klik disini
            </span>
            <br />
          </small>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
