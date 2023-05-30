import React from "react";
import "./PremiumMatchesCard.css";
import PlaceIcon from "@mui/icons-material/Place";
import img1 from "../../Assets/profile/img1.png";
import BoltIcon from "@mui/icons-material/Bolt";

const PremiumMatchesCard = ({ prem }) => {
  console.log(prem);
  return (
    <div className="premiummatchescard">
      <div className="premiummatchescard_location">
        <PlaceIcon />
        <h4>{prem.home_town}</h4>
        <BoltIcon style={{ color: "#FCF204" }} />
      </div>
      <img src={img1} alt="" className="premiummatches_profile" />
      <div className="premiummatchescard_intro">
        <p>
          {prem.user_name},{" "}
          <span className="premiummatchescard_height">{prem.height}</span>
        </p>
        <p>
          {prem.age} year,{" "}
          <span className="premiummatchescard_language">
            {prem.mother_tongue}
          </span>
        </p>
        <p>{prem.job_title}</p>
      </div>
      <button className="premiummatchescard_connect_button">Connect</button>
    </div>
  );
};

export default PremiumMatchesCard;
