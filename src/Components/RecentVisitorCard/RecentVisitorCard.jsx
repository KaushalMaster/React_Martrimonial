import PlaceIcon from "@mui/icons-material/Place";
import React from "react";
import img1 from "../../Assets/profile/img1.png";
import "./RecentVisitorCard.css";

const RecentVisitorCard = ({ rev }) => {
  const data = rev?.profile?.[0];

  // console.log(rev.profile[0]);
  if (!data) {
    return null;
  }

  // console.log(data.home_town);;

  // console.log(inv.profile[0]);

  return (
    <div className="recentvisitorcard">
      <div className="recentvisitorcard_location">
        <PlaceIcon />
        <h4>{data.home_town}</h4>
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
