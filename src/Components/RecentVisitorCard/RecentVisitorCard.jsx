import PlaceIcon from "@mui/icons-material/Place";
import React from "react";
import img1 from "../../Assets/profile/img1.png";
import "./RecentVisitorCard.css";

const RecentVisitorCard = () => {
  return (
    <div className="recentvisitorcard">
      <div className="recentvisitorcard_location">
        <PlaceIcon />
        <h4>Ahmedabad</h4>
      </div>
      <img src={img1} alt="" />
      <div className="recentvisitorcard_intro">
        <p>
          Jaymin k, <span className="newmatchescard_height">5’5”</span>
        </p>
        <p>
          30 year, <span className="newmatchescard_language">Gujarati</span>
        </p>
        <p>Assistant professor</p>
      </div>
      <button className="recentvisitorcard_connect_button">Connect</button>
    </div>
  );
};

export default RecentVisitorCard;
