import React, { useEffect, useState } from "react";
import "./index.css";

function Channels({ channel, setCurrentChannel }) {
  const [channelList, setChannelList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/channels");
      const result = await response.json();
      setChannelList(result);
    };

    fetchData();
  }, []);

  return (
    <div className="col-4">
      {channelList.map(item => (
        <div
          className={`channel ${item.id === channel ? "active" : ""}`}
          key={item.id}
          onClick={() => setCurrentChannel(item.id)}
        >
          Channel: {item.id}
        </div>
      ))}
    </div>
  );
}

export default Channels;
