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

  const [user, updateUser] = useState({
    id:1,
    name:'Todd',
    documents:[
      'Docname 1',
      'Docname 2',
      'Docname 3'
    ] // Array of ObjectIds
  });  // ObjectId
  const [currentDoc, updateDoc] = useState({
    id:1, // ObjectId
    title:'Document Name', // String
    text:'Insert Text Here',  // String
    lastSave:Date.now() // Date
  });
  const [selectionObject, updateSelection] = useState('');


  // var mousedownTarget;
  // function getTheSelection(e) {
  //   const editor = document.querySelector('.main__editor');
  //   if (selectionObject.anchorNode===editor) {
  //     // if (mousedownTarget===editor) {
  //     updateSelection( window.getSelection() ) 
  //   }
  // } 


  return (

    <div>
      <Container 
        fluid={true} 
        className="main" 
        // onMouseDown={(e) => {mousedownTarget=e; console.log(e); console.log(mousedownTarget.target===document.querySelector('.main__editor') )}} 
        onMouseUp={() => updateSelection( window.getSelection() ) } 
      >
        <Row>
          <Header 
            currentDoc={currentDoc} 
            updateDoc={updateDoc} 
            user={user} 
            updateUser={updateUser} 
          />
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
            <Editor 
              currentDoc={currentDoc} 
              updateDoc={updateDoc} 
              // selectedText={selectionObject.toString()} 
              updateSelection={updateSelection} 
            />
          </Col>
          <Col sm={12} md={6}>
            <LivePreview text={currentDoc.text} />
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className="game__bg">
        <Row>
          <p><strong>Title</strong>: {currentDoc.title} - 
          <strong>Text</strong>: {currentDoc.text} - 
          <strong>Last Save</strong>:{currentDoc.lastSave} - 
          <strong>Selection</strong>: <i>String:</i> {selectionObject.toString()}, <i>index1</i> {selectionObject.anchorOffset}, <i>index2</i> {selectionObject.focusOffset}
          </p>
          <Game />
        </Row>
      </Container>
    </div>
  );
}

export default TextEditor;
