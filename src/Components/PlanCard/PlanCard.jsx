import React, { useState } from "react";
import "./PlanCard.css";
import { useNavigate } from "react-router-dom";

const PlanCard = ({ data }) => {
  const [cardId, setCardId] = useState("");
  // console.log(data._id);
  // console.log(data && data.plan_name);
  var NAVIgate = useNavigate();

  const redirectPlanDetails = () => {
    const plan_id = data._id;
    setCardId(plan_id); // Store the _id in the cardId state
    console.log(plan_id);
    NAVIgate(`/plandetails/displayplan/${plan_id}`);
  };
  return (
    <div className="plancard" onClick={redirectPlanDetails}>
      <div className="plancard__wrapper">
        <h3 className="plancard__heading">
          {/* SILVER | <span>{data && data.plan_name}</span> */}
        </h3>
        <hr />
        <div className="plancard_pricing">
          <h4>{data && data.plan_original_price}</h4>
          <p> {data && data.plan_selling_price} per month</p>
        </div>

        <div className="plancard__details">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
            expedita iusto veritatis, accusantium cum ex dolorum laborum ullam
            sit. Soluta, omnis culpa quod ipsum repellendus
          </p>
        </div>

        <button
          className="plancard__continue"
          onClick={() => NAVIgate("/plandetails")}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
