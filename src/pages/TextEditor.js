import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

import UniversalNavbar from "../components/UniversalNavbar";
import ActionBar from "../components/ActionBar";
import Toolbar from "../components/Toolbar";
import Editor from "../components/Editor";
import Game from "../components/Game";
import axios from 'axios';
import url from "../db.js"
import "./scss/TextEditor.css";
import "bootstrap/dist/css/bootstrap.min.css";


function TextEditor() {
// State
  const [timeOfSave, updateSaveTime] = useState("unsaved");
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
          "text":currentDoc.text,
          "lastSave":new Date().toTimeString()
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

            <ActionBar 
              user={user} 
              updateUser={updateUser} 
              currentDoc={currentDoc} 
              updateDoc={updateDoc} 
              url={url}
            />

        </Row>

        <br />

        <Row id='editor-row'>
        <Game />

          <Col md={2}>
            <Toolbar 
              currentDoc={currentDoc} 
              updateDoc={updateDoc} 
              selectionObject={selectionObject}
            />
          </Col>
          <Col sm={12} md={8} >
          
            <Editor 
              currentDoc={currentDoc} 
              updateDoc={updateDoc} 
              selectionObject={selectionObject}
              url={url}
              saveDoc={saveDoc}
            />
            <div className="flex-row">
              <Button 
                variant="secondary" 
                onClick={() => {
                  saveDoc();
                  updateSaveTime(new Date().toTimeString());
                }}
              >
              Save
              </Button>
            <p>Last save at: {timeOfSave}</p>
            </div>
          </Col>
          <Col md={2}></Col>
      
        </Row>
      </Container>

    </div>
  );
}

export default TextEditor;
