import React from "react";

import Header from "../components/Header";
import ActionBar from "../components/ActionBar";
import Toolbar from "../components/Toolbar";
import Editor from "../components/Editor";
import Game from "../components/Game";
import "bootstrap/dist/css/bootstrap.min.css";

function TextEditor() {
  return (
    <div>
      <div className="main">
        <Header />
        <ActionBar />

        <div className="row">
          <Toolbar />
          <Editor />
        </div>

        <Game />
      </div>
    </div>
  );
}

export default TextEditor;
