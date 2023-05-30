import React from "react";
import "./NewMatchesCard.css";
import PlaceIcon from "@mui/icons-material/Place";
import img1 from "../../Assets/profile/img1.png";

const NewMatchesCard = ({ data }) => {
  // console.log(data);
  // console.log(data.user_name);
  // console.log(data.age);
  return (
    <div className="newmatchescard">
      <div className="newmatchescard_location">
        <PlaceIcon />
        <h4>{data.home_town}</h4>
      </div>
      <img src={data.user_photo} alt="" className="newmatches_profile" />
      <div className="newmatchescard_intro">
        <p>
          {data.user_name}{" "}
          <span className="newmatchescard_height">{data.height}</span>
        </p>
        <p>
          {data.age} year,{" "}
          <span className="newmatchescard_language">{data.mother_tongue}</span>
        </p>
        <p>{data.job_title}</p>
      </div>
      <button className="newmatchescard_connect_button">Connect</button>
    </div>
  );
};

export default NewMatchesCard;
