import React, { useState } from "react";
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
  const [user, changeUser] = useState({
    id:1,
    documents:[
      1,
      2,
      3
    ] // Array of ObjectIds
  });  // ObjectId
  const [currentDoc, updateDoc] = useState({
    id:'1', // ObjectId
    title:'Document Name', // String
    text:'Insert Text Here',  // String
    lastSave:Date.now() // Date
  });

  return (
    <div>
      <Container fluid={true} className="main">
        <Row>
          <Header currentDoc={currentDoc} updateDoc={updateDoc}  />
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
            <Editor currentDoc={currentDoc} updateDoc={updateDoc} />
          </Col>
          <Col sm={12} md={6}>
            <LivePreview text={currentDoc.text} />
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className="game__bg">
        <Row>
          <p>Title: {currentDoc.title} - 
          Text: {currentDoc.text} - 
          Last Save:{currentDoc.lastSave} </p>
          <Game />
        </Row>
      </Container>
    </div>
  );
}

export default TextEditor;
