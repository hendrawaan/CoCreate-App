import React, { useRef, useEffect, useState } from "react";
import profileimg from "../../assets/images/profile-default.jpg";
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import {
  Container,
  Col,
  Row,
  Image,
  Card,
  ButtonGroup,
  FormControl,
  Form,
  Nav,
  Button
} from "react-bootstrap";
import {
  FaKey,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendar,
  FaRestroom,
  FaPhone,
  FaMapPin,
  FaBars,
  FaIdCard
} from "react-icons/fa";
import InputGroupCustom from "../../components/InputGroupCustom";
import { listGender, listNav, listMenu } from "./List";
import { getProfile, updatePassword, updateProfile } from "../../store/profile";
import { logout } from "../../store/user";
export const Profile = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.profile);
  const { user } = useSelector(state => state.user);

  const [search, setSearch] = useState("");

  const [navKey, setKey] = useState(1);
  const [formProfile, setFormProfile] = useState();
  const [formPassword, setFormPassword] = useState();

  const updateProfiles = e => {
    // setFormProfile({
    //   ...formProfile,
    //   [e.target.name]: e.target.value
    // });
  };
  const updatePasswords = e => {
    setFormPassword({
      ...formPassword,
      [e.target.name]: e.target.value
    });
  };
  //edit state
  // const [changeName, setChangeName] = useState(name);
  // const [changeGender, setChangeGender] = useState(gender);
  // const [changeDob, setChangeDob] = useState(dob);
  // const [changePhone, setChangePhone] = useState(phone);
  // const [changePostalcode, setChangePostalcode] = useState(postalcode);
  // const [changeAddress, setChangeAddress] = useState(address);
  // const [changeBio, setChangeBio] = useState(bio);
  // const [oldPass, setOldPass] = useState("");
  // const [newPass, setNewPass] = useState("");
  //other state
  const [hiddenbar, setHiddenBar] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  useEffect(() => {
    if (user) {
      dispatch(getProfile(user.token));
    }
  }, [dispatch, user]);

  useEffect(() => {
    console.log(profile?.user);
  }, [profile]);
  const dataProfile = profile?.user;
  const [username, setUsername] = useState(dataProfile?.username);
  const [email, setEmail] = useState(dataProfile?.email);
  const [name, setName] = useState(dataProfile?.name);
  const [gender, setGender] = useState(dataProfile?.gender);
  const [tanggal_lahir, setDob] = useState(dataProfile?.birth);
  const [phone, setPhone] = useState(dataProfile?.phone);
  const [post_code, setPostalCode] = useState(dataProfile?.post_code);
  const [address, setAddress] = useState(dataProfile?.address);
  const [short_bio, setBio] = useState(dataProfile?.short_bio);
  //Handler untuk menangani proses
  const logoutHandler = () => {
    dispatch(logout());
    window.location = "/login";
  };
  const editProfileHandler = e => {
    console.log(
      name,
      username,
      email,
      address,
      tanggal_lahir,
      gender,
      phone,
      post_code,
      short_bio
    );
    let profiles = [];
    profiles.push({
      name: name,
      // username: username,
      // email: email,
      // address: address,
      tanggal_lahir: new Date(tanggal_lahir).getTime() / 1000,
      gender: gender,
      phone: phone,
      post_code: post_code,
      short_bio: short_bio
    });
    dispatch(updateProfile(profiles, user.token));
    //dispatch(getProfile(user.token));
  };
  const uploadPhotoHandler = e => {};
  const updatePasswordHandler = e => {
    e.preventDefault();
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
  const contentMenu = () => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Header>Menu</Card.Header>
        <ButtonGroup vertical>
          {listMenu.map(function(item, i) {
            return (
              <Button className="text-left" key={i} variant="light">
                {item.icon} {item.name}
              </Button>
            );
          })}
        </ButtonGroup>
      </Card>
    );
  };

  const contentEditProfile = () => {
    return (
      <Card>
        <Card.Body>
          <Form onClick={editProfileHandler}>
            <h5>Personal Info</h5>
            <Form.Row className="margin-between">
              <Col md={6}>
                <Form.Label>Username</Form.Label>
                <InputGroupCustom
                  icon="@"
                  // name="username"
                  onChange={e => setUsername(e.target.value)}
                  placeholder={dataProfile?.username}
                  type="text"
                  value={dataProfile?.username}
                  disabled
                />
                <Form.Label>Name</Form.Label>
                <InputGroupCustom
                  icon={<FaUser />}
                  // name="name"
                  onChange={e => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  defaultValue={dataProfile?.name}
                />
                <Form.Label>Date of Birth</Form.Label>
                <InputGroupCustom
                  icon={<FaCalendar />}
                  // name="tanggal_lahir"
                  onChange={e => setDob(e.target.value)}
                  type="date"
                  placeholder="Date of Birth"
                  defaultValue={dataProfile?.birth}
                />
              </Col>
              <Col md={6}>
                <Form.Label>Email</Form.Label>
                <InputGroupCustom
                  icon={<FaEnvelope />}
                  // name="email"
                  onChange={e => setEmail(e.target.value)}
                  placeholder={dataProfile?.email}
                  type="text"
                  value={dataProfile?.email}
                  disabled
                />
                <Form.Label>Gender</Form.Label>
                <InputGroupCustom
                  icon={<FaRestroom />}
                  // name="gender"
                  onChange={e => setGender(e.target.value)}
                  type="text"
                  placeholder="Gender"
                  as="select"
                  defaultValue={dataProfile?.gender}
                  children={listGender}
                />
                <Form.Label>Phone</Form.Label>
                <InputGroupCustom
                  icon={<FaPhone />}
                  // name="phone"
                  onChange={e => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  type="text"
                  defaultValue={dataProfile?.phone}
                />
              </Col>
            </Form.Row>
            <h5>Location</h5>
            <Form.Row>
              <Col md={6}>
                <Form.Label>Address</Form.Label>
                <InputGroupCustom
                  as="textarea"
                  icon={<FaMapMarkerAlt />}
                  // name="address"
                  onChange={e => setAddress(e.target.value)}
                  type="text"
                  placeholder="Address"
                  defaultValue={dataProfile?.address}
                />
              </Col>
              <Col md={6}>
                <Form.Label>Postal Code</Form.Label>
                <InputGroupCustom
                  icon={<FaMapMarkerAlt />}
                  // name="post_code"
                  onChange={e => setPostalCode(e.target.value)}
                  type="text"
                  placeholder="Postal Code"
                  defaultValue={dataProfile?.postcode}
                />
              </Col>
            </Form.Row>
            <h5>More About You</h5>
            <Form.Row className="margin-between">
              <Col md={12}>
                <Form.Label>Short Bio</Form.Label>
                <InputGroupCustom
                  as="textarea"
                  icon={<FaIdCard />}
                  // name="short_bio"
                  onChange={e => setBio(e.target.value)}
                  type="text"
                  placeholder="Bio"
                  defaultValue={dataProfile?.short_bio}
                />
              </Col>
            </Form.Row>
            <Button type="button" className="btn-primary">
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
          {listMenu.map(function(item, i) {
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
                      <FaCalendar /> {dataProfile?.birth}
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
            <Button
              variant={showEdit === false ? "primary" : "secondary"}
              size="sm"
              onClick={() => setShowEdit(!showEdit)}
            >
              {showEdit === false ? "Edit Profile" : "Cancel"}
            </Button>{" "}
            {showEdit === false ? (
              <Button
                onClick={() => logoutHandler()}
                variant="secondary"
                size="sm"
              >
                Logout
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
          {showEdit === false ? (
            <Col md={4} className="card-menu">
              {contentMenu()}
            </Col>
          ) : (
            ""
          )}
          {showEdit === true ? (
            <Col md={12}>
              <Nav fill variant="tabs" defaultActiveKey={navKey}>
                {listNav.map(function(item, i) {
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
  );
};
