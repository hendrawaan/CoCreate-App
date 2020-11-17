import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { logout } from "../../store/user";
export const NavApp = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const { navItems } = props;

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
        <Navbar.Brand href="/">DigiStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            {navItems
              .filter((item) => user || !item.isProtected)
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
            onClick={() =>
              user ? dispatch(logout()) : history.push("/login")
            }
          >
            {user ? "Logout" : "Login"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
