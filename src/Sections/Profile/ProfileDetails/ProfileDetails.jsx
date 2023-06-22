import React, { useEffect, useState } from "react";
import "./ProfileDetails.css";
import img1 from "../../../Assets/signup/img1.png";
import EditIcon from "@mui/icons-material/Edit";
import googleAds from "../../../Assets/googleads.png";
import { Link } from "react-router-dom";

const ProfileDetails = () => {
  const [user_id, setUser_Id] = useState("");
  const [profile__photo, setProfile_Photo] = useState("");
  const token = localStorage.getItem("token");
  // console.log(token);

  useEffect(() => {
    fetchUser();
    // fetchProfileData();
  }, []);

  const fetchUser = async () => {
    try {
      const r = await fetch(
        "https://metrimonial.onrender.com/api/profile/userdetails",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      if (!r.ok) {
        throw new Error("Request failed");
      }

      const data = await r.json();
      // const userName = data?.data?.UserDetails[0]?.user_name || "";
      const user_id = data?.data?.UserDetails[0]?._id;
      // console.log(userName);
      // console.log(user_id);
      setUser_Id(user_id);
      // setName(userName);
      // console.log(user_id);
      const profilePhoto = data?.data?.UserDetails[0]?.profile_photo;
      console.log(profilePhoto);
      setProfile_Photo(profilePhoto);
    } catch (error) {
      console.error(error);
    }
  };

  // call this api to view the photos in recent visitors, premium matches and new matches
  // always use backticks when you want to pass custom variable in the api such as id
  // const fetchProfileData = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://metrimonial.onrender.com/api/profile/userdetails?user_id=${user_id}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization: token,
  //         },
  //       }
  //     );
  //     // console.log(response);
  //   } catch (error) {
  //     console.log("Error:", error);
  //   }
  // };

  const data = JSON.parse(localStorage.getItem("user"));
  // console.log(data);

  return (
    <div className="profile__details">
      <div>
        <div className="profile__card">
          <div className="profile__card_user">
            <img src={profile__photo} alt="" />
            <div className="profile__card_name">
              <h3>{data.user_name}</h3>
              <p>{data.contact_no}</p>
            </div>
            <EditIcon />
          </div>
          <div className="profile__card_status">
            <p className="profile__card_status_status">status</p>
            <p className="profile__card_status_value">
              {data.member_type} user
            </p>
          </div>
          <button className="profile__get_premium">
            <Link to="/selectplans">Get Premium</Link>
          </button>
        </div>
        <div className="profile__counts">
          <div className="profile__counts_card profile__counts_card1">
            <h3>6</h3>
            <p>Pending invitation</p>
          </div>
          <div className="profile__counts_card profile__counts_card2">
            <h3>12</h3>
            <p>Accepted invitation</p>
          </div>
          <div className="profile__counts_card profile__counts_card2">
            <h3>40</h3>
            <p>Recent Visitors</p>
          </div>
        </div>
      </div>

      <img src={googleAds} alt="" />
    </div>
  );
};

export default ProfileDetails;
