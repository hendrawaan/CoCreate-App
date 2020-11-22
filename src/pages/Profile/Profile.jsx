import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Nav,
  Row
} from "react-bootstrap";
import {
  FaCalendar,
  FaEnvelope,
  FaFileAlt,
  FaIdCard,
  FaKey,
  FaMapMarkerAlt,
  FaMapPin,
  FaPhone,
  FaRestroom,
  FaUser
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { profileimg } from "../../assets/images";
import { InputGroupCustom, LoadingIndicator } from "../../components";
import { getMyFeeds } from "../../store/feed";
import {
  clearProfileState,
  getOtherUserProfile,
  getProfile,
  updatePassword,
  updateProfile
} from "../../store/profile";
import { logout } from "../../store/user";
import { listGender, listMenu, listNav } from "./List";
import "./Profile.css";
export const Profile = ({ location }) => {
  const pathend = location.pathname.split("/").pop();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.user);
  const { feed } = useSelector((state) => state.feed);
  const [navKey, setKey] = useState(1);
  const history = useHistory();
  const [formProfile, setFormProfile] = useState({
    name: "",
    birth: 0,
    gender: "",
    address: "",
    phone: "",
    postcode: 0,
    short_bio: "",
  });
  const [formPassword, setFormPassword] = useState();
  const [isUser, setIsuser] = useState(false);
  const [hiddenbar, setHiddenBar] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const updateProfiles = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setFormProfile({
      ...formProfile,
      [name]: value,
    });
  };
  const updatePasswords = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setFormPassword({
      ...formPassword,
      [name]: value,
    });
  };
  const dataFeeds = feed?.myFeeds;
  const dataProfile =
    pathend !== "profile" ? profile?.otherUser : profile?.user;
  useEffect(() => {
    if (pathend !== "profile") {
      dispatch(getOtherUserProfile(user.token, parseInt(pathend)));
      setIsuser(false);
    } else {
      dispatch(getProfile(user.token));
      setIsuser(true);
    }
  }, [dispatch, location]);

  useEffect(() => {
    dispatch(getMyFeeds(user.token));

    setFormProfile({
      name: dataProfile?.name,
      birth: Number(moment.unix(dataProfile?.birth).format("YYYY-MM-DD")),
      gender: dataProfile?.gender,
      address: dataProfile?.address,
      phone: dataProfile?.phone,
      postcode: dataProfile?.postcode,
      short_bio: dataProfile?.short_bio,
    });
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearProfileState());
    };
  }, [dispatch]);

  //Handler untuk menangani proses

  const editProfileHandler = (e) => {
    formProfile.birth = moment(formProfile.birth).unix();
    formProfile.postcode = parseInt(formProfile.postcode);
    dispatch(updateProfile(formProfile, user.token));
    dispatch(getProfile(user.token));
    e.preventDefault();
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  };
  const uploadPhotoHandler = (e) => {};
  const updatePasswordHandler = (e) => {
    if (formPassword !== null) {
      if (
        formPassword.password_lama !== "" ||
        formPassword.password_baru !== ""
      ) {
        dispatch(updatePassword(formPassword, user.token));
        alert("Password berhasil diubah, silahkan login kembali");
        dispatch(logout());
        window.location = "/login";
      } else {
        alert("Password tidak boleh kosong");
      }
    } else {
      alert("Password tidak boleh kosong");
    }
  };
  const contentBio = () => {
    return (
      <Card>
        <Card.Header as="h5">Short Bio</Card.Header>
        <Card.Body>
          <Card.Text>{dataProfile?.short_bio}</Card.Text>
        </Card.Body>
      </Card>
    );
  };
  const contentFeeds = () => {
    return (
      <Card style={{ width: "18rem", height: 300 }}>
        <Card.Header>Feeds</Card.Header>
        <div className="scroll-card">
          {dataFeeds?.map(function (item, i) {
            return (
              <Button
                onClick={() => history.push("feed/" + item.id)}
                className="text-left"
                key={i}
                variant="light"
              >
                <p>
                  <FaFileAlt /> {item.judul}
                </p>
                <p className="feed-calendar">
                  {moment.unix(item.waktu).format("DD-MM-YYYY")}
                </p>
              </Button>
            );
          })}
        </div>
      </Card>
    );
  };

  const contentEditProfile = () => {
    return (
      <Card>
        <Card.Body>
          <Form onSubmit={editProfileHandler}>
            <h5>Personal Info</h5>
            <Row className="margin-between">
              <Col md={6}>
                <Form.Label>Username</Form.Label>
                <InputGroupCustom
                  icon="@"
                  name="username"
                  onChange={updateProfiles}
                  placeholder={dataProfile?.username}
                  type="text"
                  value={dataProfile?.username}
                  disabled
                />
                <Form.Label>Name</Form.Label>
                <InputGroupCustom
                  icon={<FaUser />}
                  name="name"
                  onChange={updateProfiles}
                  type="text"
                  placeholder="Name"
                  defaultValue={dataProfile?.name}
                />
                <Form.Label>Date of Birth</Form.Label>
                <InputGroupCustom
                  icon={<FaCalendar />}
                  name="birth"
                  onChange={updateProfiles}
                  type="date"
                  placeholder="Date of Birth"
                  defaultValue={moment
                    .unix(dataProfile?.birth)
                    .format("YYYY-MM-DD")}
                />
              </Col>
              <Col md={6}>
                <Form.Label>Email</Form.Label>
                <InputGroupCustom
                  icon={<FaEnvelope />}
                  name="email"
                  onChange={updateProfiles}
                  placeholder={dataProfile?.email}
                  type="text"
                  defaultValue={dataProfile?.email}
                  disabled
                />
                <Form.Label>Gender</Form.Label>
                <InputGroupCustom
                  icon={<FaRestroom />}
                  name="gender"
                  onChange={updateProfiles}
                  type="text"
                  placeholder="Gender"
                  as="select"
                  defaultValue={dataProfile?.gender}
                  children={listGender}
                />
                <Form.Label>Phone</Form.Label>
                <InputGroupCustom
                  icon={<FaPhone />}
                  name="phone"
                  onChange={updateProfiles}
                  placeholder="Phone Number"
                  type="text"
                  defaultValue={dataProfile?.phone}
                />
              </Col>
            </Row>
            <h5>Location</h5>
            <Row>
              <Col md={6}>
                <Form.Label>Address</Form.Label>
                <InputGroupCustom
                  as="textarea"
                  icon={<FaMapMarkerAlt />}
                  name="address"
                  onChange={updateProfiles}
                  type="text"
                  placeholder="Address"
                  defaultValue={dataProfile?.address}
                />
              </Col>
              <Col md={6}>
                <Form.Label>Postal Code</Form.Label>
                <InputGroupCustom
                  icon={<FaMapMarkerAlt />}
                  name="postcode"
                  onChange={updateProfiles}
                  type="text"
                  placeholder="Postal Code"
                  defaultValue={dataProfile?.postcode}
                />
              </Col>
            </Row>
            <h5>More About You</h5>
            <Row className="margin-between">
              <Col md={12}>
                <Form.Label>Short Bio</Form.Label>
                <InputGroupCustom
                  as="textarea"
                  icon={<FaIdCard />}
                  name="short_bio"
                  onChange={updateProfiles}
                  type="text"
                  placeholder="Bio"
                  defaultValue={dataProfile?.short_bio}
                />
              </Col>
            </Row>
            <Button type="submit" className="btn-primary">
              Update
            </Button>{" "}
          </Form>
        </Card.Body>
      </Card>
    );
  };

  const contentUploadPhoto = () => {
    return (
      <Card>
        <Row>
          <Card.Body>
            <Col md={11}>
              <p className="text-style">
                Your profile photo will be used on your profile and throughout
                the site. If there is a Gravatar associated with your account
                email we will use that, or you can upload an image from your
                computer, but please note that there is a 500Kb file size limit.
              </p>
              <p className="text-style">
                Click below to select a JPG, GIF or PNG format photo from your
                computer and then click 'Upload Image' to proceed.
              </p>
            </Col>
            <Col md={6}>
              <Form className="form-upload" onSubmit={uploadPhotoHandler}>
                <Form.File
                  id="browse-photo"
                  label="Select Photo"
                  custom
                  style={{ marginBottom: "10px" }}
                />
                <Button type="submit" className="btn-primary">
                  Upload
                </Button>{" "}
              </Form>
            </Col>
          </Card.Body>
        </Row>
      </Card>
    );
  };

  const contentUpdatePassword = () => {
    return (
      <Card>
        <Card.Body>
          <Form onSubmit={updatePasswordHandler}>
            <Form.Row>
              <Col md={6}>
                <Form.Label>Password Lama</Form.Label>
                <InputGroupCustom
                  icon={<FaKey />}
                  name="password_lama"
                  onChange={updatePasswords}
                  type="password"
                  placeholder="Old Password"
                />
              </Col>
              <Col md={6}>
                <Form.Label>Password Baru</Form.Label>
                <InputGroupCustom
                  icon={<FaKey />}
                  name="password_baru"
                  onChange={updatePasswords}
                  type="password"
                  placeholder="New Password"
                />
              </Col>
              <Button
                style={{ marginTop: "10px" }}
                type="submit"
                className="btn-primary"
              >
                Update
              </Button>{" "}
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
    {
      dataProfile
      ? (
        <Container
      fluid
      style={{ backgroundColor: "#F1F6F9", padding: 0, minHeight: 700 }}
    >
      {/*Navbar*/}
      <Container fluid style={{ backgroundColor: "#14274E" }}>
        <div
          className={`${!hiddenbar ? "collapse" : ""} navbar-collapse`}
          id="navbarsExample09"
        >
          {listMenu.map(function (item, i) {
            return (
              <a key={i} className="nav-link text-light" href="/{ item.link }">
                {item.name}
              </a>
            );
          })}
        </div>
      </Container>
      {/*Container atas */}
      <Container fluid>
        <Row className="profile-container">
          <Col md={1}></Col>
          <Col md={6}>
            <Row>
              <Col md={1}></Col>
              <Col md={2}>
                <Image
                  src={profileimg}
                  alt="profile"
                  roundedCircle
                  style={{ maxWidth: 60 }}
                />
              </Col>
              <Col md={6} className="personal-info">
                <h2>{dataProfile?.name}</h2>
                <p style={{ color: "grey" }}>@{dataProfile?.username}</p>
                <Row>
                  <Col md={6}>
                    <p style={{ color: "grey" }}>
                      <FaRestroom /> {dataProfile?.gender}
                    </p>
                    <p style={{ color: "grey" }}>
                      <FaPhone /> {dataProfile?.phone}
                    </p>
                  </Col>
                  <Col md={6}>
                    <p style={{ color: "grey" }}>
                      <FaCalendar />{" "}
                      {dataProfile?.birth && moment.unix(dataProfile?.birth).format("L")}
                    </p>
                    <p style={{ color: "grey" }}>
                      <FaMapPin /> {dataProfile?.postcode}
                    </p>
                  </Col>
                </Row>
                <br />
                <p style={{ color: "grey" }}>
                  <FaEnvelope /> {dataProfile?.email}
                </p>
                <p style={{ color: "grey" }}>
                  <FaMapMarkerAlt /> {dataProfile?.address}
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={2}>
            {isUser ? (
              <Button
                variant={showEdit === false ? "primary" : "secondary"}
                size="sm"
                onClick={() => setShowEdit(!showEdit)}
              >
                {showEdit === false ? "Edit Profile" : "Cancel"}
              </Button>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Container>
      {/*Container fungsi*/}
      <Container>
        <Row>
          {/*Menu Konten*/}
          {(showEdit === false) & isUser ? (
            <Col md={4} className="card-menu">
              {contentFeeds()}
            </Col>
          ) : (
            ""
          )}
          {showEdit === true ? (
            <Col md={12}>
              <Nav fill variant="tabs" defaultActiveKey={navKey}>
                {listNav.map(function (item, i) {
                  return (
                    <Nav.Item key={i}>
                      <Nav.Link
                        eventKey={item.key}
                        onClick={() => setKey(item.key)}
                      >
                        {item.name}
                      </Nav.Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
              {/*Menu Edit*/}
              {navKey === 1 ? (
                contentEditProfile()
              ) : // navKey === 2 ? contentUploadPhoto() :
              navKey === 3 ? (
                contentUpdatePassword()
              ) : (
                <div></div>
              )}
            </Col>
          ) : (
            <Col md={6}> {contentBio()}</Col>
          )}
        </Row>
      </Container>
    </Container>
      )
      : (<LoadingIndicator />)
    }
    </>
  );
};
