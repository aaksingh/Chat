import React from "react";
import SidebarChat from "./SidebarChat.js"
import "../Css/Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import {Avatar, IconButton} from "@material-ui/core"
import {SearchOutlined} from "@material-ui/icons"
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
          <Avatar src=""/>
        <div className="sidebar__headerright">
          <IconButton>
            <ChatIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
          <div className="sidebar__searchContainer">
               <SearchOutlined/>
               <input placeholder="search" type="text"></input>
          </div>

      </div>
      <div className="sidebar__chat">
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
      </div>
    </div>
  );
}

export default Sidebar;
