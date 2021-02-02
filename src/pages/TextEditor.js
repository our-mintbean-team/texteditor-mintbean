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
  const [selectionObject, updateSelection] = useState({
    string:'',
    startIndex:0,
    endIndex:0
  });


  function deconstructSelection(selection) {
    if (selection.anchorNode.parentElement===null) {
      updateSelection({
        string:null,
        startIndex:null,
        endIndex:null
      })
    } else if (selection.anchorNode===document.querySelector('.main__editor')) {
      var a = selection.anchorOffset;
      var b = selection.focusOffset;
      (a>b) && (b = [a, a = b][0]);
      updateSelection({
        string:selection.toString(),
        startIndex:a,
        endIndex:b
      })
    } else {
      updateSelection({
        string:'',
        startIndex:0,
        endIndex:0
      })
    }
  }


  return (

    <div>
      <Container 
        fluid={true} 
        className="main" 
        onMouseUp={() => { console.log(window.getSelection()); deconstructSelection( window.getSelection() )}} 
      >
        <Row>
          <Header 
            user={user} 
            updateUser={updateUser} 
          />
        </Row>

        <Row>
          <Col>
            <ActionBar 
              documents={user.documents} 
              currentDoc={currentDoc} 
              updateDoc={updateDoc} 
            />
          </Col>
        </Row>

        <br />

        <Row id='editor-row'>
          <Toolbar 
            currentDoc={currentDoc} 
            updateDoc={updateDoc} 
            selectionObject={selectionObject}
          />
          <Col sm={12} md={6}>
            <Editor 
              currentDoc={currentDoc} 
              updateDoc={updateDoc} 
              selectionObject={selectionObject}
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
          <strong>Selection</strong>: <i>String:</i> {selectionObject.string}, <i>index1</i> {selectionObject.startIndex}, <i>index2</i> {selectionObject.endIndex}
          </p>
          <Game />
        </Row>
      </Container>
    </div>
  );
}

export default TextEditor;
