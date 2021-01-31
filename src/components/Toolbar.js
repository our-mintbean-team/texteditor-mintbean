import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faHighlighter } from '@fortawesome/free-solid-svg-icons'

export default function Toolbar() {
    return (
        <div id='toolbar'>
            <ButtonGroup vertical>
                <Button>B</Button>
                <Button>I</Button>
                <Button>U</Button>
                <Button>
                    1<br/>2<br/>3
                </Button>
                <Button><FontAwesomeIcon icon={faPalette} /></Button>
                <Button><FontAwesomeIcon icon={faHighlighter} /></Button>
            </ButtonGroup>
        </div>
    )
}
