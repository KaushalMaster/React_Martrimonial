import React from "react";
import "./PremiumMatchesCard.css";
import PlaceIcon from "@mui/icons-material/Place";
import img1 from "../../Assets/profile/img1.png";
import BoltIcon from "@mui/icons-material/Bolt";
import { useNavigate } from "react-router-dom";

const PremiumMatchesCard = ({ prem }) => {
  console.log(prem);

  const navigate = useNavigate();
  const redirectUser = () => {
    const user_id = prem._id;
    console.log(user_id);
    navigate(`/userprofile/${user_id}`);
    // console.log(data);
  };

  return (
    <div className="premiummatchescard">
      <div className="premiummatchescard_location">
        <PlaceIcon />
        <h4>{prem.home_town}</h4>
        <BoltIcon style={{ color: "#FCF204" }} />
      </div>
      <img src={prem.profile_photo} alt="" className="premiummatches_profile" />
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
      <button
        className="premiummatchescard_connect_button"
        onClick={redirectUser}
      >
        View Profile
      </button>
    </div>
  );
};

export default PremiumMatchesCard;
