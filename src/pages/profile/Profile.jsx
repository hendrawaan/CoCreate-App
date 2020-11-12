import React, { Component, useState } from 'react'
import profile from '../../assets/images/profile-default.jpg'
import logo from '../../assets/images/logo192.png'
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
  Button
} from "react-bootstrap";

import { FaHome, FaList, FaUserFriends } from 'react-icons/fa';
const Profile = () => {
  const [search, setSearch] = useState('')
  const [navKey, setKey] = useState(1)
  const listNav = [{ name: "Edit Profile", key: 1 },
  { name: "Change Profile Picture", key: 2 },
  { name: "Update Password", key: 3 }]
  const listMenu = [{ name: "Home", icon: <FaHome />, link: '' },
  { name: "List Project", icon: <FaList />, link: '' },
  { name: "Collaboration", icon: <FaUserFriends />, link: '' }]
  const contentMenu = () => {
    return (<Card style={{ width: '18rem' }}>
      <Card.Header>Menu</Card.Header>
      <ButtonGroup vertical>
        {listMenu.map(function (item, i) {
          return <Button className="text-left" key={i} variant="light">{item.icon} {item.name}</Button>
        })}
      </ButtonGroup>
    </Card>)
  }
  const contentEditProfile = () => {
    return (<Card>test</Card>)
  }
  return (
    <Container fluid style={{ backgroundColor: "#F1F6F9", padding: 0, height: 2000 }}>
      <Container fluid style={{ backgroundColor: "#14274E" }}>
        <Row className="nav-container">
          <Col md={4}>
            <Image src={logo} alt="logo" roundedCircle className='profile-login logo-instance' /></Col>
          <Col md={4} >
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                style={{ width: "90%" }}
              />
            </Form>
          </Col>
          <Col md={2}></Col>
          <Col md={2}>
            <Image src={profile} alt="profile" roundedCircle className='profile-login' />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="profile-container">
          <Col md={1}></Col>
          <Col md={4}>
            <Row>
              <Col md={1}></Col>
              <Col md={2}>
                <Image src={profile} alt="profile" roundedCircle style={{ maxWidth: 60, }} />
              </Col>
              <Col md={3}>
                <h2>Name</h2>
                <h3>fullName</h3>
              </Col>
            </Row>
          </Col>
          <Col md={{ span: 3, offset: 3 }}>
            <Button variant="secondary">Logout</Button>{' '}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={4}>
            {contentMenu()}
          </Col>
          <Col md={6}>
            <Nav variant="tabs" defaultActiveKey={navKey}>
              {listNav.map(function (item, i) {
                return (<Nav.Item key={i}>
                  <Nav.Link eventKey={item.key} onClick={() => setKey(item.key)}>{item.name}</Nav.Link>
                </Nav.Item>)
              })}
            </Nav>
            {navKey === 1 ? contentEditProfile() : <div></div>}
          </Col>
        </Row>
      </Container>
    </Container >
  )

}
export default Profile