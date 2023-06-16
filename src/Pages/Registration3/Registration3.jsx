import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Registration3.css";
import { useNavigate } from "react-router-dom";

function Registration3() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://metrimonial.onrender.com/api/family",
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        setData(response.data.data);
        // console.log(response.data);
        // console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const token = localStorage.getItem("token");

  let navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (selectedFatherOccupation === data.father_occupation) {
        // If the selected father's occupation is equal to the fetched value, make a PUT request
        console.log("PUT API CALLED !!!");
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

        console.log(response);
        console.log(response.data);
        console.log(response.data.data[0]);
        console.log("Family data updated:", response.data);
        // Add your desired actions here, such as navigating to the next page
      } else {
        // If the selected father's occupation is different, make a POST request
        console.log("POST API CALLED");
        const response = await axios.post(
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

        console.log(response);
        console.log(response.data);
        console.log(response.data.data[0]);
        console.log("Family data updated:", response.data);
        // Add your desired actions here, such as navigating to the next page
      }
    } catch (error) {
      console.error("Error updating family data:", error);
      // Handle the error as needed (e.g., show error message)
    }

    let path = `/Registration4`;
    navigate(path);
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
            <input
              type="text"
              name="father_occupation"
              id="father_occupation"
              placeholder="Father's Occupation"
              value={data ? data.father_occupation : ""}
            />
          </div>
          <div className="gender_state">
            <input
              type="text"
              name="mother_occupation"
              id="mother_occuption"
              placeholder="Mother's Occupation"
              value={data ? data.mother_occupation : ""}
            />
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
