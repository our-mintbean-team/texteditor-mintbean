import React, { useEffect } from "react";
import {
  Nav,
  NavDropdown,
  Button,
  ButtonGroup,
  Dropdown,
} from "react-bootstrap";
//import ContentEditable from "react-contenteditable";
import {
  FaFileAlt,
  FaShareAlt,
  FaDesktop,
  FaPaintRoller,
  FaClone,
} from "react-icons/fa";
import axios from 'axios';
import url from "../db.js";
import swal from "@sweetalert/with-react";


var hasLoaded = false;

// async function getDocs () {
//   axios.get(`${url}/api/docs`)
//     .then(function (response) {
//       console.log("This is the results of the DB call", response);
//       return response.data;
      
//       // handle success
//       console.log("this is the response:", response);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log("this is the error", error);
//     })
//     .then(function (response) {
//       console.log("This is the funtion after .then")
//       // always executed
//     });
//   }


export default function ActionBar({ user, currentDoc, updateDoc, updateUser }) {  
  
  // const documents = user.documents;


  // if documents
  // useEffect({
  //   const docContainer = document.querySelector('#doc-container');
  //   var btn = document.createElement("BUTTON");   // Create a <button> element
  //   btn.innerHTML = "CLICK ME";                   // Insert text
  //   document.body.appendChild(btn);               // Append <button> to <body>
  //   = user.documents;
  // })


  async function getDocs () {
    try {
      const res = await axios.get(`${url}/api/docs`);
      const allDocuments = res.data;
      updateUser({
        ...user,
        documents:allDocuments
      });
      console.log(user);
      return user.documents.map(
        (document) => 
        <Dropdown.Item key={document._id}>{document.title}</Dropdown.Item>
      )
    } catch (err) {
        console.error(err.message);
        // res.status(500).send('Server Error')
    }
  }

  return (
    <Nav id="actionbar">
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic">
          <FaFileAlt />
          &nbsp;Documents&nbsp;
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item id="newDoc">New Doc</Dropdown.Item>
          <Dropdown.Divider id='#doc-container' />
            {getDocs()}
            
            {/* {console.log(typeof(documents))} */}
            {/* {console.log(documents)} */}


            {/* {
            (documents==undefined) ? 
            console.log("documents is empty")
            :

            documents.map((document) => 
              <Dropdown.Item key={document._id}>{document.title}</Dropdown.Item>)
            } */}
        {

          // useEffect( async () => {
          //     if (hasLoaded===false) {
          //       const mongoDocuments = await getDocs();
          //       console.log("This is mongoDocuments after the db call", mongoDocuments)
          //       await updateUser({
          //         ...user,
          //         documents:mongoDocuments
          //       })
          //       // await {
          //         console.log("This is user in actionbar", user);
          //         console.log("This is where documents is declared in actionbar", user.documents);
          //       // }
          //       hasLoaded = true;
          //     }
          //   })
          }
          
        </Dropdown.Menu>
      </Dropdown>
      <Nav.Item>
        <Button variant="secondary">
          <FaShareAlt />
          &nbsp; Share
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button
          variant="secondary"
          onClick={() => {
            swal(document.querySelector(".text-view").innerHTML);
          }}
        >
          <FaDesktop />
          &nbsp; Present
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button
          variant="secondary"
          onClick={() => {
            document.getElementById("main").style.backgroundImage =
              "url('https://picsum.photos/1920/1080/')";
          }}
        >
          <FaPaintRoller />
          &nbsp; Change Theme
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button
          variant="secondary"
          onClick={() => {
            swal({
              title: "You're not signed in!",
              text:
                "You need to log in or sign up in order to view all your docs.",
              icon: "error",
              button: "Log In / Sign Up",
            });
          }}
        >
          <FaClone />
          &nbsp; Make a Copy
        </Button>
      </Nav.Item>
    </Nav>
  );
}
