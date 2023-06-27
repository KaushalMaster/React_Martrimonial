import React, { useState, useEffect } from "react";
import MessagesComponent from "../../Sections/Profile/MessagesComponent/MessagesComponent";
import "./Messages.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import img1 from "../../Assets/profile2/img1.jpg";
import Message from "../../Components/Message/Message";
import { useLocation } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import {
  EmojiEmotions,
  EmojiEmotionsOutlined,
  Search,
} from "@mui/icons-material";
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
} from "@firebase/firestore";
import { db } from "../../firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState([]);
  const [name, setName] = useState("");
  const location = useLocation();

  const getUserData = async () => {
    const chats = collection(db, "chats");
    const chatSnapshot = await getDocs(chats);
    for (let i = 0; i < chatSnapshot.docs.length; i++) {
      const user = chatSnapshot.docs[i].data();
      const id = chatSnapshot.docs[i].id;
      if (id === location.state.id) {
        setMessages(user.messages);
        setName(user.name);
        console.log(user.name);
        setMsg(user.messages);
      }
    }

    return messages;
  };

  async function sendMessage(message) {
    const userDoc = doc(db, "chats", location.state.id);

    const chats = collection(db, "chats");
    const chatSnapshot = await getDocs(chats);

    for (let i = 0; i < chatSnapshot.docs.length; i++) {
      const user = chatSnapshot.docs[i].data();
      const id = chatSnapshot.docs[i].id;

      if (id === location.state.id) {
        const tempMessages = {
          message: message,
          time: new Date().toLocaleTimeString(),
          type: "sent",
        };
        const newMessages = [...user.messages, JSON.stringify(tempMessages)];
        setMessages(newMessages);
        await updateDoc(userDoc, {
          messages: newMessages,
          name: user.name,
        });
        setMsg(newMessages);
      }
    }

    return 0;
  }

  useEffect(() => {
    setMsg(messages);
  }, [messages]);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="messages">
      <div className="messages_left">
        <div className="messages_header">
          <div className="messages_header_profile">
            <img src={img1} alt="" />
            <h3>{name}</h3>
          </div>
          <MoreVertIcon />
        </div>
        <div className="messages_chat_screen">
          <div className="messages_message_panel">
            {msg.map((message, index) => {
              return (
                <Message
                  key={index}
                  myMessage={
                    JSON.parse(message).type === "received" ? false : true
                  }
                  message={JSON.parse(message).message}
                  time={JSON.parse(message).time}
                />
              );
            })}
          </div>

          <div className="messages_input_form">
            <EmojiEmotions style={{ color: "#f97096" }} />
            <div className="messages_chat_input_wrapper">
              <input
                placeholder="Send a message"
                type="text"
                className="messages_chat_input"
                id="messageInput"
              />
              <button
                onClick={() => {
                  sendMessage(document.getElementById("messageInput").value);
                }}
              >
                {" "}
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="messages_right">
        <div className="profile_messages_search_input_wrapper">
          <Search />
          <input
            placeholder="Search"
            type="text"
            className="profile_messages_search_input"
          />
        </div>
        <MessagesComponent />
      </div>
    </div>
  );
};

export default Messages;
