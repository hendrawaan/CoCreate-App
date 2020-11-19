import jwt_decode from "jwt-decode";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginIllustration } from "../../assets/images";
import { GoogleLoginBtn } from "../../components";
import { addUser, login } from "../../store/user";
import FormLogin from "./FormLogin";
import "./Login.css";

/**
 * Login and Registration page.
 * Halaman untuk login.
 * Author : Abdurraziq Bachmid
 *          Muhammad Febriansyah
 * Date   : 11/11/2020
 */
export const Login = () => {
  const dispatch = useDispatch();
  const { user, error, loading } = useSelector((state) => state.user);

  const [isLogin, setLogin] = useState(true);
  const [formData, setFormData] = useState();

  const updateField = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Jika user mengklik tombol login maka user akan di arahkan ke halaman untuk
   * Google Login.
   */
  const googleLoginCallBack = () => {
    window.location.replace("http://54.234.253.116:80/api/v1/google/login");
  };

  /**
   * Fungsi untuk menangani submit form login.
   * @param {object} e Element
   */
  const submitHandler = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(login(formData));
    } else {
      formData.password === formData.passwordConfirm
        ? dispatch(addUser(formData))
        : alert("Password tidak sama!");
    }
  };

  /**
   * Cek data user. Jika ada maka akan di-decode tokennya untuk mengetahui
   * type_user-nya. Setelahnya akan diarahkan ke halaman yang sesuai.
   */
  if (user) {
    const { token } = user;
    const decode = jwt_decode(token);

    return decode.type_user === 1 ? (
      <Redirect to="/admin" />
    ) : (
      <Redirect to="/" />
    );
  }

  return (
    <Container>
      <Row className="align-items-center row-login">
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

          <GoogleLoginBtn onClick={googleLoginCallBack} />

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
