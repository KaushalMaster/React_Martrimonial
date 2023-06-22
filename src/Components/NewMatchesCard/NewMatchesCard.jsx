import React, { useEffect } from "react";
import "./NewMatchesCard.css";
import PlaceIcon from "@mui/icons-material/Place";
import img1 from "../../Assets/profile/img1.png";
import { useState } from "react";

const NewMatchesCard = ({ data }) => {
  // console.log(data);
  // console.log(data.user_name);
  // console.log(data.age);
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [ids, setIds] = useState([]);
  const [error, setError] = useState();

  // useEffect(() => {
  //   FetchData();
  // }, []);
  // const FetchData = async () => {
  //   try {
  //     const requests = await fetch(
  //       "https://metrimonial.onrender.com/api/request/pending",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: localStorage.getItem("token"), // Include the token in the Authorization header
  //         },
  //       }
  //     );

  //     if (!requests.ok) {
  //       throw new Error("Request failed");
  //     }

  //     const responseData = await requests.json();
  //     setRequest_Data(responseData.data[0]?.sent || []);
  //     console.log(responseData);
  //     console.log(responseData.data[0]?.sent._id);
  //     // console.log(responseData.data[0].sent);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  // const FetchData = async () => {
  //   try {
  //     const requests = await fetch(
  //       "https://metrimonial.onrender.com/api/request/pending",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: localStorage.getItem("token"), // Include the token in the Authorization header
  //         },
  //       }
  //     );

  //     if (!requests.ok) {
  //       throw new Error("Request failed");
  //     }

  //     const responseData = await requests.json();
  //     console.log(responseData);
  //     const extractedIds = responseData.map((item) => item._id);
  //     setIds(extractedIds);
  //     console.log(extractedIds);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

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
      setIsRequestSent(true);

      alert("Request Send Successfully");

      // const user_sent_request_id = data._id;
      // const send_request_id = ids;
      // console.log(user_sent_request_id);
      // console.log(send_request_id);

      // if (user_sent_request_id == send_request_id) {
      // }
    } else {
      const connectbtn = document.getElementById("connect_btn").value;
      console.log(connectbtn);
      connectbtn.innerHTML = "Sent";
    }
  };

  return (
    <div className="newmatchescard">
      <div className="newmatchescard_location">
        <PlaceIcon />
        <h4>{data.home_town}</h4>
      </div>
      <img src={data.profile_photo} alt="" className="newmatches_profile" />
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
      {/* <button
        className="newmatchescard_connect_button"
        id="connect_btn"
        onClick={SendRequest}
      >
        Connect
      </button> */}
      <button
        className="newmatchescard_connect_button"
        id="connect_btn"
        onClick={SendRequest}
        disabled={isRequestSent}
      >
        {isRequestSent ? "Sent" : "Connect"}
      </button>
    </div>
  );
};

export default NewMatchesCard;
