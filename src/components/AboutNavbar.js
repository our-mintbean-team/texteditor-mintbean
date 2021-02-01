import React from "react";
import swal from "sweetalert";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaTextWidth, FaFileAlt, FaUserAstronaut } from "react-icons/fa";

export default function AboutNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="navbar__container">
      <Navbar.Brand href="/">
        <FaTextWidth />
        &nbsp; Alien vs Editor
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Live Editor</Nav.Link>
          <NavDropdown title="Recent Docs" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">New Doc</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Docname1</NavDropdown.Item>
            <NavDropdown.Item href="/">Docname2</NavDropdown.Item>
            <NavDropdown.Item href="/">Docname3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link
            onClick={() => {
              swal({
                title: "You're not signed in!",
                text:
                  "You need to log in or sign up in order to view all your docs.",
                icon: "error",
                button: "Log In / Sign Up",
              });
            }}
          >
            <FaFileAlt />
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              swal("Sign-Up / Login", {
                buttons: ["Gmail", "Github"],
              });
            }}
          >
            <FaUserAstronaut />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
