import React from "react";
import "./PremiumMatchesCard.css";
import PlaceIcon from "@mui/icons-material/Place";
import img1 from "../../Assets/profile/img1.png";
import BoltIcon from "@mui/icons-material/Bolt";

const PremiumMatchesCard = () => {
  return (
    <div className="premiummatchescard">
      <div className="premiummatchescard_location">
        <PlaceIcon />
        <h4>Ahmedabad</h4>
        <BoltIcon style={{ color: "#FCF204" }} />
      </div>
      <img src={img1} alt="" />
      <div className="premiummatchescard_intro">
        <p>
          Jaymin k, <span className="premiummatchescard_height">5’5”</span>
        </p>
        <p>
          30 year, <span className="premiummatchescard_language">Gujarati</span>
        </p>
        <p>Assistant professor</p>
      </div>
      <button className="premiummatchescard_connect_button">Connect now</button>
    </div>
  );
};

export default PremiumMatchesCard;
