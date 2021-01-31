import React from "react";
import { Nav, Button } from "react-bootstrap";
import {
  FaShareAlt,
  FaDesktop,
  FaPaintRoller,
  FaCommentMedical,
  FaClone,
} from "react-icons/fa";

export default function ActionBar() {
  return (
    <Nav id="actionbar">
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
