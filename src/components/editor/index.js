import React, { useState, useEffect } from "react";
import "./index.css";

function Editor({ setMessages, channel }) {
  const [value, setValue] = useState("");

  const postMessage = async event => {
    const message = value;
    setValue("");

    const response = await fetch(`http://localhost:3001/channels/${channel}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });
    setMessages(await response.json());
  };

  useEffect(() => {
    setValue("");
  }, [channel]);

  return (
    <div className="col-4">
      <input
        name="message"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={() => postMessage()} disabled={!value || !channel}>
        Submit
      </button>
    </div>
  );
}

export default Editor;
