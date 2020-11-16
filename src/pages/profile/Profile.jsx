import React, { Component, useState } from 'react'
import profile from '../../assets/images/profile-default.jpg'
import logo from '../../assets/images/logo.png'
import './Profile.css'
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
  NavItem,
  Navbar,
  Button,
} from "react-bootstrap";
import {
  FaHome, FaKey, FaList, FaUserFriends, FaUser,
  FaEnvelope, FaMapMarkerAlt, FaCalendar, FaRestroom,
  FaPhone, FaMapPin, FaBars
} from 'react-icons/fa';
import InputGroupCustom from '../../components/InputGroupCustom'
const listGender = [{ name: 'Male', key: 0 },
{ name: 'Female', key: 1 }]
const listNav = [{ name: "Edit Profile", key: 1 },
// { name: "Change Profile Picture", key: 2 },
{ name: "Update Password", key: 3 }]
const listMenu = [{ name: "Home", icon: <FaHome />, link: '' },
{ name: "List Project", icon: <FaList />, link: '' },
{ name: "Collaboration", icon: <FaUserFriends />, link: '' }]

const Profile = () => {

  const [search, setSearch] = useState('')
  const [username, setUserName] = useState('hendrawaan')
  const [email, setEmail] = useState('hendrawaan@gmail.com')
  const [name, setName] = useState('Arif Hendrawan')
  const [occupation, setOccupation] = useState('Universitas')
  const [gender, setGender] = useState('Male')
  const [dob, setDob] = useState('1998-07-29')
  const [phone, setPhone] = useState('08766621212')
  const [postalcode, setPostalCode] = useState('56678')
  const [address, setAddress] = useState('Jakarta Selatan')
  const [bio, setBio] = useState('Ini Adalah Bio dari Arif Hendrawan')
  const [navKey, setKey] = useState(1)
  const [pass, setPass] = useState('')
  //edit state
  const [changeName, setChangeName] = useState(name)
  const [changeOccupation, setChangeOccupation] = useState(occupation)
  const [changeGender, setChangeGender] = useState(gender)
  const [changeDob, setChangeDob] = useState(dob)
  const [changePhone, setChangePhone] = useState(phone)
  const [changePostalcode, setChangePostalcode] = useState(postalcode)
  const [changeAddress, setChangeAddress] = useState(address)
  const [changeBio, setChangeBio] = useState(bio)
  const [showEdit, setShowEdit] = useState(false)
  const [oldPass, setOldPass] = useState('')
  const [newPass, setNewPass] = useState('')
  //other state
  const [hiddenbar, setHiddenBar] = useState(false)
  //Handler sementara
  const editToggle = () => {
    setShowEdit(!showEdit)
  }
  const editProfileHandler = () => {

  }
  const uploadPhotoHandler = () => {

  }
  const updatePasswordHandler = () => {
    if (oldPass !== newPass) {
      alert("salah")
    } else {
      alert("benar")
    }
  }
  const contentBio = () => {
    return (<Card  >
      <Card.Header as="h5">Short Bio</Card.Header>
      <Card.Body>
        <Card.Text>
          {bio}
        </Card.Text>
      </Card.Body>
    </Card>)
  }
  const contentMenu = () => {
    return (<Card style={{ width: '18rem' }} >
      <Card.Header>Menu</Card.Header>
      <ButtonGroup vertical>
        {listMenu.map(function (item, i) {
          return <Button className="text-left" key={i} variant="light">{item.icon} {item.name}</Button>
        })}
      </ButtonGroup>
    </Card>)
  }

  const contentEditProfile = () => {
    return (
      <Card>
        <Card.Body>
          <Form onSubmit={editProfileHandler}>
            <h5>Personal Info</h5>
            <Form.Row className="margin-between">
              <Col md={6} >
                <Form.Label>Username</Form.Label>
                <InputGroupCustom icon="@" setFunc={setUserName} placeholder={username} type="text" value={username} disabled={true} />
                <Form.Label>Name</Form.Label>
                <InputGroupCustom icon={<FaUser />} setFunc={setChangeName} type="text" placeholder="Name" defValue={name} />
                <Form.Label>Date of Birth</Form.Label>
                <InputGroupCustom icon={<FaCalendar />} setFunc={setChangeDob} type="date" placeholder="Date of Birth" defValue={dob} />
                <Form.Label>Phone</Form.Label>
                <InputGroupCustom icon={<FaPhone />} setFunc={setChangePhone} placeholder="Phone Number" type="text" defValue={phone} />
              </Col>
              <Col md={6} >
                <Form.Label>Email</Form.Label>
                <InputGroupCustom icon={<FaEnvelope />} setFunc={setEmail} placeholder={email} type="text" value={email} disabled={true} />
                <Form.Label>Occupation</Form.Label>
                <InputGroupCustom icon={<FaUser />} setFunc={setChangeOccupation} type="text" placeholder="Occupation" defValue={occupation} />
                <Form.Label>Gender</Form.Label>
                <InputGroupCustom icon={<FaRestroom />} setFunc={setChangeGender} type="text" placeholder="Gender" as="select" defValue={gender} children={listGender} />
              </Col>
            </Form.Row>
            <h5>Location</h5>
            <Form.Row>
              <Col md={6} >
                <Form.Label>Address</Form.Label>
                <InputGroupCustom as="textarea" icon={<FaMapMarkerAlt />} setFunc={setChangeAddress} type="text" placeholder="Address" defValue={address} />
              </Col>
              <Col md={6}>
                <Form.Label>Postal Code</Form.Label>
                <InputGroupCustom icon={<FaMapMarkerAlt />} setFunc={setChangePostalcode} type="text" placeholder="Postal Code" defValue={postalcode} />
              </Col>
            </Form.Row>
            <h5>More About You</h5>
            <Form.Row className="margin-between">
              <Col md={12} >
                <Form.Label>Short Bio</Form.Label>
                <InputGroupCustom as="textarea" icon={<FaMapMarkerAlt />} value={bio} setFunc={setChangeBio} type="text" placeholder="Bio" defValue={bio} />
              </Col>
            </Form.Row>
            <Button type='submit' className='btn-primary' >Update</Button>{' '}
          </Form>
        </Card.Body>
      </Card>
    )
  }

  const contentUploadPhoto = () => {
    return (
      <Card>
        <Row>
          <Card.Body>
            <Col md={11}>
              <p className="text-style">Your profile photo will be used on your profile and throughout the site. If there is a Gravatar associated with your account email we will use that, or you can upload an image from your computer, but please note that there is a 500Kb file size limit.</p>
              <p className="text-style">Click below to select a JPG, GIF or PNG format photo from your computer and then click 'Upload Image' to proceed.</p>
            </Col>
            <Col md={6}>
              <Form className="form-upload" onSubmit={uploadPhotoHandler}>
                <Form.File
                  id="browse-photo"
                  label="Select Photo"
                  custom
                  style={{ marginBottom: "10px" }}
                />
                <Button type='submit' className='btn-primary' >Upload</Button>{' '}
              </Form>
            </Col>
          </Card.Body>
        </Row>
      </Card>
    )
  }

  const contentUpdatePassword = () => {
    return (
      <Card>
        <Card.Body>
          <Form onSubmit={updatePasswordHandler}>
            <Form.Row >
              <Col md={6}>
                <InputGroupCustom icon={<FaKey />} setFunc={setOldPass} type="password" placeholder="Old Password" />
              </Col>
              <Col md={6}>
                <InputGroupCustom icon={<FaKey />} setFunc={setNewPass} type="password" placeholder="New Password" />
              </Col>
              <Button style={{ marginTop: "10px" }} type='submit' className='btn-primary' >Update</Button>{' '}
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>)
  }
  return (
    <Container fluid style={{ backgroundColor: "#F1F6F9", padding: 0, minHeight: 700 }}>

      <Container fluid style={{ backgroundColor: "#14274E" }}>
        <Row className="nav-container">
          <Col md={4}>
            <Image src={logo} alt="logo" roundedCircle className='profile-login logo-instance' /></Col>
          <Col md={6} >
            <Form inline>
              <FaBars color="white" className="burger-button" onClick={() => setHiddenBar(!hiddenbar)} />
              <FormControl
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                style={{ width: "80%" }}
              />
            </Form>
          </Col>
          <Col md={2} className="logo-instance">
            <Button variant='outline-light '>
              <Image src={profile} alt="profile" roundedCircle className='profile-login' />
            </Button>
          </Col>
        </Row>
        <div className={`${!hiddenbar ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
          {listMenu.map(function (item, i) {
            return <a key={i} className="nav-link text-light" href='/{ item.link }' >{item.name}</a>
          })}
        </div>
      </Container>
      <Container fluid>
        <Row className="profile-container">
          <Col md={1}></Col>
          <Col md={6}>
            <Row>
              <Col md={1}></Col>
              <Col md={2}>
                <Image src={profile} alt="profile" roundedCircle style={{ maxWidth: 60, }} />
              </Col>
              <Col md={6} className="personal-info">
                <h2>{name}</h2>
                <p style={{ color: 'grey' }}>@{username}</p>
                <Row>
                  <Col md={6}>
                    <p style={{ color: 'grey' }}><FaRestroom /> {gender}</p>
                    <p style={{ color: 'grey' }}><FaPhone /> {phone}</p>
                  </Col>
                  <Col md={6}>
                    <p style={{ color: 'grey' }}><FaCalendar /> {dob}</p>
                    <p style={{ color: 'grey' }}><FaMapPin /> {postalcode}</p>
                  </Col>
                </Row>
                <br />
                <p style={{ color: 'grey' }}>Occupation: {occupation}</p>
                <p style={{ color: 'grey' }}><FaEnvelope /> {email}</p>
                <p style={{ color: 'grey' }}><FaMapMarkerAlt /> {address}</p>
              </Col>
            </Row>
          </Col>
          <Col md={2}>
            <Button variant={showEdit === false ? "primary" : "secondary"} size="sm" onClick={() => setShowEdit(!showEdit)}>{showEdit === false ? "Edit Profile" : "Cancel"}</Button>{' '}
            {showEdit === false ? <Button variant="secondary" size="sm">Logout</Button> : ""}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {showEdit === false ?
            <Col md={4} className="card-menu">
              {contentMenu()}
            </Col> : ""}
          {showEdit === true ?
            <Col md={12}>
              <Nav fill variant="tabs" defaultActiveKey={navKey}>
                {listNav.map(function (item, i) {
                  return (<Nav.Item key={i}>
                    <Nav.Link eventKey={item.key} onClick={() => setKey(item.key)}>{item.name}</Nav.Link>
                  </Nav.Item>)
                })}
              </Nav>
              {navKey === 1 ? contentEditProfile() :
                // navKey === 2 ? contentUploadPhoto() :
                navKey === 3 ? contentUpdatePassword() :
                  <div></div>}
            </Col>
            : <Col md={6}> {contentBio()}</Col>}
        </Row>
      </Container>

    </Container >
  )

}
export default Profile