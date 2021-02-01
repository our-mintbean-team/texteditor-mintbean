import React from "react";
import ContentEditable from "react-contenteditable";
import { Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaTextWidth, FaFileAlt, FaUserAstronaut } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import swal from 'sweetalert';


function logoutModal () {
  swal('Logout on click')
}

function loginModal () {
  swal('Put Register/Login here')
}

function DocNameEditor ({ currentDoc:{ id, title, text }, updateDoc }) {
  return (
    <ContentEditable
      id='theTitle'
      className="title__editor"
      html={title} // innerHTML of the editable div
      disabled={false} // use true to disable edition
      onChange={(e) => updateDoc({ 
        id, 
        title: e.target.value, 
        text,
        lastSave: Date.now() 
      })} // handle innerHTML change
    />
  );
};

export default function Header({ currentDoc, updateDoc, user }) {
  const { id, 
    title, 
    text, 
    lastSave
  } = currentDoc;

  return (
    <Navbar bg="dark" variant="dark" expand="md" className="navbar__container">
      <Navbar.Brand href="/">
        <FaTextWidth />
        Text Editor
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Recent Docs" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">New Doc</NavDropdown.Item>
            <NavDropdown.Divider />
            {( user.documents.length>0 ) && user.documents.map(id => <NavDropdown.Item>{id}</NavDropdown.Item>)}
          </NavDropdown>
        </Nav>
        <DocNameEditor currentDoc={currentDoc} updateDoc={updateDoc} />
        <Nav className="ml-auto">
          <Nav.Link href="/">
            <FaFileAlt />
          </Nav.Link>
          {user ? 
          (<>
            <p>Hi {user.name}</p>
            <Button  variant="secondary" onClick={ () => logoutModal() } >
              <GrLogout /> Logout
            </Button>
          </>)
          :
          (<Button  variant="secondary" onClick={ () => loginModal() } >
            <FaUserAstronaut /> Login/Register
          </Button>)
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
