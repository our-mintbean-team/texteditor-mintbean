import React from 'react';
import { Button, ButtonGroup, Card, CardDeck, Navbar } from 'react-bootstrap';
import WalkingBook from '../images/walking-book.jpeg';
import './scss/LandingPage.css';

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
      <div className='row'>
        <div className='col-md-5'>
          <h2>Feature Peak</h2>
        </div>
        <div className='col-md-5'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            quos quam ea architecto porro modi exercitationem aut quidem!
            Maxime, quibusdam!
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-5'>
          <h3>Who we are</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus repellendus necessitatibus inventore exercitationem,
            eligendi enim. Ipsam a veritatis sit sapiente?
          </p>
        </div>
        <div className='col-md-5 d-flex'>
          <CardDeck>
            <Card>
              <Card.Img />
              <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique nostrum ratione quia sequi nisi tempora?
                </Card.Text>
                <Button>View Profile</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img />
              <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique nostrum ratione quia sequi nisi tempora?
                </Card.Text>
                <Button>View Profile</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img />
              <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique nostrum ratione quia sequi nisi tempora?
                </Card.Text>
                <Button>View Profile</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
