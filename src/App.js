import React, { useState } from "react";
import "./App.css";
import Channels from "./components/channels";
import Messages from "./components/messages";
import Editor from "./components/editor";

function App() {
  const [currentChannel, setCurrentChannel] = useState(null);
  const [messages, setMessages] = useState([]);

  return (
    <div className="main">
      <div className="header">
        <h1>AIBoard</h1>
      </div>
      <div className="body">
        <Channels
          channel={currentChannel}
          setCurrentChannel={setCurrentChannel}
        />
        <Messages
          channel={currentChannel}
          messages={messages}
          setMessages={setMessages}
        />
        <Editor channel={currentChannel} setMessages={setMessages} />
      </div>
    </div>
  );
}

export default App;
