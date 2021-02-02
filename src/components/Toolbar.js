import React, { useState } from "react";
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
import { AiOutlineFontSize, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Toolbar({ currentDoc, updateDoc, selectionObject:{ startIndex, endIndex} }) {
  const [visible, toggleVisible] = useState(true);

  function styleSelection (tagName) {
    var text = currentDoc.text;
    var tag='<'+tagName+'>';
    var endTag='</'+tagName+'>';
    var text = [text.slice(0, endIndex), endTag, text.slice(endIndex)].join('');
    text = [text.slice(0, startIndex), tag, text.slice(startIndex)].join('');
    updateDoc({ ...currentDoc, text:text }) // output: the text, now with the html added at the specified indexes
  }

  return (
    <ButtonGroup vertical id="toolbar" variant='secondary' >
      <Button id='toggle-toolbar' variant="secondary" onClick={ () => {toggleVisible(!visible); if (visible) {document.querySelector('#toggleable-toolbar').style.display='none'} } } >
        Toolbar<br/>
        {visible ? 
        <AiOutlineEyeInvisible />
        :
        <AiOutlineEye />
        }
      </Button>
        {visible ? 
        <div id='toggleable-toolbar' >
          <Button id='change-font' variant="secondary">
            <FaFont />
          </Button>
          <Button id='change-font-size' variant="secondary">
            <AiOutlineFontSize />
          </Button>
          <Button id='bold' variant="secondary" onClick={() => styleSelection ('strong')} >B</Button>
          <Button id='italics' variant="secondary" onClick={() => styleSelection ('em')}>I</Button>
          <Button id='underline' variant="secondary" onClick={() => styleSelection ('u')}>U</Button>

          <Dropdown as={ButtonGroup} >
            <Button variant="secondary" id="bg-nested-dropdown">
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
          <Button id='add-hyperlink' variant="secondary">
            <FaLink />
          </Button>
        </div>
          :
        ' '
        }
      
      
    </ButtonGroup>
  );
}
