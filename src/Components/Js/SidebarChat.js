import React from 'react'
import '../Css/SidebarChat.css'
import {Avatar} from "@material-ui/core"
function SidebarChat() {
    return (
        <div className="sidebarchat">
            <Avatar/>
            <div className="sidebarchat__info">
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
