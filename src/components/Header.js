import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import ContentEditable from 'react-contenteditable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFileWord, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

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
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"><FontAwesomeIcon icon={faCoffee} />Brand Name</Navbar.Brand>
                
                <Nav className="mr-auto">
                <FontAwesomeIcon icon={faFileWord} /><NavDropdown title="Documents" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.4">New Doc</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.1">Docname1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Docname2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Docname3</NavDropdown.Item>
                    </NavDropdown>
                    <DocNameEditor />
                    <Nav.Link href="#features"><FontAwesomeIcon icon={faUserAstronaut} />Login</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
