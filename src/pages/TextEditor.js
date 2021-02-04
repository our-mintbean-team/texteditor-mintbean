import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

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

// var hasLoaded = false;

// const getDocs = async () => {
//   try {
//       console.log("test");  
//       const res = await axios.get(`${url}/api/docs`);
//       console.log(res);
//       return res.data;
//   } catch (err) {
//       console.error(err.message);
//       // res.status(500).send('Server Error')
//   }
// }

// function getDocs () {
// axios.get(`${url}/api/docs`)
//   .then(function (response) {
//     console.log("This is the results of the DB call", response);
//     return response.data;
//     // handle success
//     console.log("this is the response:", response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log("this is the error", error);
//   })
//   .then(function (response) {
//     console.log("This is the funtion after .then")
//     // always executed
    
//   });
// }

function TextEditor() {
// State
  const [user, updateUser] = useState({
    id:1,
    name:'Public User',
    documents:[] // Array of ObjectIds
  });  // ObjectId
  const [currentDoc, updateDoc] = useState({
    id:1, // ObjectId
    title:'Document Name', // String
    text:'Insert Text Here',  // String
    lastSave: new Date() // Date
  });
  const [selectionObject, updateSelection] = useState({
    string:'',
    startIndex:0,
    endIndex:0
  });

  // useEffect( async () => {
  //   if (hasLoaded===false) {
  //     await updateUser({
  //       ...user,
  //       documents:getDocs()
  //     })
  //     hasLoaded = true;
  //   }
  // })

  // const mongoDocs = getDocs();
  // updateUser({
  //   ...user,
  //   documents:mongoDocs
  // })

  var saveTime = currentDoc.lastSave.toTimeString();

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
      updateSelection({
        string:selection.toString(),
        startIndex:selection.anchorOffset,
        endIndex:selection.focusOffset
        // startIndex:editor.selectionStart,
        // endIndex:editor.selectionEnd
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
              user={user} 
              updateUser={updateUser} 
              currentDoc={currentDoc} 
              updateDoc={updateDoc} 
              url={url}
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
              url={url}
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
          <strong>Last Save</strong>:{saveTime} - 
          <strong>Selection</strong>: <i>String:</i> {selectionObject.string}, <i>index1</i> {selectionObject.startIndex}, <i>index2</i> {selectionObject.endIndex}
          </p>
          <Game />
        </Row>
      </Container>
    </div>
  );
}

export default TextEditor;
