import React, { useEffect, useState } from "react";
import ReceivedRequestCard from "../../../Components/Profile2/ReceivedRequestCard/ReceivedRequestCard";
import "./DeclinedRequests.css";

const DeclinedRequests = ({ horizontal, setValue }) => {
  var declinedRequestsClasses =
    horizontal === true
      ? "profile2_declined_request declined_request_horizontal"
      : "profile2_declined_request declined_request_vertical";

  const [error, setError] = useState(null);
  const [receivedData, setReceivedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://metrimonial.onrender.com/api/request/cancel",
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
        console.log(responseData);

        // const receivedRequests = responseData.data[0]?.profile || [];
        setReceivedData(responseData.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="profile_declined_requests_wrapper">
      <div className="profile_declined_requests_wrapper_top">
        <h3 className="profile_requests_title">
          Declined Requests <span>(04)</span>
        </h3>
        <p
          onClick={() => {
            setValue("4");
          }}
        >
          View All
        </p>
      </div>
      <div className={declinedRequestsClasses} id="card">
        {receivedData.map((request) => (
          <ReceivedRequestCard key={request._id} data={request} />
        ))}
      </div>
    </div>
  );
};

export default DeclinedRequests;
