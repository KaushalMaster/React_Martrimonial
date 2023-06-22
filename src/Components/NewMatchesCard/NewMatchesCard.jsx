import React from "react";
import "./NewMatchesCard.css";
import PlaceIcon from "@mui/icons-material/Place";
import img1 from "../../Assets/profile/img1.png";

const NewMatchesCard = ({ data }) => {
  console.log(data._id);
  // console.log(data.user_name);
  // console.log(data.age);

  const SendRequest = async () => {
    console.log(data._id);
    const response = await fetch(
      "https://metrimonial.onrender.com/api/request",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          receiver_id: data._id,
          request_status: "pending",
          request_type: "request",
        }),
      }
    );
    console.log(response);
    if (response.status == 200) {
      alert("Request Send Successfully");
    }
  };

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
      <button className="newmatchescard_connect_button" onClick={SendRequest}>
        Connect
      </button>
    </div>
  );
};

export default NewMatchesCard;
