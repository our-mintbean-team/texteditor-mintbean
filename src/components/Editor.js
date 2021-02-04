import React from "react";
import { Button } from "react-bootstrap";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from 'sanitize-html';

function DocNameEditor ({ currentDoc, updateDoc }) {
  var { id, title, text } = currentDoc;
  
  return (
    <ContentEditable
      id='theTitle'
      className="title__editor"
      html={title} // innerHTML of the editable div
      disabled={false} // use true to disable edition
      onChange={(e) => updateDoc({ 
        ...currentDoc, 
        title: e.target.value, 
      })} // handle innerHTML change
    />
  );
};

function EditorDivFunctional ({ currentDoc, updateDoc }) {
  var { id, title, text } = currentDoc;
  
  return (
    <ContentEditable
      id='theText'
      className="main__editor"
      html={text} // innerHTML of the editable div
      disabled={false} // use true to disable edition
      onChange={(e) => updateDoc({ 
        ...currentDoc,
        text: e.target.value, 
        // lastSave:  new Date()
      })} // handle innerHTML change
    />
  );
};

// class EditorDivClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       html: props.currentDoc.text,
//       editable: true
//     };
//   }
//   handleChange = evt => {
//     this.setState({ html: evt.target.value });
//     // {this.props.updateDoc(
//     //   ...this.props.currentDoc,
//     //   text: evt.target.value 
//     // )}
//   };

//   sanitizeConf = {
//     allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
//     allowedAttributes: { a: ["href"] }
//   };

//   sanitize = () => {
//     this.setState({ html: sanitizeHtml(this.state.html, this.sanitizeConf) });
//   };

  // toggleEditable = () => {
  //   this.setState({ editable: !this.state.editable });
  // };

  // render = () => {
  //   return (
  //     <div>
  //       <ContentEditable
  //         id='theText'
  //         className=" main__editor"
  //         tagName="pre"
  //         html={this.state.html} // innerHTML of the editable div
  //         disabled={false} // use true to disable edition
  //         onChange={this.handleChange} // handle innerHTML change
  //         onBlur={this.sanitize}
  //       />
        {/* <textarea
          className="editable"
          value={this.state.html}
          onChange={this.handleChange}
          onBlur={this.sanitize}
        /> */}
        {/* <EditButton cmd="italic" />
        <EditButton cmd="bold" />
        <EditButton cmd="formatBlock" arg="h1" name="heading" />
        <EditButton
          cmd="createLink"
          arg="https://github.com/lovasoa/react-contenteditable"
          name="hyperlink"
        />
        <button onClick={this.toggleEditable}>
          Make {this.state.editable ? "readonly" : "editable"}
        </button> */}
  //     </div>
  //   );
  // };
// }

// function EditButton(props) {
//   return (
//     <button
//       key={props.cmd}
//       onMouseDown={evt => {
//         evt.preventDefault(); // Avoids loosing focus from the editable area
//         document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
//       }}
//     >
//       {props.name || props.cmd}
//     </button>
//   );
// }


export default function Editor({ currentDoc, updateDoc }) {

  const { id, title, text, lastSave } = currentDoc;

  var saveTime = lastSave;
  // var saveTime = lastSave.toTimeString();

  return (
    <>
      <div>
        <DocNameEditor currentDoc={currentDoc} updateDoc={updateDoc} />
      </div>
      {/* <h3 className='label rich-text-label' >Rich Text</h3> */}
      <div id="text-editor" >
        {/* <textarea
          id='theText' 
          className='main__editor' 
          onChange={(e) => updateDoc({ 
            ...currentDoc,
            text: e.target.value, 
          })} // handle innerHTML change
          spellCheck={true}
          // contentEditable
        >
          {text}
        </textarea> */}
        {/* <EditorDivClass currentDoc={currentDoc} updateDoc={updateDoc} /> */}
        <EditorDivFunctional currentDoc={currentDoc} updateDoc={updateDoc} />
        {/* <div>
          <p>Last save at {saveTime}</p>
          <Button 
            variant="secondary" 
            onClick={() => 
              updateDoc(
                title=document.querySelector('#theTitle').value, 
                text=document.querySelector('#theText').value, 
                lastSave=new Date() 
            )} 
          >Save</Button>
        </div> */}
      </div>
    </>
  );
}
