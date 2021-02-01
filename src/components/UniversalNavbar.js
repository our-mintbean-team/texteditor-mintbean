import React from "react";
import swal from "sweetalert";
import { Navbar, Nav } from "react-bootstrap";
import { FaFileAlt, FaUserAstronaut } from "react-icons/fa";
import { GiAlienBug } from "react-icons/gi";

export default function UniversalNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="navbar__container">
      <Navbar.Brand href="/home">
        <GiAlienBug />
        &nbsp; Alien vs Editor
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Text Editor</Nav.Link>
          <Nav.Link href="/about">About the Devs</Nav.Link>
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
