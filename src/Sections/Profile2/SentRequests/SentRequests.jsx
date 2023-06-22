import React, { useEffect, useState } from "react";
import ReceivedRequestCard from "../../../Components/Profile2/ReceivedRequestCard/ReceivedRequestCard";
import "./SentRequests.css";

const SentRequests = ({ horizontal, setValue }) => {
  var ReceivedRequestsClasses =
    horizontal == true
      ? "profile2_sent_request sent_request_horizontal"
      : "profile2_sent_request sent_request_vertical";

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [requestData, setRequestData] = useState([]);

  const FetchData = async () => {
    try {
      const response = await fetch(
        "https://metrimonial.onrender.com/api/request/pending",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"), // Include the token in the Authorization header
          },
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const responseData = await response.json();
      setRequestData(responseData.data[0]?.sent || []);
      console.log(responseData);
      // console.log(responseData.data[0].sent);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="profile_sent_requests_wrapper">
      <div className="profile_sent_requests_wrapper_top">
        <h3 className="profile_requests_title">
          Sent Requests <span>( 04 )</span>
        </h3>
        <p
          onClick={() => {
            setValue("4");
          }}
        >
          View All
        </p>
      </div>
      <div className={ReceivedRequestsClasses} id="card">
        {requestData.map((request) => (
          <ReceivedRequestCard key={request._id} data={request} />
        ))}
      </div>
    </div>
  );
};

export default SentRequests;
