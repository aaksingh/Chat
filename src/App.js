import "./App.css";
import Chat from "./Components/Js/Chat.js";
import Sidebar from "./Components/Js/Sidebar.js";
function App() {
  return (
    <div className="app">
      <div className="app__body">
       <Sidebar/>
       <Chat/> 
      </div>
    </div>
  );
}

export default App;
