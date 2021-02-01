import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

import zay from "../images/zay-headshot.jpg";
import dan from "../images/dan-headshot.jpg";

//import Header from "../components/Header";

import "./scss/About.css";

function About() {
  return (
    <Container fluid={true} className="about__container">
      <Row>
        <Col>
          <br />
          <br />
          <h3 className="text-center text-white">About the Devs</h3>
          <br />
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
          <Image src={zay} rounded />
        </Col>
        <Col
          xs={{ span: 12, order: 2 }}
          sm={12}
          md={{ order: 2 }}
          className="bio__col"
        >
          <div>
            <h5 className="text-white text-center">zaycation.dev</h5>
            <p className="text-white text-center">
              I love designing user interfaces for mobile and desktop devices.
              I’m naturally inquisitive and tenacious. My project management
              background means I have a methodical approach to problem
              solving—and my acerbic temperament makes working with me a joy.
            </p>
          </div>
          <div>
            <FaGithub size={32} color="white" />
            nbsp;
            <FaTwitter size={32} color="white" />
            nbsp;
            <FaLinkedin size={32} color="white" />
          </div>
        </Col>
      </Row>

      <br />
      <br />
      <Row>
        <Col
          xs={{ span: 12, order: 2 }}
          sm={12}
          md={{ order: 1 }}
          className="bio__col"
        >
          <div>
            <h5 className="text-white text-center">Dan Haas</h5>
            <p className="text-white text-center">
              I am a full-stack web developer living in Baltimore, MD. I am an
              innovative problem-solver, experienced builder, lifelong learner,
              versatile professional, and trustworthy teammate. My work has been
              praised as "fantastic," "very cohesive," and "FIREEEEEEEEE EMOJI".
            </p>
          </div>
          <div>
            <FaGithub size={32} color="white" />
            nbsp;
            <FaTwitter size={32} color="white" />
            nbsp;
            <FaLinkedin size={32} color="white" />
          </div>
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          sm={12}
          md={{ order: 2 }}
          className="image__col"
        >
          <Image src={dan} rounded />
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
          <Image src="https://via.placeholder.com/200" rounded />
        </Col>
        <Col
          xs={{ span: 12, order: 2 }}
          sm={12}
          md={{ order: 2 }}
          className="bio__col"
        >
          <div>
            <h5 className="text-white text-center">Dez Pringle</h5>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adip - | awaiting bio
              write up from Dez
            </p>
          </div>
          <div>
            <FaGithub size={32} color="white" />
            nbsp;
            <FaTwitter size={32} color="white" />
            nbsp;
            <FaLinkedin size={32} color="white" />
          </div>
        </Col>
      </Row>

      <br />
      <br />
    </Container>
  );
}

export default About;
