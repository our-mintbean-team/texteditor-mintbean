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
import { Link } from "react-router-dom";

import zay from "../images/zay-headshot.jpg";
import dan from "../images/dan-headshot.jpg";
import dez from "../images/dez-headshot.jpg";

function LandingPage() {
  return (
    <div>
      <Container fluid={true} className="hero__container">
        <Row>
          <UniversalNavbar />
        </Row>
        <Row className="hero__row">
          <Col className="text-center" id="hero__img">
            <h1>Alien vs Editor</h1>
            <h3>The open source editor for all</h3>
            <ButtonGroup>
              <Link to="/editor">
                <Button pill variant="secondary">
                  Get Started
                </Button>
              </Link>
              <Button
                pill
                variant="secondary"
                onClick={() => {
                  document.getElementById("hero__img").style.backgroundImage =
                    "url('https://picsum.photos/1920/1080/')";
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
              <h3>What's Alien vs Editor?</h3>
              <p className="px-4">
                This project was created for a{" "}
                <a
                  href="https://www.mintbean.io/meets/817b12c6-cd0a-42a5-bac6-6d6311be7327"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mintbean Hackathon
                </a>
                . The theme for this Hackathon was to build your own rich text
                editor. The main requirements for this project are: a working
                toolbar, editor, file management, and basic authentication.
                Users can make edits in the text editor and incorrect spelling
                prompts the mistakes. The toolbar consists of basic functions
                like bold, italic, underline, etc. Each document can be titled,
                users can create new docs, etc.
              </p>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={6}>
            <div className="tech__right text-center">
              <br />
              <br />
              <h3>Who Are the Devs?</h3>
              <p className="px-3">
                This project was made by a small group of 3 hardworking devs
                from{" "}
                <a
                  href="https://www.nucamp.co/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Nucamp Coding Bootcamp!
                </a>{" "}
                We've given this project our all in attempts to learn some new
                technologies, expand our portfolio, and get some extra practice
                working as a team. We plan to create more projects together int
                he near future, so if you liked this one, feel free to follow us
                on github to see what we're working on next!
              </p>
            </div>
          </Col>
          <Col sm={12} md={2} className="card__col">
            <div className="card__left">
              <h5>zaycationdev</h5>
              <Image src={zay} roundedCircle />
              <a
                href="https://github.com/zaycation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={32} className="card__github" />
              </a>
              <Button block variant="success">
                <a
                  href="https://zaycation.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </Button>
            </div>
          </Col>
          <Col sm={12} md={2} className="card__col">
            <div className="card__middle">
              <h5>Dan Haas</h5>
              <Image src={dan} roundedCircle />
              <a
                href="https://danzhaas.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={32} className="card__github" />
              </a>
              <Button block variant="success">
                <a
                  href="https://danzhaas.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </Button>
            </div>
          </Col>
          <Col sm={12} md={2} className="card__col">
            <div className="card__right">
              <h5>Dez Pringle</h5>
              <Image src={dez} roundedCircle />
              <a
                href="https://github.com/n305oul93"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={32} className="card__github" />
              </a>
              <Button block variant="success">
                <a
                  href="http://djpringle.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
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
