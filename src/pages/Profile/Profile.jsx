import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import moment from "moment";
import "./Profile.css";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Nav,
  Row
} from "react-bootstrap";
import {
  FaCalendar,
  FaEnvelope,
  FaIdCard,
  FaKey,
  FaMapMarkerAlt,
  FaMapPin,
  FaPhone,
  FaPlus,
  FaRestroom,
  FaTimes,
  FaUser
} from "react-icons/fa";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { profileimg } from "../../assets/images";
import { InputGroupCustom, LoadingIndicator } from "../../components";
import { SimpleFeed } from "../../components/SimpleFeed/SimpleFeed";
import {
  getFeedsCetegory,
  getMyFeeds,
  getMyFeedsCategory,
  getUserCategory,
  getUserFeeds,
  setMyFeedsCategory
} from "../../store/feed";
import {
  clearProfileState,
  getOtherUserProfile,
  getProfile,
  updatePassword,
  updateProfile
} from "../../store/profile";
import { logout } from "../../store/user";
import { listGender, listNav, listVariant } from "./List";
import "./Profile.css";

export const Profile = ({ location }) => {
  const pathend = location.pathname.split("/").pop();
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.profile);
  const { user } = useSelector(state => state.user);
  const { feed } = useSelector(state => state.feed);

  const [navKey, setKey] = useState(1);
  const [formProfile, setFormProfile] = useState({
    name: "",
    birth: 0,
    gender: "",
    address: "",
    phone: "",
    postcode: 0,
    short_bio: ""
  });
  const [formPassword, setFormPassword] = useState();
  const [formCategory, setFormCategory] = useState();
  const [filterCategory, setFilterCategory] = useState();
  const [isUser, setIsuser] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const updateProfiles = e => {
    let value = e.target.value;
    let name = e.target.name;

    setFormProfile({
      ...formProfile,
      [name]: value
    });
  };
  const updatePasswords = e => {
    let value = e.target.value;
    let name = e.target.name;
    setFormPassword({
      ...formPassword,
      [name]: value
    });
  };

  const dataFeeds = pathend !== "profile" ? feed?.userFeeds : feed?.myFeeds;
  const dataProfile =
    pathend !== "profile" ? profile?.otherUser : profile?.user;
  let dataMyCategory =
    pathend !== "profile" ? feed?.userCategory : feed?.myCategoryFeeds;
  let dataCategory = feed?.categoryFeeds;
  useEffect(() => {
    if (pathend !== "profile") {
      dispatch(getOtherUserProfile(user.token, parseInt(pathend)));
      dispatch(getUserFeeds(user.token, parseInt(pathend)));
      dispatch(getFeedsCetegory());
      dispatch(getUserCategory(user.token, parseInt(pathend)));
      setIsuser(false);
    } else {
      dispatch(getProfile(user.token));
      dispatch(getFeedsCetegory());
      dispatch(getMyFeedsCategory(user.token));
      dispatch(getMyFeeds(user.token));
      setIsuser(true);
    }
  }, [dispatch, location]);
  useEffect(() => {
    let x = [];
    let data;
    if (dataCategory) {
      dataCategory = feed?.categoryFeeds.filter(function(item) {
        for (var key in dataMyCategory) {
          if (
            item === undefined ||
            item.id_kategori == dataMyCategory[key].id_kategori
          )
            return false;
        }
        return true;
      });
      dataCategory.forEach(function(item) {
        x.push({
          value: String(item.id_kategori),
          key: item.nama_kategori,
          label: item.nama_kategori
        });
      });
      setFilterCategory(x);
    }
  }, [feed, location]);

  useEffect(() => {
    setFormProfile({
      name: dataProfile?.name,
      birth: Number(moment.unix(dataProfile?.birth).format("YYYY-MM-DD")),
      gender: dataProfile?.gender,
      address: dataProfile?.address,
      phone: dataProfile?.phone,
      postcode: dataProfile?.postcode,
      short_bio: dataProfile?.short_bio
    });
  }, [dispatch]);
  useEffect(() => {
    return () => {
      dispatch(clearProfileState());
    };
  }, [dispatch]);

  //Handler untuk menangani proses

  const editProfileHandler = e => {
    formProfile.birth = moment(formProfile.birth).unix();
    formProfile.postcode = parseInt(formProfile.postcode);
    dispatch(updateProfile(formProfile, user.token));
    dispatch(getProfile(user.token));
    e.preventDefault();
    setTimeout(function() {
      window.location.reload();
    }, 2000);
  };
  const selectedCategoryHandler = () => {
    if (filterCategory && formCategory) {
      let x = [];
      filterCategory.forEach(function(item) {
        for (let index = 0; index < formCategory.length; index++) {
          if (
            formCategory[index] === item.key &&
            formCategory[index] !== undefined
          ) {
            x.push({
              id_kategori: parseInt(item.value),
              follow: true
            });
          }
        }
      });
      x.forEach(function(item, i) {
        dispatch(setMyFeedsCategory(item, user.token));
      });
      setShowAddCategory(!showAddCategory);
    } else {
      alert("Silahkan pilih salah satu kategori");
    }
  };

  const deleteCategoryHandler = (id_kategori, nama_kategori_feed) => {
    dispatch(
      setMyFeedsCategory({ id_kategori, nama_kategori_feed }, user.token)
    );
  };

  const updatePasswordHandler = e => {
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

  const ContentFeeds = () => {
    return (
      <Col md={8} lg={7}>
        <h5 className="mb-4">My Feeds</h5>
        <ListGroup className="w-100">
          {dataFeeds?.map(function(item, i) {
            return <SimpleFeed key={i} {...item} />;
          })}
        </ListGroup>
      </Col>
    );
  };

  const contentCategory = () => {
    return (
      <Col md={{ span: 4 }} lg={{ span: 3, offset: 1 }}>
        <h5 className="mb-4">Interested</h5>

        {isUser && filterCategory && (
          <>
            <h6>Add Category</h6>
            <div className="d-flex flex-row">
              <DropdownMultiselect
                options={filterCategory}
                handleOnChange={selected => {
                  setFormCategory(selected);
                }}
                name="Category"
                className="flex-fill"
                placeholderMultipleChecked="Selected"
              />
              <Button
                onClick={() => selectedCategoryHandler()}
                variant="primary"
              >
                <FaPlus />
              </Button>
            </div>
          </>
        )}

        {dataMyCategory && (
          <>
            <h6 className="mt-3">Followed</h6>

            {dataMyCategory.map((item, i) => {
              return (
                <Badge
                  className="m-1"
                  variant={
                    listVariant[Math.floor(Math.random() * listVariant.length)]
                  }
                  key={i}
                  pill
                >
                  {item.nama_kategori_feed}

                  {isUser && (
                    <FaTimes
                      className="ml-2"
                      onClick={() =>
                        deleteCategoryHandler(
                          item.id_kategori,
                          item.nama_kategori_feed
                        )
                      }
                    />
                  )}
                </Badge>
              );
            })}
          </>
        )}
      </Col>
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
      {dataProfile ? (
        <Container className="vh-fit vw-100 mt-5 pb-5">
          <Row>
            <Col md={{ span: 8, offset: 1 }}>
              <Row>
                <Col md={2}>
                  <Image
                    src={profileimg}
                    alt="profile"
                    roundedCircle
                    style={{ maxWidth: 60 }}
                  />
                </Col>
                <Col md={8} className="personal-info">
                  <h2>{dataProfile?.name}</h2>
                  <h4 className="profile-text">@{dataProfile?.username}</h4>
                  <h5 className="mt-4">Profile</h5>
                  <Row>
                    <Col md={6}>
                      <p className="profile-text">
                        <FaRestroom className="mr-2" /> {dataProfile?.gender}
                      </p>
                      <p className="profile-text">
                        <FaPhone className="mr-2" /> {dataProfile?.phone}
                      </p>
                    </Col>
                    <Col md={6}>
                      <p className="profile-text">
                        <FaCalendar className="mr-2" />
                        {dataProfile?.birth &&
                          moment.unix(dataProfile?.birth).format("L")}
                      </p>
                      <p className="profile-text">
                        <FaEnvelope className="mr-2" /> {dataProfile?.email}
                      </p>
                    </Col>
                  </Row>
                  <p className="profile-text mt-2">
                    <FaMapPin className="mr-2" /> {dataProfile?.postcode}
                  </p>
                  <p className="profile-text">
                    <FaMapMarkerAlt className="mr-2" /> {dataProfile?.address}
                  </p>
                  <h5 className="mt-4">Short Bio</h5>
                  <i>{dataProfile?.short_bio}</i>
                </Col>
              </Row>
            </Col>

            <Col md={2}>
              {isUser && (
                <Button
                  variant={showEdit === false ? "primary" : "secondary"}
                  size="sm"
                  onClick={() => setShowEdit(!showEdit)}
                >
                  {showEdit === false ? "Edit Profile" : "Cancel"}
                </Button>
              )}
            </Col>
          </Row>

          <Row className="mt-5">
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

                {navKey === 1
                  ? contentEditProfile()
                  : navKey === 3 && contentUpdatePassword()}
              </Col>
            ) : (
              <>
                {contentCategory()}
                <ContentFeeds />
              </>
            )}
          </Row>
        </Container>
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
};
