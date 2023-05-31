import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SignUpJourneyCard from "../../Components/SignUpJourneyCard/SignUpJourneyCard";
import axios from "axios";
import "./Registration1.css";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";

const Registration1 = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/Profile`;
    navigate(path);
  };

  const [motherTongues, setMotherTongues] = useState([]);
  const [maritalStatus, setMaritalStatus] = useState([]);
  const [foodPreference, setFoodPreference] = useState([]);
  const [smokePreference, setSmokePreference] = useState([]);
  const [drinkPreference, setDrinkPreference] = useState([]);
  const [religion, setReligion] = useState([]);
  const [settleDown, setSettleDown] = useState([]);

  useEffect(() => {
    const fetchMotherTongues = async () => {
      try {
        const response = await axios.get(
          "https://metrimonial.onrender.com/api/mother_tongue"
        );
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.data[0]);

        if (Array.isArray(response.data.data)) {
          setMotherTongues(response.data.data);
        } else {
          setMotherTongues([response.data.data]);
        }
      } catch (error) {
        console.error("Error fetching mother tongues:", error);
      }
    };

    const fetchMaritalStatus = async () => {
      try {
        const response = await axios.get(
          "https://metrimonial.onrender.com/api/marital_status"
        );
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.data[0].status);

        if (Array.isArray(response.data.data)) {
          setMaritalStatus(response.data.data);
        } else {
          setMaritalStatus([response.data.data]);
        }
      } catch (error) {
        console.error("Error fetching Marital Status:", error);
      }
    };

    const fetchFoodPreference = async () => {
      try {
        const response = await axios.get(
          "https://metrimonial.onrender.com/api/food_preference"
        );
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.data[0].fp_name);

        if (Array.isArray(response.data.data)) {
          setFoodPreference(response.data.data);
        } else {
          setFoodPreference([response.data.data]);
        }
      } catch (error) {
        console.error("Error fetching Food Preference:", error);
      }
    };

    const fetchSmokePreference = async () => {
      try {
        const response = await axios.get(
          "https://metrimonial.onrender.com/api/smoke_status"
        );
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.data[0].smoke_value);

        if (Array.isArray(response.data.data)) {
          setSmokePreference(response.data.data);
        } else {
          setSmokePreference([response.data.data]);
        }
      } catch (error) {
        console.error("Error fetching Smoke Status:", error);
      }
    };

    const fetchDrinkPreference = async () => {
      try {
        const response = await axios.get(
          "https://metrimonial.onrender.com/api/drink_status"
        );
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.data[0].drink_value);

        if (Array.isArray(response.data.data)) {
          setDrinkPreference(response.data.data);
        } else {
          setDrinkPreference([response.data.data]);
        }
      } catch (error) {
        console.error("Error fetching Drink Status:", error);
      }
    };

    const fetchReligionPreference = async () => {
      try {
        const response = await axios.get(
          "https://metrimonial.onrender.com/api/religion"
        );
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.data[0].religious_name);

        if (Array.isArray(response.data.data)) {
          setReligion(response.data.data);
        } else {
          setReligion([response.data.data]);
        }
      } catch (error) {
        console.error("Error fetching Religion Status:", error);
      }
    };

    const fetchSettleDown = async () => {
      try {
        const response = await axios.get(
          "https://metrimonial.onrender.com/api/settle_down_value"
        );
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.data[0].settle_down_value);

        if (Array.isArray(response.data.data)) {
          setSettleDown(response.data.data);
        } else {
          setSettleDown([response.data.data]);
        }
      } catch (error) {
        console.error("Error fetching Settle Down Status:", error);
      }
    };

    fetchMotherTongues();
    fetchMaritalStatus();
    fetchFoodPreference();
    fetchSmokePreference();
    fetchDrinkPreference();
    fetchReligionPreference();
    fetchSettleDown();
  }, []);

  return (
    <div>
      <div className="login__wrapper1">
        <div className="login">
          <h2 className="personal_details">Personal Details</h2>
          <div className="gender_state">
            <select className="gender">
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <input placeholder="DOB" type="Date" className="dob" />
          <input placeholder="Height" type="text" />
          <input placeholder="Weight" type="text" />
          <input placeholder="City" type="text" />
          <div className="gender_state">
            <select className="gender">
              <option value="">Settle Down</option>
              {settleDown &&
                settleDown.map((settleDown, index) => (
                  <option key={index} value={settleDown.settle_down_value}>
                    {settleDown.settle_down_value}
                  </option>
                ))}
            </select>
          </div>
          <div className="gender_state">
            <select className="gender">
              <option value="">Religion</option>
              {religion &&
                religion.map((religion, index) => (
                  <option key={index} value={religion.religious_name}>
                    {religion.religious_name}
                  </option>
                ))}
            </select>
          </div>
          <input placeholder="Community" type="text" />
          <div className="gender_state">
            <select className="gender">
              <option value="">Mothers Tongue</option>
              {motherTongues &&
                motherTongues.map((tongue, index) => (
                  <option key={index} value={tongue.mt_name}>
                    {tongue.mt_name}
                  </option>
                ))}
            </select>
          </div>
          <div className="gender_state">
            <select className="gender">
              <option value="">Marital Status</option>
              {maritalStatus &&
                maritalStatus.map((marital, index) => (
                  <option key={index} value={marital.status}>
                    {marital.status}
                  </option>
                ))}
            </select>
          </div>
          <div className="gender_state">
            <select className="gender">
              <option value="">Food Preference</option>
              {foodPreference &&
                foodPreference.map((foodPreference, index) => (
                  <option key={index} value={foodPreference.fp_name}>
                    {foodPreference.fp_name}
                  </option>
                ))}
            </select>
          </div>
          <div className="gender_state">
            <select className="gender">
              <option value="">Smoke</option>
              {smokePreference &&
                smokePreference.map((smokePreference, index) => (
                  <option key={index} value={smokePreference.smoke_value}>
                    {smokePreference.smoke_value}
                  </option>
                ))}
            </select>
          </div>
          <div className="gender_state">
            <select className="gender">
              <option value="">Drink</option>
              {drinkPreference &&
                drinkPreference.map((drinkPreference, index) => (
                  <option key={index} value={drinkPreference.drink_value}>
                    {drinkPreference.drink_value}
                  </option>
                ))}
            </select>
          </div>
          <div id="recaptcha"></div>
          <button className="text-light" onClick={routeChange}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration1;
