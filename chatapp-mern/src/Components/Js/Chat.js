import React, { useState } from "react";
import "../Css/Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import axios from "./axios.js"
function Chat({messages}) {
  const [input, setinput] = useState("")
 
  const sendMessage= async (e)=>{
    e.preventDefault();
    await axios.post('messages/new',{
      message:input,
      name:"Demo Golu",
      timestamp:"5:55",
      received:false,

    })
    setinput("")
  }   
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
        {
          messages.map(message => (
            <p className={`chat__message ${message.received && "chat__reciever"}`}>
          <span className="chat__name">{message.name}</span>
          {message.message}
          <span className="chat__timestamp">{message.timestamp}</span>
        </p>

          ))
        }
        
       </div>
      <div className="chat__footer">
        <form>
          <input value={input} onChange={(e)=>setinput(e.target.value)} placeholder="Type a Message" type="text" />
          <button onClick={sendMessage} type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
