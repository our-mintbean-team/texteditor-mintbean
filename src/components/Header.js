import React from 'react'
import { Button } from 'react-bootstrap'
import ContentEditable from 'react-contenteditable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faICursor, faFileWord, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

class DocNameEditor extends React.Component {
    constructor() {
        super();
        this.state = { html: "DOCUMENT NAME" };
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

export default function Header() {

    return (
        <div id='header'>
            <div>
                <Button variant="dark"><FontAwesomeIcon icon={faICursor} /> Editor Name</Button>
                <Button variant="dark"><FontAwesomeIcon icon={faFileWord} /> Documents</Button>
            </div>
            <DocNameEditor />
            <Button variant="dark"><FontAwesomeIcon icon={faUserAstronaut} /> Login</Button>
        </div>
    )
}
