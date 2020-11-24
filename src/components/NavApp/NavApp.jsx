import jwt_decode from "jwt-decode";
import React from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { logoSmall } from "../../assets/images";
import { logout } from "../../store/user";

export const NavApp = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  const { navItems } = props;
  const decodeToken = user ? jwt_decode(user.token) : false;

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
      sticky="top"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand href="/">
          <Image
            className="mx-3"
            src={logoSmall}
            alt="logo"
            style={{ height: 70 }}
          />
          CoCreate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            {decodeToken?.type_user === 1 && (
              <Nav.Link as={NavLink} exact to="/admin">
                Admin
              </Nav.Link>
            )}
            {navItems
              .filter(item => user || !item.isProtected)
              .map((item, index) => (
                <Nav.Link as={NavLink} exact to={item.link} key={index}>
                  {item.label}
                </Nav.Link>
              ))}
          </Nav>
          <Button
            variant="primary"
            size="sm"
            className="ml-3"
            onClick={() => {
              if (user) {
                dispatch(logout());
              }
              history.push("/login");
            }}
          >
            {user ? "Logout" : "Login"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
