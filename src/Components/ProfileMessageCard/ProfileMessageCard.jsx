import React from "react";
import "./ProfileMessageCard.css";
import img1 from "../../Assets/signup/img1.png";
import { useNavigate } from "react-router-dom";

const ProfileMessageCard = ({ id, name, message, time, length }) => {
  const navigate = useNavigate();
  const redirectToChat = () => {
    navigate("/messages", { state: { id: id } });
  };
  return (
    <div className="profilemessagecard" onClick={redirectToChat}>
      <img src={img1} alt="" />
      <div className="profilemessage__details">
        <p className="profilemessage__name">{name}</p>
        <p className="profilemessage__message">{message}</p>
      </div>
      <div className="profilemessage__time">
        <p className="profilemessage_day">{time}</p>
        <p className="profilemessage_unread_messages">{length}</p>
      </div>
    </div>
  );
};

export default ProfileMessageCard;
