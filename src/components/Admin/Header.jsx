import React from "react";
import { Navbar, Form, FormControl,Button } from 'react-bootstrap'


class Header extends React.Component {
render() {
return (
    <div>
        <div className=" container justify-content-between">
            <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Co Create</Navbar.Brand>
            <div className="">
                <Form inline >
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
                </Form>
                </div>
            </Navbar>
            
        </div>
    </div>
    );
}
}

export default Header;