import React from "react";
import "./NewMatchesCard.css";
import PlaceIcon from "@mui/icons-material/Place";
import img1 from "../../Assets/profile/img1.png";

const NewMatchesCard = () => {
  return (
    <div className="newmatchescard">
      <div className="newmatchescard_location">
        <PlaceIcon />
        <h4>Ahmedabad</h4>
      </div>
      <img src={img1} alt="" />
      <div className="newmatchescard_intro">
        <p>
          Jaymin k, <span className="newmatchescard_height">5’5”</span>
        </p>
        <p>
          30 year, <span className="newmatchescard_language">Gujarati</span>
        </p>
        <p>Assistant professor</p>
      </div>
      <button className="newmatchescard_connect_button">Connect now</button>
    </div>
  );
};

export default NewMatchesCard;
