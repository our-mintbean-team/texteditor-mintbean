import React from 'react';
import UniversalNavbar from '../components/UniversalNavbar';
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Card,
  CardDeck,
  Image
} from 'react-bootstrap';
import WalkingBook from '../images/walking-book.jpeg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoMdConstruct } from 'react-icons/io';
import './scss/LandingPage.css';

import zay from '../images/zay-headshot.jpg';
import dan from '../images/dan-headshot.jpg';
import dez from '../images/dez-headshot.jpg';

function LandingPage() {
  return (
    <div>
      <Container fluid={true} className='hero__container'>
        <Row>
          <UniversalNavbar />
        </Row>
        <Row className='hero__row'>
          <Col className='hero__img'>
            <h1>Alien vs Editor</h1>
            <h3>The open source editor for all</h3>
            <ButtonGroup>
              <Button pill variant='secondary' size='lg'>
                Get Started
              </Button>
              <Button pill variant='secondary' size='lg'>
                Change Theme
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className='landing__container'>
        <Row>
          <Col md={1}></Col>
          <Col md={5}>
            <div className='feature__peak'>
              <h2>Feature Peek</h2>
            </div>
            {/* <img src={IoMdConstruct} alt='' /> */}
            <div className='technologies'>
              <div className='technologies__title'>
                <IoMdConstruct size={24} />
                <h5>Built Using</h5>
              </div>
              <p>ReactJS</p>
              <p>NodeJS</p>
              <p>Express</p>
              <p>MongoDB</p>
            </div>
          </Col>
          <Col md={5}>
            <div>
              <p className='tech__right'>
                This project was built by a team of hard-working, talented
                devs...Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ad dolores commodi reiciendis, libero nemo omnis ipsam nihil
                aliquam quia molestiae.
              </p>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row>
          <Col md={1}></Col>
          <Col md={5}>
            <h3>Who we are</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus repellendus necessitatibus inventore exercitationem,
              eligendi enim. Ipsam a veritatis sit sapiente?
            </p>
          </Col>
          <Col md={5} className='card__col'>
            <div className='card__left'>
              <h4>zaycationdev</h4>
              <Image src={'http://placehold.jp/100x100.png'} roundedCircle />
              <FaGithub size={32} />
              <Button block variant='success'>
                View Profile
              </Button>
            </div>
            <div className='card__middle'>
              <h4>Dez Pringle</h4>
              <Image src={'http://placehold.jp/100x100.png'} roundedCircle />
              <FaGithub size={32} />
              <Button block variant='success'>
                View Profile
              </Button>
            </div>
            <div className='card__right'>
              <h4>Dan Haas</h4>
              <Image src={'http://placehold.jp/100x100.png'} roundedCircle />
              <FaGithub size={32} />
              <Button block variant='success'>
                View Profile
              </Button>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
