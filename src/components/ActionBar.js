import React, { useState } from "react";
import {
  Nav,
  Button,
  ButtonGroup,
  Dropdown,
  Spinner
} from "react-bootstrap";
import {
  FaFileAlt,
  FaShareAlt,
  FaDesktop,
  FaPaintRoller,
  FaClone,
} from "react-icons/fa";
import url from "../db.js";
import swal from "@sweetalert/with-react";
import axios from 'axios';


export default function ActionBar({ user, updateDoc, updateUser }) {  

  async function newDoc () {
    try {
      const config = {
        headers: {
            'Content-Type': 'application/json'
        }
      };
      const initDoc = {
        "title":"New Document",
        "text":" "
      }
      const res = await axios.post(`${url}/api/docs`, initDoc, config);
      const newDoc = res.data.doc;
      console.log("newDoc", newDoc);
      updateDoc(newDoc);
    } catch (err) {
        console.error(err.message);
    }
}

  async function getDocs () {
      try {
        const res = await axios.get(`${url}/api/docs`);
        const allDocuments = res.data;
        updateUser({
          ...user,
          documents:allDocuments
        });
        return user.documents;
      } catch (err) {
          console.error(err.message);
      }
  }

  return (
    <Nav id="actionbar">
      <Dropdown as={ButtonGroup} onClick={() => getDocs()}>
        <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic">
          <FaFileAlt />
          &nbsp;Documents&nbsp;
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item id="newDoc" onClick={() => newDoc() } >New Doc</Dropdown.Item>
          <Dropdown.Divider id='#doc-container' />
            {
            user.documents.length === 0 ? 
            <Dropdown.Item><Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
            </Spinner></Dropdown.Item>
            :
            user.documents.map(
              (document) => 
              <Dropdown.Item key={document._id} onClick={() => updateDoc({...document}) } >{document.title}</Dropdown.Item>
            )
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
