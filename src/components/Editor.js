import React from "react";
import ContentEditable from "react-contenteditable";

class EditorDiv extends React.Component {
  constructor() {
    super();
    this.state = { html: "Enter Text Here" };
  }
  handleChange = (evt) => {
    this.setState({ html: evt.target.value });
  };
  render = () => {
    return (
      <ContentEditable
        className="main__editor"
        html={this.state.html} // innerHTML of the editable div
        disabled={false} // use true to disable edition
        onChange={this.handleChange} // handle innerHTML change
      />
    );
  };
}

export default function Editor() {
  return (
    <div id="text-editor">
      <EditorDiv />
    </div>
  );
}
