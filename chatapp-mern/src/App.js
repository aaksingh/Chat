import "./App.css";
import Chat from "./Components/Js/Chat.js";
import {useEffect, useState} from 'react'
import Sidebar from "./Components/Js/Sidebar.js";
import Pusher from 'pusher-js'
import axios from "./Components/Js/axios.js"
import Login from "./Components/Js/Login.js"
import {useStateValue} from "./StateProvider"
function App() {
  
 
  const [{user}, dispatch] = useStateValue();
    const [message, setMessages] = useState([]);

  useEffect(()=>{ 
   axios.get("/messages/sync").then((response)=>{
     console.log("here")
    setMessages(response.data)
   });

  }, [])
  
  useEffect(() => {
    var pusher = new Pusher('f4795fbbb47df9e292a1', {
      cluster: 'ap2',
    });
    

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) =>{
      //alert(JSON.stringify(data));
      setMessages([...message,newMessage])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [message])
  
  console.log(user)

  return (
    <div className="app">
      {!user ?(<Login/>):(
        <>
      <div className="app__body">
       <Sidebar/>
       <Chat messages={message}/> 
      </div>
      </>
      )}
    </div>
    
  );
}

export default App;
