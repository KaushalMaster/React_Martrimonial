import { Search } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import PlanCard from "../../Components/PlanCard/PlanCard";
import "./SelectPlan.css";

const SelectPlan = () => {
  const [receivedData, setReceivedData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://metrimonial.onrender.com/api/membership_plan",
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (!response.ok) {
          throw new error("Request Failed");
        }

        const responseData = await response.json();
        console.log(responseData);
        setReceivedData(responseData.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="selectplan">
      <div className="selectplan__upper">
        <p>Pricinig Table</p>
        <h2>
          Select Your <span>Plan</span>
        </h2>
        <p>Choose the plan that’s right for you.</p>
      </div>
      <div className="selectplan__middle">
        {/* <div className="selectplan_messages_search_input_wrapper">
          <Search />
          <input
            placeholder="Search"
            type="text"
            className="selectplan_messages_search_input"
          />
        </div>

        <div className="selectplan__middle_radios">
          <div className="selectplan__middle_radio_wrapper">
            <input type="radio" name="plan" id="" />
            <p>Gold</p>
          </div>
          <div className="selectplan__middle_radio_wrapper">
            <input type="radio" name="plan" id="" />
            <p>Silver</p>
          </div>
        </div> */}
      </div>

      <div className="selectplan__lower">
        {receivedData.map((request) => (
          <PlanCard key={request._id} data={request} />
        ))}
        {/* <PlanCard />
        <PlanCard />
        <PlanCard /> */}
      </div>
    </div>
  );
};
export default SelectPlan;
