import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "../components/Header";
import ActionBar from "../components/ActionBar";
import Toolbar from "../components/Toolbar";
import Editor from "../components/Editor";
import LivePreview from "../components/LivePreview";
import Game from "../components/Game";

import "./scss/TextEditor.css";
import "bootstrap/dist/css/bootstrap.min.css";

function TextEditor() {
  return (
    <div>
      <Container fluid={true} className="main">
        <Row>
          <Header />
        </Row>

        <Row>
          <Col>
            <ActionBar />
          </Col>
        </Row>

        <br />

        <br />

        <Row>
          <Toolbar />
          <Col sm={12} md={6}>
            <Editor />
          </Col>
          <Col sm={12} md={6}>
            <LivePreview />
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className="game__bg">
        <Row>
          <Game />
        </Row>
      </Container>
    </div>
  );
}

export default TextEditor;
