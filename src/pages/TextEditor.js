import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import UniversalNavbar from "../components/UniversalNavbar";
import ActionBar from "../components/ActionBar";
import Toolbar from "../components/Toolbar";
import Editor from "../components/Editor";
import LivePreview from "../components/LivePreview";
import Game from "../components/Game";

import "./scss/TextEditor.css";
import "bootstrap/dist/css/bootstrap.min.css";


function TextEditor() {
// State
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


// Selecting text in the editor
  function deconstructSelection(selection) {
    const editor = document.querySelector('textarea');
    if (selection.anchorNode===null) {
      updateSelection({
        string:null,
        startIndex:null,
        endIndex:null
      })
    } else if (selection.anchorNode===document.querySelector('#toolbar')) {
      return;  
    } else if (selection.anchorNode===document.querySelector('#text-editor')) {
      updateSelection({
        string:selection.toString(),
        startIndex:editor.selectionStart,
        endIndex:editor.selectionEnd
      })
    } else {
      updateSelection({
        string:'',
        startIndex:0,
        endIndex:0
      })
    }
  }

// the component itself
  return (
    <div>
      <Container 
        fluid={true} 
        id="main" 
        onMouseUp={() => { console.log(window.getSelection()); deconstructSelection( window.getSelection() )}} 
      >
        <Row>
          <UniversalNavbar 
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
