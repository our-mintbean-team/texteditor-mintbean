import React, { useState } from "react";
import ContentEditable from "react-contenteditable";

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

  return (
    <div id="text-editor">
      <EditorDivFunctional currentDoc={currentDoc} updateDoc={updateDoc} />
    </div>
  );
}
