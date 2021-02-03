import React, { useState } from "react";
import swal from "sweetalert";
import { Navbar, Nav, Modal, Button, Form } from "react-bootstrap";
import { FaFileAlt, FaUserAstronaut } from "react-icons/fa";
import { GiAlienBug } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function UniversalNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" variant="dark" expand="md" className="navbar__container">
      <Link to="/">
        <Navbar.Brand>
          <GiAlienBug />
          &nbsp; Alien vs Editor
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/editor">Text Editor</Nav.Link>
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
          <Nav.Link onClick={handleShow}>
            <FaUserAstronaut />
          </Nav.Link>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Login to Your Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="email" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Login
              </Button>
            </Modal.Footer>
          </Modal>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
