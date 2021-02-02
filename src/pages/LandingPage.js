import React from "react";
import UniversalNavbar from "../components/UniversalNavbar";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Image,
} from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { IoMdConstruct } from "react-icons/io";
import swal from "sweetalert";
import "./scss/LandingPage.css";

//import zay from "../images/zay-headshot.jpg";
//import dan from "../images/dan-headshot.jpg";
//import dez from "../images/dez-headshot.jpg";
//import WalkingBook from "../images/walking-book.jpeg";

function LandingPage() {
  return (
    <div>
      <Container fluid={true} className="hero__container">
        <Row>
          <UniversalNavbar />
        </Row>
        <Row className="hero__row">
          <Col className="hero__img text-center">
            <h1>Alien vs Editor</h1>
            <h3>The open source editor for all</h3>
            <ButtonGroup>
              <Button
                pill
                variant="secondary"
                size="lg"
                onClick={() => {
                  swal("Get Started Today!");
                }}
              >
                Get Started
              </Button>
              <Button
                pill
                variant="secondary"
                size="lg"
                onClick={() => {
                  swal("Change Themes!");
                }}
              >
                Change Theme
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className="landing__container">
        <br />
        <br />
        <Row>
          <Col md={6}>
            <div className="feature__peak">
              <h2>Feature Peek</h2>
            </div>
            {/* <img src={IoMdConstruct} alt='' /> */}
            <div className="technologies">
              <div className="technologies__title">
                <IoMdConstruct size={24} />
                <h5>Built Using</h5>
              </div>
              <p>ReactJS</p>
              <p>NodeJS</p>
              <p>Express</p>
              <p>MongoDB</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="tech__right">
              <br />
              <br />
              <p className="px-4">
                This project was built by a team of hard-working, talented
                devs...Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ad dolores commodi reiciendis, libero nemo omnis ipsam nihil
                aliquam quia molestiae.
              </p>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={6}>
            <div className="technologies text-center">
              <h3>Who we are</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus repellendus necessitatibus inventore
                exercitationem, eligendi enim. Ipsam a veritatis sit sapiente?
              </p>
            </div>
          </Col>
          <Col sm={12} md={2} className="card__col">
            <div className="card__left">
              <h5>zaycationdev</h5>
              <Image src={"http://placehold.jp/100x100.png"} roundedCircle />
              <FaGithub size={32} />
              <Button block variant="success">
                View Profile
              </Button>
            </div>
          </Col>
          <Col sm={12} md={2} className="card__col">
            <div className="card__middle">
              <h5>Dez Pringle</h5>
              <Image src={"http://placehold.jp/100x100.png"} roundedCircle />
              <FaGithub size={32} />
              <Button block variant="success">
                View Profile
              </Button>
            </div>
          </Col>
          <Col sm={12} md={2} className="card__col">
            <div className="card__right">
              <h5>Dan Haas</h5>
              <Image src={"http://placehold.jp/100x100.png"} roundedCircle />
              <FaGithub size={32} />
              <Button block variant="success">
                View Profile
              </Button>
            </div>
          </Col>
        </Row>
        <br />
        <br />
      </Container>
    </div>
  );
}

export default LandingPage;
