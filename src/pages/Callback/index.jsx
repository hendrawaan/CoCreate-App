import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginWithGoogle } from "../../store/user";

export const GoogleLoginCallBack = () => {
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.user);
  useEffect(() => {
    const token = window.location.search.replace("?t=", '');
    dispatch(loginWithGoogle(token));
  }, [dispatch]);

  if(user) {
    return <Redirect to="/" />;
  }

  if (error) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <Row className="align-items-center vh-fit">
        <i className="mx-auto text-center">
          Harap tunggu, <br /> Kami sedang mengarahkan Anda.
        </i>
      </Row>
    </Container>
  );
};
