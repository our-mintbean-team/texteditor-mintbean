import React from "react";
import ContentEditable from "react-contenteditable";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaTextWidth, FaFileAlt, FaUserAstronaut } from "react-icons/fa";

class DocNameEditor extends React.Component {
  constructor() {
    super();
    this.state = { html: "UNTITLED DOCUMENT" };
  }
  handleChange = (evt) => {
    this.setState({ html: evt.target.value });
  };
  render = () => {
    return (
      <ContentEditable
        id="doc-name"
        html={this.state.html} // innerHTML of the editable div
        disabled={false} // use true to disable edition
        onChange={this.handleChange} // handle innerHTML change
      />
    );
  };
}

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="navbar__container">
      <Navbar.Brand href="/">
        <FaTextWidth />
        &nbsp; Alien vs Editor
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/about">
            About
          </Nav.Link>
          <NavDropdown title="Recent Docs" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">New Doc</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Docname1</NavDropdown.Item>
            <NavDropdown.Item href="/">Docname2</NavDropdown.Item>
            <NavDropdown.Item href="/">Docname3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <DocNameEditor />
        <Nav className="ml-auto">
          <Nav.Link href="/">
            <FaFileAlt />
          </Nav.Link>
          <Nav.Link href="/">
            <FaUserAstronaut />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
