import React, { Component } from 'react'
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
} from 'react-bootstrap'

import {
    group,
} from "../../assets/images/";
import { 
    FaRegUserCircle,
} from "react-icons/fa";
import { 
    BiUserPlus,
} from "react-icons/bi";
import { 
    IoIosImages,
} from "react-icons/io";
import { 
    GoSmiley,
} from "react-icons/go";
import { 
    HiSearch,
} from "react-icons/hi";
import { 
    MdMoreVert,
} from "react-icons/md";

import './PageGroup.css'

export default class PageGroup extends Component {
    render() {
        // var styles ={"background-image": "../../assets/images/group/group.jpg"}
        return (
            <Container className="mt-2" bg="white">
                <Image src={group} style={{ height: '300px' , width: '100%' }} />
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
                    <div inline>
                    <div type="text" className="mr-sm-2" />
                    <Button variant="light"><HiSearch /></Button>
                    <Button variant="light"><MdMoreVert /></Button>
                    </div>
                </Navbar.Collapse>
                </Navbar>
                <Container>
                <Form className="mt-2">
                
                <Form.Row>
                    <Card.Header>
                    <Col sm={12}>
                        <Form inline>
                        <FaRegUserCircle style={{width: '32', height: '32'}} className="mr-sm-1" />
                            <Form.Control as="textarea" placeholder="Apa yang anda pikirkan sekarang?" className=" ml-sm-2 mb-3 mt-3" style={{width: '320px'}} />
                        </Form>
                    <Button size="sm" variant="outline-none-dark" className="lite-title mr-sm-1"><IoIosImages />Foto/Video</Button>{' '}
                    <Button size="sm" variant="outline-none-dark" className="lite-title mr-sm-1"><BiUserPlus />Tandai Orang</Button>{' '}
                    <Button size="sm" variant="outline-none-dark" className="lite-title"><GoSmiley />Perasaan/Aktivitas</Button>{' '}
                    </Col>
                    </Card.Header>
                    <Col>
                    <Col>
                    <Form.Control size="lg" placeholder="Tentang" disabled className="mt-2" />
                    </Col>
                    </Col>
                </Form.Row>
                </Form>
                    </Container>
            </Container>
        )
    }
}
