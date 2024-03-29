import React, { useState, useEffect } from "react";
import ReceivedRequestCard from "../../../Components/Profile2/ReceivedRequestCard/ReceivedRequestCard";
import "./AcceptedRequests.css";

const AcceptedRequests = ({ horizontal, setValue }) => {
  var ReceivedRequestsClasses =
    horizontal === true
      ? "profile2_received_request accepted_request_horizontal"
      : "profile2_received_request accepted_request_vertical";

  const [error, setError] = useState(null);
  const [receivedData, setReceivedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://metrimonial.onrender.com/api/request/confirm",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const responseData = await response.json();
        // console.log(responseData.data[0].profile);
        setReceivedData(responseData.data);
        // console.log(receivedData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="profile_accepted_requests_wrapper">
      <div className="profile_accepted_requests_wrapper_top">
        <h3 className="profile_requests_title">
          Accepted Request <span>( 04 )</span>
        </h3>
        <p
          onClick={() => {
            setValue("3");
          }}
        >
          View All
        </p>
      </div>
      <div className={ReceivedRequestsClasses} id="card">
        {receivedData.map((request) => (
          <ReceivedRequestCard key={request._id} data={request} />
        ))}
      </div>
    </div>
  );
};

export default AcceptedRequests;
