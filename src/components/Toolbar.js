import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faPalette, faAlignCenter } from '@fortawesome/free-solid-svg-icons'

export default function Toolbar() {
    return (
        <div id='toolbar'>
            <ButtonGroup vertical>
                <Button 
                    // onclick={}
                >
                    <span class='font-caslon'>a</span> <span class='font-ssp font-large'>a</span> <span class='font-roboto font-large'>a</span>
                </Button>
                <Button 
                    // onclick={}
                >
                    <span class='font-small'>s</span> <span>s </span><span class='font-xl'>s</span>
                </Button>
                <Button 
                    // onclick={}
                >
                    <FontAwesomeIcon icon={faPalette} />
                </Button>
                <Button 
                    // onclick={}
                >
                    <span>a</span><span class='text-warning'>a</span><span class='text-danger'>a</span>
                </Button>
                <Button 
                    // onclick={}
                >
                    <span class='bold'>B</span>
                </Button>
                <Button 
                    // onclick={}
                >
                    <span class='italic'>i</span>
                </Button>
                <Button 
                    // onclick={}
                >
                    <span class='text-underline'>u</span>
                </Button>
                <Button 
                    // onclick={}
                >
                    <FontAwesomeIcon icon={faLink} />
                </Button>
                <Button 
                    // onclick={}
                >
                    <FontAwesomeIcon icon={faAlignCenter} />
                </Button>
            </ButtonGroup>
        </div>
    )
}
