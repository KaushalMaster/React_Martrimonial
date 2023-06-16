import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SignUpJourneyCard from "../../Components/SignUpJourneyCard/SignUpJourneyCard";
import axios from "axios";
import "./Registration1.css";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";

const Registration1 = () => {
  const Height = [
    "4’0”",
    "4’1”",
    "4’2”",
    "4’3”",
    "4’4”",
    "4’5”",
    "4’6”",
    "4’7”",
    "4’8”",
    "4’9”",
    "4’10”",
    "4’11”",
    "5’0”",
    "5’1”",
    "5’2”",
    "5’3”",
    "5’4”",
    "5’5”",
    "5’6”",
    "5’7”",
    "5’8”",
    "5’9”",
    "5’10”",
    "5’11”",
    "6’0”",
    "6’1”",
    "6’2”",
    "6’3”",
    "6’4”",
    "6’5”",
    "6’6”",
    "6’7”",
    "6’8”",
    "6’9”",
    "6’10”",
    "6’11”",
    "7’0”",
    "7’1”",
    "7’2”",
    "7’3”",
    "7’4”",
    "7’5”",
    "7’6”",
    "7’7”",
    "7’8”",
    "7’9”",
    "7’10”",
    "7’11”",
  ];

  let navigate = useNavigate();
  const handleNext = () => {
    const data = {
      gender: document.querySelector(".gender").value,
      dob: document.querySelector(".dob").value,
      height: document.querySelector(".height").value,
      weight: document.querySelector(".weight").value,
      city: document.querySelector(".city").value,
      settle_down: document.querySelector(".settle-down").value,
      religion: document.querySelector(".religion").value,
      community: document.querySelector(".community").value,
      mother_tongue: document.querySelector(".mother-tongue").value,
      marital_status: document.querySelector(".marital-status").value,
      food_preference: document.querySelector(".food-preference").value,
      smoke: document.querySelector(".smoke").value,
      drink: document.querySelector(".drink").value,
      bio: document.querySelector("#bio").value,
    };
    console.log(data);
    let path = `/Registration2`;
    navigate(path, { data: { data } });
  };

  const [motherTongues, setMotherTongues] = useState([]);
  const [maritalStatus, setMaritalStatus] = useState([]);
  const [foodPreference, setFoodPreference] = useState([]);
  const [smokePreference, setSmokePreference] = useState([]);
  const [drinkPreference, setDrinkPreference] = useState([]);
  const [religion, setReligion] = useState([]);
  const [communities, setCommunities] = useState([]);

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
        fetchCommunities(response.data.data[0].religious_name);
        if (Array.isArray(response.data.data)) {
          setReligion(response.data.data);
        } else {
          setReligion([response.data.data]);
        }
      } catch (error) {
        console.error("Error fetching Religion Status:", error);
      }
    };

    const fetchCommunities = async (religiousName) => {
      try {
        const response = await axios.get(
          `https://metrimonial.onrender.com/api/community?religious_name=${religiousName}`
        );

        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.data[0]);
        // console.log(response.data.data[0].community_name);

        if (Array.isArray(response.data.data)) {
          setCommunities(response.data.data);
        } else {
          setCommunities([response.data.data]);
        }
      } catch (error) {
        console.error("Error fetching Communities:", error);
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
            <select className="gender" required>
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <input placeholder="DOB" type="Date" className="dob" />
          <div className="gender_state">
            <select className="height" required>
              <option value="">Height</option>
              {Height.map((height, index) => (
                <option key={index} value={height}>
                  {height}
                </option>
              ))}
            </select>
          </div>
          <input placeholder="Weight" type="text" className="weight" />
          <input placeholder="City" type="text" className="city" />
          <div className="gender_state">
            <select className="settle-down" required>
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
            <select className="religion" required>
              <option value="">Religion</option>
              {religion &&
                religion.map((religion, index) => (
                  <option key={index} value={religion.religious_name}>
                    {religion.religious_name}
                  </option>
                ))}
            </select>
          </div>
          <div className="gender_state">
            <select className="community" required>
              <option value="">Community</option>
              {communities &&
                communities.map((communities, index) => (
                  <option key={index} value={communities.religious_name}>
                    {communities.community_name}
                  </option>
                ))}
            </select>
          </div>
          <div className="gender_state">
            <select className="mother-tongue" required>
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
            <select className="marital-status" required>
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
            <select className="food-preference" required>
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
            <select className="smoke" required>
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
            <select className="drink" required>
              <option value="">Drink</option>
              {drinkPreference &&
                drinkPreference.map((drinkPreference, index) => (
                  <option key={index} value={drinkPreference.drink_value}>
                    {drinkPreference.drink_value}
                  </option>
                ))}
            </select>
          </div>
          <textarea
            name="bio"
            id="bio"
            cols="30"
            rows="5"
            className="bio"
            placeholder="Enter BIO"
            required
          ></textarea>
          <div id="recaptcha"></div>
          <button className="text-light" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration1;
