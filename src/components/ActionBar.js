import React from "react";
import {
  Nav,
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
import swal from "sweetalert";

export default function ActionBar({ documents, currentDoc, updateDoc }) {
  return (
    <Nav id="actionbar">
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic">
          <FaFileAlt />
          &nbsp;Documents&nbsp;
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item id="newDoc">New Doc</Dropdown.Item>
          <Dropdown.Divider />
          {documents.length > 0 &&
            documents.map((id) => <Dropdown.Item key={id}>{id}</Dropdown.Item>)}
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
