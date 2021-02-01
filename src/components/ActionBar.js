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

function DocNameEditor ({ currentDoc:{ id, title, text }, updateDoc }) {
  return (
    <ContentEditable
      id='theTitle'
      className="title__editor"
      html={title} // innerHTML of the editable div
      disabled={false} // use true to disable edition
      onChange={(e) => updateDoc({ 
        id, 
        title: e.target.value, 
        text,
        lastSave: Date.now() 
      })} // handle innerHTML change
    />
  );
};

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

      <DocNameEditor currentDoc={currentDoc} updateDoc={updateDoc} />
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
