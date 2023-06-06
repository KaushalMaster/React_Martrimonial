import React, { useEffect, useState } from "react";
import "./Profiles.css";
// import ReceivedRequestCard from "../../Components/Profile2/ReceivedRequestCard/ReceivedRequestCard";
import ProfileCard from "./ProfileCard";

function Profiles({ horizontal, setValue }) {
  var ReceivedRequestsClasses =
    horizontal === true
      ? "profile2_received_request received_request_horizontal"
      : "profile2_received_request received_request_vertical";

  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://metrimonial.onrender.com/api/profile",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const responseData = await response.json();
      console.log(responseData.data);
      setProfileData(responseData.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="profile_received_requests_wrapper">
      <div className="profile_received_requests_wrapper_top">
        <h3 className="profile_requests_title">
          Received Request <span>( {profileData.length} )</span>
        </h3>
        <p
          onClick={() => {
            setValue("2");
          }}
        >
          View All
        </p>
      </div>
      <div className={ReceivedRequestsClasses} id="card">
        {profileData.map((request, index) => (
          <ProfileCard key={index} data={request} />
        ))}
      </div>
    </div>
  );
}

export default Profiles;
