import React, { useState, useEffect } from "react";
import {
  Image,
  Button,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Link,
  Form,
  FormControl,
  Row,
  Col,
  Card
} from "react-bootstrap";

import { group } from "../../assets/images/";
import { FaRegUserCircle } from "react-icons/fa";
import { BiUserPlus } from "react-icons/bi";
import { IoIosImages } from "react-icons/io";
import { GoSmiley } from "react-icons/go";
import { HiSearch } from "react-icons/hi";
import { MdMoreVert } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import Add from "./Add";
import "./Group.css";
import { useDispatch, useSelector } from "react-redux";

export function Group() {
  const [groupList, setGroupList] = useState([]);
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    fetch("http://kelompok6.dtstakelompok1.com/api/v1/group/user/login", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: user.token
      }
    })
      .then(res => res.json())
      .then(data => {
        setGroupList(data.data.group);
        console.log("grup list", data);
      });
  }, []);

  return (
    <Container fluid className="" bg="white">
      <Row>
        <Col md={3}>
          <div className="p-2">
            <Add />
          </div>
          <div className="p-2"></div>
          <div className="p-2">
            <Card style={{ width: "18rem", height: 300 }}>
              <Card.Header>My Group</Card.Header>
              <div className="scroll-card">
                {groupList.map((items, index) => (
                  <Button
                    // onClick={() => history.push("feed/" + item.id)}
                    className="text-left"
                    key={index}
                    variant="light"
                  >
                    <p>
                      <GrGroup /> {items.nama_group}
                    </p>
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </Col>
        <Col md={9}>
          <Image src={group} style={{ height: "300px", width: "100%" }} />
          <h5 className="head-title">Nama Group</h5>
          <p className="subhead-title">Privasi Group. 1 anggota</p>
          <hr></hr>
          <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#tentang">Tentang</Nav.Link>
                <Nav.Link href="#postingan">Postingan</Nav.Link>
                <Nav.Link href="#anggota">Anggota</Nav.Link>
                <Nav.Link href="#acara">Acara</Nav.Link>
              </Nav>
              <div inline="true">
                <div type="text" className="mr-sm-2" />
                <Button variant="light">
                  <HiSearch />
                </Button>
                <Button variant="light">
                  <MdMoreVert />
                </Button>
              </div>
            </Navbar.Collapse>
          </Navbar>
          <Container>
            <Form className="mt-2">
              <Form.Row>
                {/* <Card.Header> */}
                {/* <Col sm={12}> */}
                {/* <FaRegUserCircle
                        style={{ width: "32", height: "32" }}
                        className="mr-sm-1"
                      /> */}
                {/* <Form.Control
                        as="textarea"
                        placeholder="Apa yang anda pikirkan sekarang?"
                        className=" ml-sm-2 mb-3 mt-3"
                        style={{ width: "320px" }}
                      /> */}
                {/* <Button
                        size="sm"
                        variant="outline-none-dark"
                        className="lite-title mr-sm-1"
                      >
                        <IoIosImages />
                        Foto/Video
                      </Button>{" "}
                      <Button
                        size="sm"
                        variant="outline-none-dark"
                        className="lite-title mr-sm-1"
                      >
                        <BiUserPlus />
                        Tandai Orang
                      </Button>{" "}
                      <Button
                        size="sm"
                        variant="outline-none-dark"
                        className="lite-title"
                      >
                        <GoSmiley />
                        Perasaan/Aktivitas
                      </Button>{" "} */}
                {/* </Col> */}
                {/* </Card.Header> */}
                <Col>
                  <Col>
                    {/* <Form.Control
                        size="lg"
                        placeholder="Tentang"
                        disabled
                        className="mt-2"
                      /> */}
                  </Col>
                </Col>
              </Form.Row>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
