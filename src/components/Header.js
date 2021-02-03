import React from 'react';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaTextWidth, FaFileAlt, FaUserAstronaut } from 'react-icons/fa';
import { GrLogout } from 'react-icons/gr';
import swal from 'sweetalert';

function logoutModal() {
  swal('Logout on click');
}

function loginModal() {
  swal('Put Register/Login here');
}

export default function Header({ currentDoc, updateDoc, user }) {
  return (
    <Navbar bg='dark' variant='dark' expand='md' className='navbar__container'>
      <Navbar.Brand href='/'>
        <FaTextWidth />
        &nbsp; Alien vs Editor
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/about'>About</Nav.Link>
        </Nav>

        <Nav className='ml-auto'>
          <Nav.Link href='/'>
            <FaFileAlt />
          </Nav.Link>
          {user ? (
            <>
              <p>Hi {user.name}</p>
              <Button variant='secondary' onClick={() => logoutModal()}>
                <GrLogout /> Logout
              </Button>
            </>
          ) : (
            <Button variant='secondary' onClick={() => loginModal()}>
              <FaUserAstronaut /> Login/Register
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
