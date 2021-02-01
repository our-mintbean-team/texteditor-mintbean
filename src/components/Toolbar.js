import React from "react";
import { ButtonGroup, Button, Dropdown } from "react-bootstrap";
import {
  FaFont,
  FaPalette,
  FaAlignLeft,
  FaAlignRight,
  FaAlignCenter,
  FaAlignJustify,
  FaLink,
} from "react-icons/fa";
import { AiOutlineFontSize } from "react-icons/ai";
export default function Toolbar() {
  return (
    <ButtonGroup vertical id="toolbar">
      <Button variant="secondary">
        <FaFont />
      </Button>
      <Button variant="secondary">
        <AiOutlineFontSize />
      </Button>
      <Button variant="secondary">B</Button>
      <Button variant="secondary">I</Button>
      <Button variant="secondary">U</Button>
      {/* <Button variant="secondary">12</Button> */}

      <Dropdown as={ButtonGroup}>
        <Button variant="secondary" id="bg-nested-dropdown">
          <FaAlignLeft />
        </Button>
        <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
        <Dropdown.Menu>
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
        </Dropdown.Menu>
      </Dropdown>

      <Button variant="secondary">
        <FaPalette />
      </Button>
      {/* <Button variant="secondary">
        <FaHighlighter />
      </Button> */}
      <Button variant="secondary">
        <FaLink />
      </Button>
    </ButtonGroup>
  );
}
