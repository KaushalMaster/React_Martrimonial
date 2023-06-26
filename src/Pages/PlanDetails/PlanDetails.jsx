import React, { useEffect, useState } from "react";
import "./PlanDetails.css";
import PlanCard from "../../Components/PlanCard/PlanCard";
import { useParams } from "react-router-dom";
import PlanDetailsCard from "../../Components/PlanDetailsCard/PlanDetailsCard";

const PlanDetails = () => {
  const [membershipdata, setMembershipData] = useState();
  const { id } = useParams();

  const membershipPlan = async () => {
    try {
      const response = await fetch(
        `https://metrimonial.onrender.com/api/membership_plan/displayplan?_id=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setMembershipData(data);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  useEffect(() => {
    membershipPlan();
  }, [id]);

  return (
    <div className="plandetails">
      <div className="plandetails__left">
        <p>You are getting</p>
        <PlanDetailsCard data={membershipdata} />
      </div>
      <div className="plandetails__right">
        <p>Payment Information</p>
        <form className="plandetails__payment_form">
          <div className="plandetails__payment_form_left">
            <div className="plandetails_radio_wrapper">
              <input type="radio" name="plan" id="" />
              <p>Credit card</p>
            </div>
            <div className="plandetails_radio_wrapper">
              <input type="radio" name="plan" id="" />
              <p>Debit card</p>
            </div>
            <div className="plandetails_radio_wrapper">
              <input type="radio" name="plan" id="" />
              <p>Net Banking</p>
            </div>
            <div className="plandetails_radio_wrapper">
              <input type="radio" name="plan" id="" />
              <p>UPI</p>
            </div>
          </div>
          <div className="plandetails__payment_form_right">
            <p className="plandetails__payment_form_right_lable">Card number</p>
            <input
              type="text"
              className="plandetails__payment_form_right_input"
            />
            <p className="plandetails__payment_form_right_lable">Card number</p>
            <input
              type="text"
              className="plandetails__payment_form_right_input"
            />
            <div>
              <div className="expiry">
                <p className="plandetails__payment_form_right_lable">Expiry</p>
                <div className="expiry_inputs">
                  <input type="month" name="" id="" />
                </div>
              </div>
              <div className="cvv">
                <p className="plandetails__payment_form_right_lable">CVV</p>
                <input
                  type="number"
                  name=""
                  id=""
                  maxLength={3}
                  minLength={3}
                />
              </div>
            </div>
            <button className="payment">
              Pay {membershipdata?.data[0]?.plan_original_price}/-
            </button>
            <p className="payment_safty">
              Your payments are 100% safe and secure
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanDetails;
