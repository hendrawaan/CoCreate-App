import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBCol, MDBFormInline, MDBBtn, MDBNavbarToggler, MDBNavbar, MDBCollapse, MDBNavbarNav } from
"mdbreact";


class Header extends Component {
state = {
collapsed: true
}

handleTogglerClick = () => {
this.setState({
    collapsed: !this.state.collapsed
});
}

handleNavbarClick = () => {
this.setState({
    collapsed: true
});
}

render() {
return (
    <MDBCol md="12">
    <MDBNavbar color="unique-color-dark" className="text-white" dark expand="md">
        <div>
            <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                alt=""
                className="avatar z-depth-2"
            />
        </div>
        <h5 className="m-3">Hallo, Admin</h5>
        <MDBNavbarToggler onClick={this.handleTogglerClick} />
        <Router>
        <MDBCollapse isOpen={this.state.collapsed} navbar>
            <MDBNavbarNav right onClick={this.handleNavbarClick}>
            <MDBFormInline className="md-form mr-auto m-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" color="white" aria-label="Search" />
                <MDBBtn outline color="white" size="sm" type="submit" className="mr-auto">
                Search
                </MDBBtn>
            </MDBFormInline>
            </MDBNavbarNav>
        </MDBCollapse>
        </Router>
    </MDBNavbar>
    </MDBCol>
    );
}
}

export default Header;