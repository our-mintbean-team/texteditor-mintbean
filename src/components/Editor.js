import React from "react";
import { Button } from "react-bootstrap";
import ContentEditable from "react-contenteditable";

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


export default function Editor({ currentDoc, updateDoc }) {

  const { id, title, text, lastSave } = currentDoc;

  var saveTime = lastSave;
  // var saveTime = lastSave.toTimeString();

  return (
    <>
      <div>
        <DocNameEditor currentDoc={currentDoc} updateDoc={updateDoc} />
      </div>
      <h3 className='label rich-text-label' >Rich Text</h3>
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
