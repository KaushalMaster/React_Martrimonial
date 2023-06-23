import React, { useEffect, useState } from "react";
import "./ProfileDetails.css";
import img1 from "../../../Assets/signup/img1.png";
import EditIcon from "@mui/icons-material/Edit";
import googleAds from "../../../Assets/googleads.png";
import { Link, useNavigate } from "react-router-dom";

const ProfileDetails = () => {
  const [user_id, setUser_Id] = useState("");
  const [profile__photo, setProfile_Photo] = useState("");
  const [profileData, setProfileData] = useState("");
  const [name, setName] = useState("");
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
      console.log(data);
      const my_data = data.data.UserDetails;
      setProfileData(my_data);
      console.log(my_data);
      const userName = data?.data?.UserDetails?.user_name || "";
      const user_id = data?.data?.UserDetails[0]?._id;
      // console.log(userName);
      // console.log(user_id);
      setUser_Id(user_id);
      setName(userName);
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

  const navigate = useNavigate();
  const EditProfile = () => {
    navigate("/registration1");
  };

  return (
    <div className="profile__details">
      <div>
        <div className="profile__card">
          <div className="user_data mt-5">
            <h3>{name}</h3>
            <p>{profileData.contact_no}</p>
          </div>
          <div className="profile__card_user">
            {/* <div className="profile__card_name"></div> */}
            <div className="test">
              <img src={profileData.user_photo} alt="profile_photo" />
              <p className="profile__card_status_status mt-2">status</p>
            </div>
            <div className="edit_pencil">
              <EditIcon className="editIcon" onClick={EditProfile} />
              <p className="profile__card_status_value">
                {profileData.member_type} user
              </p>
            </div>
          </div>
          <div className="profile__card_status"></div>
          <button className="profile__get_premium">
            <Link to="/selectplan">Get Premium</Link>
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
