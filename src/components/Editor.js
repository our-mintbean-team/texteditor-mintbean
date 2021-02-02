import React from "react";
import ContentEditable from "react-contenteditable";

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

function EditorDivFunctional ({ currentDoc:{ id, title, text }, updateDoc }) {
  return (
    <ContentEditable
      id='theText'
      className="main__editor"
      html={text} // innerHTML of the editable div
      disabled={false} // use true to disable edition
      onChange={(e) => updateDoc({ 
        id, 
        title, 
        text: e.target.value, 
        lastSave: Date.now() 
      })} // handle innerHTML change
    />
  );
};

export default function Editor({ currentDoc, updateDoc }) {
  const { id, title, text } = currentDoc;
  return (
    <>
      <div>
        <DocNameEditor currentDoc={currentDoc} updateDoc={updateDoc} />
      </div>
      <div id="text-editor" >
        <textarea
          id='theText' 
          className='main__editor' 
          onChange={(e) => updateDoc({ 
            id, 
            title, 
            text: e.target.value, 
            lastSave: Date.now() 
          })} // handle innerHTML change
          // contentEditable
        >
          {text}
        </textarea>
        {/* <EditorDivFunctional currentDoc={currentDoc} updateDoc={updateDoc} /> */}
      </div>
    </>
  );
}
