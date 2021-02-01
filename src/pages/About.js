import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

import AboutNavbar from "../components/AboutNavbar";

import zay from "../images/zay-headshot.jpg";
import dan from "../images/dan-headshot.jpg";

//import Header from "../components/Header";

import "./scss/About.css";

function About() {
  return (
    <Container fluid={true} className="about__container">
      <Row>
        <AboutNavbar />
      </Row>
      <Row>
        <Col>
          <br />
          <h3 className="text-center text-white">About the Devs</h3>
          <br />
        </Col>
      </Row>

      <br />
      <br />
      <Row>
        <Col
          xs={{ span: 12, order: 1 }}
          sm={12}
          md={{ order: 1 }}
          className="image__col"
        >
          <a
            href="https://zaycation.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={zay} rounded />
          </a>
        </Col>
        <Col
          xs={{ span: 12, order: 2 }}
          sm={12}
          md={{ order: 2 }}
          className="bio__col"
        >
          <div>
            <a
              href="https://zaycation.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="text-white text-center">zaycation.dev</h4>
            </a>
            <p className="text-white text-center">
              I love designing user interfaces for mobile and desktop devices.
              I’m naturally inquisitive and tenacious. My project management
              background means I have a methodical approach to problem
              solving—and my acerbic temperament makes working with me a joy.
            </p>
          </div>
          <div>
            <a
              href="https://github.com/zaycation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} color="white" />
            </a>
            <a
              href="https://twitter.com/zaycationdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={32} color="white" />
            </a>
            <a
              href="https://www.linkedin.com/in/isaiahthomas098/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={32} color="white" />
            </a>
          </div>
        </Col>
      </Row>

      <br />
      <hr />
      <br />
      <Row>
        <Col
          xs={{ span: 12, order: 2 }}
          sm={12}
          md={{ order: 1 }}
          className="bio__col"
        >
          <div>
            <a
              href="https://danzhaas.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5 className="text-white text-center">Dan Haas</h5>
            </a>
            <p className="text-white text-center">
              I am a full-stack web developer living in Baltimore, MD. I am an
              innovative problem-solver, experienced builder, lifelong learner,
              versatile professional, and trustworthy teammate. My work has been
              praised as "fantastic," "very cohesive," and "FIREEEEEEEEE EMOJI".
            </p>
          </div>
          <div>
            <a
              href="https://github.com/danzhaas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} color="white" />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={32} color="white" />
            </a>

            <a
              href="https://www.linkedin.com/in/danzhaas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={32} color="white" />
            </a>
          </div>
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          sm={12}
          md={{ order: 2 }}
          className="image__col"
        >
          <a
            href="https://danzhaas.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={dan} rounded />
          </a>
        </Col>
      </Row>

      <br />
      <hr />
      <br />
      <Row>
        <Col
          xs={{ span: 12, order: 1 }}
          sm={12}
          md={{ order: 1 }}
          className="image__col"
        >
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Image src="https://via.placeholder.com/200" rounded />
          </a>
        </Col>
        <Col
          xs={{ span: 12, order: 2 }}
          sm={12}
          md={{ order: 2 }}
          className="bio__col"
        >
          <div>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <h5 className="text-white text-center">Dez Pringle</h5>
            </a>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adip - | awaiting bio
              write up from Dez
            </p>
          </div>
          <div>
            <a
              href="https://github.com/n305oul93"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} color="white" />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={32} color="white" />
            </a>

            <a
              href="https://www.linkedin.com/in/dj-pringle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={32} color="white" />
            </a>
          </div>
        </Col>
      </Row>

      <br />
      <br />
    </Container>
  );
}

export default About;
