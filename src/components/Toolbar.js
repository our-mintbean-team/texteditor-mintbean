import React from "react";
import { ButtonGroup, Button, DropdownButton, Dropdown } from "react-bootstrap";
import {
  FaFont,
  FaPalette,
  FaHighlighter,
  FaAlignLeft,
  FaAlignRight,
  FaAlignCenter,
  FaAlignJustify,
  FaLink
} from "react-icons/fa";
import {
  AiOutlineFontSize
} from 'react-icons/ai';


export default function Toolbar() {

  return (
    <ButtonGroup vertical id="toolbar">
      <Button id='change-font' variant="secondary">
        <FaFont />
      </Button>
      <Button id='change-font-size' variant="secondary">
        <AiOutlineFontSize />
      </Button>
      <Button id='bold' variant="secondary">B</Button>
      <Button id='italics' variant="secondary">I</Button>
      <Button id='underline' variant="secondary">U</Button>
      {/* <Button variant="secondary">12</Button> */}

      <Dropdown as={ButtonGroup}>
        <Button 
          variant="secondary"
          id="bg-nested-dropdown"
          >
          <FaAlignLeft />
        </Button>
        <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
        <Dropdown.Menu>
          <Dropdown.Item id='align-left' eventKey="1">
            <FaAlignLeft />
          </Dropdown.Item>
          <Dropdown.Item id='align-center' eventKey="2">
            <FaAlignCenter />
          </Dropdown.Item>
          <Dropdown.Item id='align-right' eventKey="3">
            <FaAlignRight />
          </Dropdown.Item>
          <Dropdown.Item id='justify' eventKey="4">
            <FaAlignJustify />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button  id='change-color' variant="secondary">
        <FaPalette />
      </Button>
      {/* <Button variant="secondary">
        <FaHighlighter />
      </Button> */}
      <Button id='add-hyperlink' variant="secondary">
        <FaLink />
      </Button>
    </ButtonGroup>
  );
}