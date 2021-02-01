import React from "react";
import ContentEditable from "react-contenteditable";

function EditorDivFunctional ({ currentDoc:{ id, title, text }, updateDoc, updateSelection }) {
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

export default function Editor({ currentDoc, updateDoc, selectedText, updateSelection }) {

  return (
    <div id="text-editor" >
      <EditorDivFunctional currentDoc={currentDoc} updateDoc={updateDoc} updateSelection={updateSelection} />
    </div>
  );
}
