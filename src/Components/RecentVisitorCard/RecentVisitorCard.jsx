import PlaceIcon from "@mui/icons-material/Place";
import React from "react";
import img1 from "../../Assets/profile/img1.png";
import BoltIcon from "@mui/icons-material/Bolt";
import { useNavigate } from "react-router-dom";

import "./RecentVisitorCard.css";

const RecentVisitorCard = ({ rev }) => {
  const navigate = useNavigate(); // Move the useNavigate hook to the top level

  const data = rev?.profile?.[0];
  console.log(data?._id);
  if (!data) {
    return null;
  }

  const redirectUser = () => {
    const user_id = data._id;
    console.log(user_id);
    navigate(`/userprofile/${user_id}`);
    // console.log(data);
  };

  return (
    <div className="recentvisitorcard" onClick={redirectUser}>
      <div className="recentvisitorcard_location">
        <PlaceIcon />
        <h4>{data.home_town}</h4>
        <BoltIcon style={{ color: "#FCF204" }} />
      </div>
      <img src={data.user_photo} alt="" className="user_image" />
      <div className="recentvisitorcard_intro">
        <p>
          {data.user_name},{" "}
          <span className="newmatchescard_height">{data.height}</span>
        </p>
        <p>
          {data.age} year,{" "}
          <span className="newmatchescard_language">{data.mother_tongue}</span>
        </p>
        <p>{data.job_title}</p>
      </div>
      <button className="recentvisitorcard_connect_button">Connect</button>
    </div>
  );
};

export default RecentVisitorCard;
