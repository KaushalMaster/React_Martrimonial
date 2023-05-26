import React from "react";
import "./ProfileDetails.css";
import img1 from "../../../Assets/signup/img1.png";
import EditIcon from "@mui/icons-material/Edit";
import googleAds from "../../../Assets/googleads.png";
import { Link } from "react-router-dom";

const ProfileDetails = () => {
  const data = JSON.parse(localStorage.getItem("user"));
  console.log(data);

  return (
    <div className="profile__details">
      <div>
        <div className="profile__card">
          <div className="profile__card_user">
            <img src={img1} alt="" />
            <div className="profile__card_name">
              <h3>{data.user_name}</h3>
              <p>{data.contact_no}</p>
            </div>
            <EditIcon />
          </div>
          <div className="profile__card_status">
            <p className="profile__card_status_status">status</p>
            <p className="profile__card_status_value">
              {data.member_type} user
            </p>
          </div>
          <button className="profile__get_premium">
            <Link to="/selectplans">Get Premium</Link>
          </button>
        </div>
        <div className="profile__counts">
          <div className="profile__counts_card profile__counts_card1">
            <h3>6</h3>
            <p>Pending invitation</p>
          </div>
          <div className="profile__counts_card profile__counts_card2">
            <h3>12</h3>
            <p>Accepted invitation</p>
          </div>
          <div className="profile__counts_card profile__counts_card2">
            <h3>40</h3>
            <p>Recent Visitors</p>
          </div>
        </div>
      </div>

      <img src={googleAds} alt="" />
    </div>
  );
};

export default ProfileDetails;
