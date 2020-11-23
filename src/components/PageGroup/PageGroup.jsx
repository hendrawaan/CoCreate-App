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
    CgProfile,
} from "react-icons/cg";
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

import './PageGroup.css'

export default class PageGroup extends Component {
    render() {
        // var styles ={"background-image": "../../assets/images/group/group.jpg"}
        return (
            <Container Fluid className="mt-2">
                <Image src={group} fluid style={{ height: '300px' , width: '100%' }} />
                <h5>Nama Group</h5>
                <p>Privasi Group. 1 anggota</p>
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
                    <Button variant="outline-dark"><HiSearch /></Button>
                    </div>
                </Navbar.Collapse>
                </Navbar>
                <Container>
                <Form className="mt-2">
                
                <Form.Row>
                    <Card>
                    <Col sm={12}>
                        <Col>
                        <CgProfile />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Apa yang anda pikirkan sekarang? "  className="mb-3 mt-3" />
                        </Col>
                    <Button size="sm" variant="outline-none-dark"><IoIosImages />Foto/Video</Button>{' '}
                    <Button size="sm" variant="outline-none-dark"><BiUserPlus />Tandai Orang</Button>{' '}
                    <Button size="sm" variant="outline-none-dark"><GoSmiley />Perasaan/Aktivitas</Button>{' '}
                    </Col>
                    </Card>
                    <Col>
                    <Form.Control size="lg" placeholder="Tentang" disabled className="mt-2" />
                    </Col>
                </Form.Row>
                </Form>
                    </Container>
            </Container>
        )
    }
}
