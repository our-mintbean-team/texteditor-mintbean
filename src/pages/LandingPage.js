import React from 'react';
import Header from '../components/Header';
import { Button, ButtonGroup, Navbar } from 'react-bootstrap';
import WalkingBook from '../images/walking-book.jpeg';

function LandingPage() {
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>Editor Name</Navbar.Brand>
      </Navbar>

      <div className='row'>
        <div className='col-md-5'>
          <img src={WalkingBook} alt='walking book' />
        </div>
        <div className='col-md-5'>
          <h1>Editor Name</h1>
          <h3>The open source editor for all</h3>
          <ButtonGroup>
            <Button>Get Sarted</Button>
            <Button>Change Theme</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
