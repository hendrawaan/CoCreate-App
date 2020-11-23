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
    group
} from "../../assets/images/";

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
                    <Button variant="outline-success"></Button>
                    </div>
                </Navbar.Collapse>
                </Navbar>
                <Container>
                <Form className="mt-2">
                
                <Form.Row>
                    <Card>
                    <Col>
                    <Form.Control placeholder="Apa yang anda pikirkan sekarang?" />
                    <Button variant="primary">Primary</Button>{' '}
                    <Button variant="secondary">Secondary</Button>{' '}
                    <Button variant="success">Success</Button>{' '}
                    </Col>
                    </Card>
                    <Col>
                    <Form.Control placeholder="Tentang" />
                    </Col>
                </Form.Row>
                </Form>
                    </Container>
            </Container>
        )
    }
}
