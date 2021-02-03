import React from "react";
import { Nav, NavDropdown, Button, ButtonGroup, Dropdown } from "react-bootstrap";
import ContentEditable from "react-contenteditable";
import {
  FaFileAlt,
  FaShareAlt,
  FaDesktop,
  FaPaintRoller,
  FaCommentMedical,
  FaClone,
} from "react-icons/fa";
import axios from 'axios';

export default function ActionBar({ documents, currentDoc, updateDoc }) {
  return (
    <Nav id="actionbar">
      <Dropdown as={ButtonGroup}>

        <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" >
          <FaFileAlt />&nbsp;Documents&nbsp;
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item id='newDoc'> 
            New Doc
          </Dropdown.Item>
          <Dropdown.Divider />
          {( documents.length>0 ) && documents.map(id => <Dropdown.Item key={id}>{id}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
      <Nav.Item>
        <Button variant="secondary">
          <FaShareAlt />
          &nbsp; Share
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="secondary">
          <FaDesktop />
          &nbsp; Present
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="secondary">
          <FaPaintRoller />
          &nbsp; Change Theme
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="secondary">
          <FaCommentMedical />
          &nbsp; Insert Comments
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="secondary">
          <FaClone />
          &nbsp; Make a Copy
        </Button>
      </Nav.Item>
    </Nav>
  );
}
