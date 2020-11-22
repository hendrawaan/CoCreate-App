import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { profileimg } from "../../assets/images";
import { getProfile } from "../../store/profile";

export const AdminHome = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { profile } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getProfile(user?.token));
  }, [dispatch, user]);

  return (
    <Card
      className="mx-auto shadow"
      style={{ maxWidth: "420px" }}>
      <Row noGutters>
        <Col xs={4}>
          <Card.Img
            src={profileimg}
            alt="Person"
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </Col>

        <Col xs={8}>
          <Card.Body>
            <Card.Title>{profile?.user.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {profile?.user.email}
            </Card.Subtitle>
            <Card.Text>{profile?.user.short_bio}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};
