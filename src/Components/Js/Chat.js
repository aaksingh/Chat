import React from "react";
import "../Css/Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
function Chat() {
   
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last Seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Aakash</span>
          This is message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">Aakash</span>
          This is message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
       </div>
      <div className="chat__footer">
        <form>
          <input placeholder="Type a Message" type="text" />
          <button  type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
