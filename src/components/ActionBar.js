import React from 'react'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap'

export default function ActionBar() {
    return (
        <div id='actionbar'>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-2" aria-label="First group">
                    <Button>Share</Button> 
                    <Button>Present Mode</Button> 
                </ButtonGroup>
                <ButtonGroup className="mr-2" aria-label="Second group">
                    <Button>Change Theme</Button> 
                    <Button>Change Wallpaper</Button>
                </ButtonGroup>
                <ButtonGroup aria-label="Third group">
                    <Button>Insert Comments</Button> 
                    <Button>Make a Copy</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    )
}
