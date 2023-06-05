import React, { useState } from "react";
import axios from "axios";
import "./Registration3.css";

function Registration3() {
  const token = localStorage.getItem("token");
  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        "https://metrimonial.onrender.com/api/family",
        {
          fatherOccupation: selectedFatherOccupation,
          motherOccupation: selectedMotherOccupation,
          numberOfBrothers: selectedNumberOfBrothers,
          numberOfSisters: selectedNumberOfSisters,
          numberOfMarriedBrothers: selectedNumberOfMarriedBrothers,
          numberOfMarriedSisters: selectedNumberOfMarriedSisters,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      // Handle the response as needed (e.g., show success message, navigate to the next page)
      console.log(response);
      console.log(response.data);
      console.log(response.data.data[0]);
      console.log("Family data updated:", response.data);
      // Add your desired actions here, such as navigating to the next page
    } catch (error) {
      console.error("Error updating family data:", error);
      // Handle the error as needed (e.g., show error message)
    }
  };

  const [selectedFatherOccupation, setSelectedFatherOccupation] = useState("");
  const [selectedMotherOccupation, setSelectedMotherOccupation] = useState("");
  const [selectedNumberOfBrothers, setSelectedNumberOfBrothers] = useState("");
  const [selectedNumberOfSisters, setSelectedNumberOfSisters] = useState("");
  const [selectedNumberOfMarriedBrothers, setSelectedNumberOfMarriedBrothers] =
    useState("");
  const [selectedNumberOfMarriedSisters, setSelectedNumberOfMarriedSisters] =
    useState("");

  return (
    <div>
      <div className="my_login__wrapepr">
        <div className="my_login my_login-padding">
          <h2>Family Details</h2>
          <div className="gender_state">
            <select
              className="gender"
              onChange={(e) => setSelectedFatherOccupation(e.target.value)}
            >
              <option value="">Father's Occupation</option>
              <option value="Service">Service</option>
              <option value="Job">Job</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <div className="gender_state">
            <select
              className="gender"
              onChange={(e) => setSelectedMotherOccupation(e.target.value)}
            >
              <option value="">Mother's Occupation</option>
              <option value="HouseWife">HouseWife</option>
              <option value="Service">Service</option>
              <option value="Job">Job</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <div className="gender_state">
            <select
              className="gender"
              onChange={(e) => setSelectedNumberOfBrothers(e.target.value)}
            >
              <option value="">No. Of Brother</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div className="gender_state">
            <select
              className="gender"
              onChange={(e) => setSelectedNumberOfSisters(e.target.value)}
            >
              <option value="">No. Of Sister</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div className="gender_state">
            <select
              className="gender"
              onChange={(e) =>
                setSelectedNumberOfMarriedBrothers(e.target.value)
              }
            >
              <option value="">No. Of Married Brother</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div className="gender_state">
            <select
              className="gender"
              onChange={(e) =>
                setSelectedNumberOfMarriedSisters(e.target.value)
              }
            >
              <option value="">No. Of Married Sister</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div id="recaptcha"></div>
          {/* onClick={handleSubmit} */}
          <button className="text-light" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration3;
