import React from 'react'
import ContentEditable from 'react-contenteditable'

class EditorDiv extends React.Component {
    constructor() {
        super();
        this.state = { html: "Enter Text Here" };
    }
    handleChange = evt => {
        this.setState({ html: evt.target.value });
    };
    render = () => {
        return (
            <ContentEditable
                id='doc-name'
                html={this.state.html} // innerHTML of the editable div
                disabled={false} // use true to disable edition
                onChange={this.handleChange} // handle innerHTML change
            />
        );
    };
}

export default function Editor() {
    return (
        <div id='editor'>
            
            <div id="text-editor">
                <EditorDiv />
            </div>
            
            <div id="text-view">
                <p>Text is viewed here</p>
            </div>
        </div>
    )
}
