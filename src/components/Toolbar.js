
import React from "react";
import { ButtonGroup, Button, DropdownButton, Dropdown } from "react-bootstrap";
import {
  FaPalette,
  FaHighlighter,
  FaAlignLeft,
  FaAlignRight,
  FaAlignCenter,
  FaAlignJustify,
} from "react-icons/fa";
export default function Toolbar() {
  return (
    <ButtonGroup vertical id="toolbar">
      <Button variant="secondary">B</Button>
      <Button variant="secondary">I</Button>
      <Button variant="secondary">U</Button>
      <Button variant="secondary">12</Button>

      <DropdownButton
        as={ButtonGroup}
        title={FaAlignLeft}
        variant="secondary"
        id="bg-nested-dropdown"
      >
        <Dropdown.Item eventKey="1">
          <FaAlignLeft />
        </Dropdown.Item>
        <Dropdown.Item eventKey="2">
          <FaAlignCenter />
        </Dropdown.Item>
        <Dropdown.Item eventKey="3">
          <FaAlignRight />
        </Dropdown.Item>
        <Dropdown.Item eventKey="4">
          <FaAlignJustify />
        </Dropdown.Item>
      </DropdownButton>
      <Button variant="secondary">
        <FaPalette />
      </Button>
      <Button variant="secondary">
        <FaHighlighter />
      </Button>
    </ButtonGroup>
  );
}
