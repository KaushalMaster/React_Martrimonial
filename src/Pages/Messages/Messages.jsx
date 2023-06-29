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
    let messagesArr = [];
    for (let i = 0; i < chatSnapshot.docs.length; i++) {
      const user = chatSnapshot.docs[i].data();
      const id = chatSnapshot.docs[i].id;
      if (id === location.state.id) {
        setName(user.name);
      }
      for (let j = 0; j < user.messages.length; j++) {
        console.log(user.messages[j])
        let temp = JSON.parse(user.messages[j]);
        if (temp["receiverId"] === location.state.id) {
          temp["type"] = "received";
          messagesArr.push(temp);
        } else if (temp["receiverId"] === localStorage.getItem("userId")) {
          temp["type"] = "sent";
          messagesArr.push(temp);
        }
      }
    }
    messagesArr = messagesArr.sort((a, b) => {
      let time1 = new Date(a.time);
      let time2 = new Date(b.time);

      return time1 - time2;
    });
    setMessages(messagesArr);
    setMsg(messagesArr);

    return messages;
  };

  async function sendMessage(message) {
    const userDoc = doc(db, "chats", localStorage.getItem("userId"));

    const chats = collection(db, "chats");
    const chatSnapshot = await getDocs(chats);

    for (let i = 0; i < chatSnapshot.docs.length; i++) {
      const user = chatSnapshot.docs[i].data();
      const id = chatSnapshot.docs[i].id;
      if (id === localStorage.getItem("userId")) {
        const tempMessages = {
          message: message,
          time: new Date().toString(),
          receiverId: location.state.id,
          type: "received",
        };
        const newMessages = [...msg, tempMessages];
        const tempMessageArr = newMessages.map((message) =>
          JSON.stringify(message)
        );
        await updateDoc(userDoc, {
          messages: tempMessageArr,
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
                  myMessage={message.type === "received" ? true : false}
                  message={message.message}
                  time={message.time}
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
