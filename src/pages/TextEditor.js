import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

import UniversalNavbar from "../components/UniversalNavbar";
import ActionBar from "../components/ActionBar";
import Toolbar from "../components/Toolbar";
import Editor from "../components/Editor";
import LivePreview from "../components/LivePreview";
import Game from "../components/Game";
import axios from 'axios';
import url from "../db.js"
import "./scss/TextEditor.css";
import "bootstrap/dist/css/bootstrap.min.css";


function TextEditor() {
// State
  const [user, updateUser] = useState({
    id:1,
    name:'Public User',
    documents:[] // Array of ObjectIds
  });  // ObjectId
  const [currentDoc, updateDoc] = useState({
    _id:1,
    title:'Document Name', // String
    text:'Insert Text Here',  // String
    lastSave: new Date().toTimeString() // Date
  });
  const [selectionObject, updateSelection] = useState({
    string:'',
    startIndex:0,
    endIndex:0
  });
 
// Selecting text in the editor
  function deconstructSelection(selection) {

    const editor = document.querySelector('#theText');
    // const editor = document.querySelector('textarea');
    if (selection.anchorNode===null) {
      updateSelection({
        string:null,
        startIndex:null,
        endIndex:null
      })
    } else if (selection.anchorNode===document.querySelector('#toolbar')) {
      return;  
    } else if (selection.anchorNode.parentNode===editor) {
      var anchor = selection.anchorOffset;
      var focus = selection.focusOffset;
      if (anchor > focus) {
        anchor = [focus, focus = anchor][0]
      }
      updateSelection({
        string:selection.toString(),
        startIndex:anchor,
        endIndex:focus
      });
    } else {
      updateSelection({
        string:'',
        startIndex:0,
        endIndex:0
      })
    }
  }

  async function saveDoc () {
    try {
      const config = {
        headers: {
            'Content-Type': 'application/json'
        }
      };
      var savedDoc;
      if (currentDoc._id===1) {
        const docWithoutId={
          "title":currentDoc.title,
          "text":currentDoc.text
        }
        const res = await axios.post(`${url}/api/docs`, docWithoutId, config);
        savedDoc = res.data.doc;
      } else {
        const res = await axios.put(`${url}/api/docs/${currentDoc._id}`, currentDoc, config);
        savedDoc = res.data;
      }
      console.log("newDoc", savedDoc);
      // updateDoc(savedDoc);
    } catch (err) {
        console.error(err.message);
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
        <Row id='header'>
          <UniversalNavbar 
            user={user} 
            updateUser={updateUser} 
          />
        {/* </Row> */}

        {/* <Row> */}
          {/* <Col> */}
            <ActionBar 
              user={user} 
              updateUser={updateUser} 
              currentDoc={currentDoc} 
              updateDoc={updateDoc} 
              url={url}
            />
          {/* </Col> */}
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
              url={url}
              saveDoc={saveDoc}
            />
          </Col>
          <Col sm={12} md={6}>
            <LivePreview text={currentDoc.text} />
          </Col>
        </Row>

        <Row id="save-row">
          <Col sm={12} md={6}>
            <Button 
              variant="secondary" 
              onClick={() => 
                saveDoc()
              }
            >
              Save
              </Button>
            <p>Last save at {currentDoc.lastSave}</p>

          </Col>
        </Row>
      </Container>

      <Container fluid={true} className="game__bg">
        <Row>
        <div>
          
        </div>
          {/* <p><strong>Title</strong>: {currentDoc.title} - 
          <strong>Text</strong>: {currentDoc.text} - 
          <strong>Last Save</strong>:{saveTime} - 
          <strong>Selection</strong>: <i>String:</i> {selectionObject.string}, <i>index1</i> {selectionObject.startIndex}, <i>index2</i> {selectionObject.endIndex}
          </p> */}
          <Game />
        </Row>
      </Container>
    </div>
  );
}

export default TextEditor;
