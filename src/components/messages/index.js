import React, { useEffect } from "react";
import { ago } from "time-ago";
import "./index.css";

function Messages({ messages, setMessages, channel }) {
  useEffect(() => {
    const fetchData = async () => {
      if (channel) {
        const response = await fetch(
          `http://localhost:3001/messages/${channel}`
        );
        const result = await response.json();
        setMessages(result);
      }
    };

    fetchData();
  }, [setMessages, channel]);

  return (
    <div className="col-6">
      {channel
        ? messages.length
          ? messages.map(item => (
              <div className="message" key={item.id}>
                {item.message}
                <span className="timestamp">{ago(item.createdAt)}</span>
              </div>
            ))
          : "No messages"
        : "No channel selected"}
    </div>
  );
}

export default Messages;
