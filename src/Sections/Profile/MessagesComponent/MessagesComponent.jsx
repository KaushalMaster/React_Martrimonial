import React, { useEffect, useState } from "react";
import ProfileMessageCard from "../../../Components/ProfileMessageCard/ProfileMessageCard";
import "./MessagesComponent.css";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { db } from "../../../firebase";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const MessagesComponent = () => {
  // console.log(db);

  const [openMessages, setOpenMessages] = useState(false);
  const [messagesClasses, setMessagesClasses] = useState(
    "profile__messages_wrapper"
  );

  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    const chats = collection(db, "chats");
    const chatSnapshot = await getDocs(chats);
    const userList = [];
    for (let i = 0; i < chatSnapshot.docs.length; i++) {
      const user = chatSnapshot.docs[i].data();
      const id = chatSnapshot.docs[i].id;
      user.id = id;
      userList.push(user);
    }
    setUsers(userList);
    return userList;
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleViewAll = () => {
    if (!openMessages) {
      setMessagesClasses(
        "profile__messages_wrapper profile__messages_wrapper_full"
      );
      setOpenMessages(true);
    } else {
      setMessagesClasses("profile__messages_wrapper");
      setOpenMessages(false);
    }
  };
  return (
    <div className="profile__messages">
      <Link to="/profile" className="porfile__messages_back_icon">
        <ArrowBackIcon />
      </Link>
      <div className="profile__messages_messages__header">
        <div className="mprofile__messages_messages__header_details">
          <h3>
            Chats
            {/* <span>06</span> */}
          </h3>
        </div>
        {/* <button className="messages__view_all" onClick={() => handleViewAll()}>
          {openMessages ? "Close All" : "View All"}
        </button> */}
      </div>
      <div className={messagesClasses}>
        {users.map((user, index) => {
          return (
            <ProfileMessageCard
              key={index}
              id={user.id}
              name={user.name}
              message={
                JSON.parse(user.messages[user.messages.length - 1]).message
              }
              time={JSON.parse(user.messages[user.messages.length - 1]).time}
              length={user.messages.length}
            />
          );
        })}
        {/* <ProfileMessageCard />
         <ProfileMessageCard />
         <ProfileMessageCard /> */}
      </div>
    </div>
  );
};

export default MessagesComponent;
