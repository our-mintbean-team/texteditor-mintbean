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
import { 
  AiOutlineFontSize, 
  AiOutlineEye, 
  AiOutlineEyeInvisible 
} from "react-icons/ai";
import swal from 'sweetalert';


export default function Toolbar({
  currentDoc,
  updateDoc,
  selectionObject: { startIndex, endIndex },
}) {
  const [visible, toggleVisible] = useState(true);

  function promptHref() {
    var link;
    swal({
      text: 'Enter url to link.',
      content: {
        element: "input",
        attributes: {
          value: "http://"
        }
      },
      button: {
        text: "Link",
        closeModal: true
      }
    })
    .then((link) => {
      styleSelection('a',link)
    })
  }

  function styleSelection (tagName, link) {
    var text = currentDoc.text;
    if (tagName==='a') {
      var tag='<'+tagName+' href="'+ link +'" target="_blank" >';  // get link by input from a modal
    } else {
      var tag='<'+tagName+'>';
    }
    var endTag='</'+tagName+'>';
    text = [text.slice(0, endIndex), endTag, text.slice(endIndex)].join('');
    text = [text.slice(0, startIndex), tag, text.slice(startIndex)].join('');
    updateDoc({ ...currentDoc, text:text }) // output: the text, now with the html added at the specified indexes
  }

  return (
    <ButtonGroup vertical id="toolbar" variant="secondary">
      <Button
        id="toggle-toolbar"
        variant="secondary"
        onClick={() => {
          toggleVisible(!visible);
          if (visible) {
            document.querySelector("#toggleable-toolbar").style.display =
              "none";
          }
        }}
      >
        Toolbar
        <br />
        {visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
      </Button>
      {visible ? (
        <div id="toggleable-toolbar">
          <Button
            id="bold"
            variant="secondary"
            onClick={() => styleSelection("strong")}
          >
            B
          </Button>
          <Button
            id="italics"
            variant="secondary"
            onClick={() => styleSelection("em")}
          >
            I
          </Button>
          <Button
            id="underline"
            variant="secondary"
            onClick={() => styleSelection("u")}
          >
            U
          </Button>

          <Button id="add-hyperlink" variant="secondary" onClick={() => promptHref()}>
            <FaLink />
          </Button>

          <Dropdown as={ButtonGroup}>
            <Button id="change-font-size" variant="secondary">
              <AiOutlineFontSize />
            </Button>
            <Dropdown.Toggle
              split
              variant="secondary"
              id="dropdown-split-basic"
            />
            <Dropdown.Menu>
              <Dropdown.Item
                id="font-small"
                eventKey="1"
                onClick={(text) => {
                  document.getElementById("theText").style.fontSize = "small";
                  document.getElementById("liveView").style.fontSize = "small";
                }}
              >
                Small
              </Dropdown.Item>
              <Dropdown.Item
                id="font-medium"
                eventKey="2"
                onClick={() => {
                  document.getElementById("theText").style.fontSize = "medium";
                  document.getElementById("liveView").style.fontSize = "medium";
                }}
              >
                Medium
              </Dropdown.Item>
              <Dropdown.Item
                id="font-large"
                eventKey="3"
                onClick={() => {
                  document.getElementById("theText").style.fontSize = "large";
                  document.getElementById("liveView").style.fontSize = "large";
                }}
              >
                Large
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={ButtonGroup}>
            <Button id="change-font" variant="secondary">
              <FaFont />
            </Button>
            <Dropdown.Toggle
              split
              variant="secondary"
              id="dropdown-split-basic"
            />
            <Dropdown.Menu>
              <Dropdown.Item
                id="font-verdana"
                eventKey="1"
                onClick={(text) => {
                  document.getElementById("theText").style.fontFamily = "Verdana";
                  document.getElementById("liveView").style.fontFamily =
                    "Verdana";
                }}
              >
                Verdana
              </Dropdown.Item>
              <Dropdown.Item
                id="font-helvetica"
                eventKey="2"
                onClick={() => {
                  document.getElementById("theText").style.fontFamily =
                    "Helvetica";
                  document.getElementById("liveView").style.fontFamily =
                    "Helvetica";
                }}
              >
                Helvetica
              </Dropdown.Item>
              <Dropdown.Item
                id="font-times"
                eventKey="3"
                onClick={() => {
                  document.getElementById("theText").style.fontFamily = "Times";
                  document.getElementById("liveView").style.fontFamily =
                    "Times";
                }}
              >
                Times New Roman
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={ButtonGroup}>
            <Button variant="secondary" id="bg-nested-dropdown">
              <FaAlignJustify />
            </Button>
            <Dropdown.Toggle
              split
              variant="secondary"
              id="dropdown-split-basic"
            />
            <Dropdown.Menu>
              <Dropdown.Item
                id="align-left"
                eventKey="1"
                onClick={(text) => {
                  document.getElementById("theText").style.textAlign = "left";
                  document.getElementById("liveView").style.textAlign = "left";
                }}
              >
                <FaAlignLeft />
              </Dropdown.Item>
              <Dropdown.Item
                id="align-center"
                eventKey="2"
                onClick={() => {
                  document.getElementById("theText").style.textAlign = "center";
                  document.getElementById("liveView").style.textAlign =
                    "center";
                }}
              >
                <FaAlignCenter />
              </Dropdown.Item>
              <Dropdown.Item
                id="align-right"
                eventKey="3"
                onClick={() => {
                  document.getElementById("theText").style.textAlign = "right";
                  document.getElementById("liveView").style.textAlign = "right";
                }}
              >
                <FaAlignRight />
              </Dropdown.Item>
              <Dropdown.Item
                id="justify"
                eventKey="4"
                onClick={() => {
                  document.getElementById("theText").style.textAlign =
                    "justify";
                  document.getElementById("liveView").style.textAlign =
                    "justify";
                }}
              >
                <FaAlignJustify />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={ButtonGroup}>
            <Button id="change-color" variant="secondary">
              <FaPalette />
            </Button>
            <Dropdown.Toggle
              split
              variant="secondary"
              id="dropdown-split-basic"
            />
            <Dropdown.Menu>
              <Dropdown.Item
                id="red"
                eventKey="1"
                onClick={(text) => {
                  document.getElementById("theText").style.color = "red";
                  document.getElementById("liveView").style.color = "red";
                }}
              >
                Red
              </Dropdown.Item>
              <Dropdown.Item
                id="green"
                eventKey="2"
                onClick={() => {
                  document.getElementById("theText").style.color = "green";
                  document.getElementById("liveView").style.color = "green";
                }}
              >
                Green
              </Dropdown.Item>
              <Dropdown.Item
                id="blue"
                eventKey="3"
                onClick={() => {
                  document.getElementById("theText").style.color = "blue";
                  document.getElementById("liveView").style.color = "blue";
                }}
              >
                Blue
              </Dropdown.Item>
              <Dropdown.Item
                id="white"
                eventKey="4"
                onClick={() => {
                  document.getElementById("theText").style.color = "white";
                  document.getElementById("liveView").style.color = "white";
                }}
              >
                White
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      ) : (
        " "
      )}
    </ButtonGroup>
  );
}
