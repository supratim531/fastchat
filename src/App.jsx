import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { io } from "socket.io-client";
import RootContext from "./contexts/RootContext";

// const socket = io("http://localhost:8000");
const socket = io("https://ee36-110-227-203-185.ngrok-free.app", {
  extraHeaders: {
    "ngrok-skip-browser-warning": "69420"
  }
});

function App() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(true);

  const sendMessage = e => {
    e.preventDefault();

    socket.emit("send_message", {
      username: username,
      message: {
        type: "chat",
        data: message
      }
    });

    setMessages(prev => [...prev, {
      user: username,
      type: "chat",
      data: message
    }]);
  }

  useEffect(() => {
    const username = localStorage.getItem("username");

    if (username) {
      console.log("App called");
      setUsername(username);
      setMessages(prev => [...prev, {
        user: "You",
        type: "join",
        data: `joined at ${new Date().toDateString()}, ${new Date().toLocaleTimeString()}`
      }]);

      socket.on("receive_message", data => {
        console.log("From receive message event:", data);
        setMessages(prev => [...prev, { ...data?.message, user: data?.username }]);
      });

      socket.emit("send_message", {
        username: username,
        message: {
          type: "join",
          data: `joined at ${new Date().toDateString()}, ${new Date().toLocaleTimeString()}`
        }
      });
    }
  }, [socket]);

  const contextValues = {
    navigate,
    sendMessage,
    message, setMessage,
    messages, setMessages,
    username, setUsername,
    isConnected, setIsConnected
  };

  return (
    <>
      <div className=""><Toaster /></div>

      <RootContext.Provider value={contextValues}>
        <Outlet />
      </RootContext.Provider>
    </>
  );
}

export default App;
