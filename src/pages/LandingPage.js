import React from 'react';
import Header from '../components/Header';
import { Button, ButtonGroup, Card, CardDeck, Navbar } from 'react-bootstrap';
import Dez from '../images/Pringle_Desmond.jpg';
import Dan from '../images/dan-headshot.jpg';
import Zay from '../images/zay-headshot.jpg';
import WalkingBook from '../images/walking-book.jpeg';
import { FaLinkedin } from 'react-icons/fa';
import { IoMdConstruct } from 'react-icons/io';
import './scss/LandingPage.css';

function LandingPage() {
  return (
    <div>
      <Header />
      {/* <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>Editor Name</Navbar.Brand>
      </Navbar> */}

      <div className='row m-3'>
        <div className='col-md-5'>
          <img src={WalkingBook} alt='walking book' />
        </div>
        <div className='col-md-5'>
          <h1>Editor Name</h1>
          <h3>The open source editor for all</h3>
          <ButtonGroup>
            <Button className='rounded-pill'>Get Sarted</Button>
            <Button className='rounded-pill ml-2'>Change Theme</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className='row m-3'>
        <div className='col-md-5'>
          <div className='w-75 m-auto border rounded bg-warning'>
            <h2>Feature Peek</h2>
            <div className='media'>
              {/* <img src={IoMdConstruct} alt='' /> */}
              <IoMdConstruct />
              <div className='media-body'>
                <h5>Built Using</h5>
                <ul>
                  <li>React</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-5'>
          <p>
            This project was built by a team of hard-working, talented
            devs...Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            dolores commodi reiciendis, libero nemo omnis ipsam nihil aliquam
            quia molestiae.
          </p>
        </div>
      </div>
      <div className='row m-3'>
        <div className='col-md-5'>
          <h3>Who we are</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus repellendus necessitatibus inventore exercitationem,
            eligendi enim. Ipsam a veritatis sit sapiente?
          </p>
        </div>
        <div className='col-md-5 d-flex'>
          <CardDeck className='w-100 text-center'>
            <Card className='p-3'>
              <Card.Img
                variant='top'
                src={Zay}
                className='h-50 rounded-circle'
              />
              <Card.Body>
                <Card.Title>Zaycation</Card.Title>
                {/* <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique nostrum ratione quia sequi nisi tempora?
                </Card.Text> */}
                <Button size='sm'>View Profile</Button>
                <p>
                  Linked
                  <FaLinkedin />
                </p>
              </Card.Body>
            </Card>
            <Card className='p-3'>
              <Card.Img
                variant='top'
                src={Dan}
                className='h-50 rounded-circle'
              />
              <Card.Body>
                <Card.Title>Dan Haas</Card.Title>
                {/* <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique nostrum ratione quia sequi nisi tempora?
                </Card.Text> */}
                <Button size='sm'>View Profile</Button>
                <p>
                  Linked
                  <FaLinkedin />
                </p>
              </Card.Body>
            </Card>
            <Card className='p-3'>
              <Card.Img
                variant='top'
                src={Dez}
                className='h-50 rounded-circle'
              />
              <Card.Body>
                <Card.Title>Dez</Card.Title>
                {/* <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique nostrum ratione quia sequi nisi tempora?
                </Card.Text> */}
                <Button size='sm'>View Profile</Button>
                <p>
                  Linked
                  <FaLinkedin />
                </p>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
