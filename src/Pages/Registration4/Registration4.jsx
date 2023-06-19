import React, { useEffect, useState } from "react";
import "./Registration4.css";
import country from "../../country.json";

function Registration4() {
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

  const [maritalStatus, setMaritalStatus] = useState([]);
  const [religion, setReligion] = useState([]);
  const [motherTongues, setMotherTongues] = useState([]);
  const [highestQualification, setHighestQualification] = useState([]);
  const [salary, setSalary] = useState([]);
  const [foodPreference, setFoodPreference] = useState([]);
  const [drinkPreference, setDrinkPreference] = useState([]);
  const [smokePreference, setSmokePreference] = useState([]);
  const [ageValue, setAgeValue] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [startAgeValue, setStartAgeValue] = useState(0);
  const [endAgeValue, setEndAgeValue] = useState(70);
  const [city, setCity] = useState("");
  const [isPreferenceExist, setIsPreferenceExist] = useState(false);
  const [height, setHeight] = useState([]);

  useEffect(() => {
    loadPreference();
  }, []);

  const Token = localStorage.getItem("token");

  const loadPreference = async () => {
    try {
      const response = await fetch(
        "https://metrimonial.onrender.com/api/preference/preferencedata",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: Token,
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      console.log(responseData.data);
      setHeight(responseData.data.height);
      console.log(height);

      const preferenceData = responseData.data;

      setMaritalStatus(preferenceData.marital_status);
      setReligion(preferenceData.religion);
      setMotherTongues(preferenceData.mother_tongue);
      setHighestQualification(preferenceData.highest_qualification);
      setSalary(preferenceData.salary);
      setFoodPreference(preferenceData.food_preference);
      setDrinkPreference(preferenceData.drink);
      setSmokePreference(preferenceData.smoke);

      // Check if preference exists
      setIsPreferenceExist(Object.keys(preferenceData).length > 0);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const [countryid, setCountryid] = useState("");
  const [state, setState] = useState([]);

  const handlecounty = (e) => {
    const getcountryId = e.target.value;
    const getStatedata = country.find(
      (country) => country.country_id === getcountryId
    ).states;
    setState(getStatedata);
    setCountryid(getcountryId);
  };

  const handlestate = (e) => {
    const stateid = e.target.value;
    console.log(stateid);
    setCity(stateid); // Set the value of city
  };

  // const handleAgeHover = (e) => {
  //   const ageInput = e.target;
  //   const ageTooltip = ageInput.nextElementSibling;
  //   const currentValue = ageInput.value;
  //   ageTooltip.textContent = currentValue;
  //   ageTooltip.style.display = "inline";
  // };

  // const handleAgeLeave = (e) => {
  //   const ageInput = e.target;
  //   const ageTooltip = ageInput.nextElementSibling;
  //   ageTooltip.style.display = "none";
  // };

  const handleStartAgeChange = (e) => {
    setStartAgeValue(e.target.value);
  };

  const handleEndAgeChange = (e) => {
    setEndAgeValue(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAgeValue(e.target.value);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [minHeightInput, setMinHeightInput] = useState("");
  const [maxHeightInput, setMaxHeightInput] = useState("");

  const handleMinHeightChange = (e) => {
    setMinHeightInput(e.target.value);
  };

  const handleMaxHeightChange = (e) => {
    setMaxHeightInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isPreferenceExist) {
        // Preference already exists, make a PUT request to update
        const updateResponse = await fetch(
          "https://metrimonial.onrender.com/api/preference",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: Token,
            },
            body: JSON.stringify({
              marital_status: maritalStatus,
              religion: religion,
              mother_tongue: motherTongues,
              min_height: minHeightInput,
              max_height: maxHeightInput,
              age_from: startAgeValue,
              age_to: endAgeValue,
              highest_qualification: highestQualification,
              annual_income: salary,
              food_preference: foodPreference,
              drink: drinkPreference,
              smoke: smokePreference,
              country: countryid,
              state: state,
              city: city,
            }),
          }
        );

        const updateData = await updateResponse.json();
        console.log(updateData);
        // Handle the update response as needed
      } else {
        // Preference doesn't exist, make a POST request to create
        const createResponse = await fetch(
          "https://metrimonial.onrender.com/api/preference",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: Token,
            },
            body: JSON.stringify({
              marital_status: maritalStatus,
              religion: religion,
              mother_tongue: motherTongues,
              min_height: minHeightInput,
              max_height: maxHeightInput,
              age_from: startAgeValue,
              age_to: endAgeValue,
              highest_qualification: highestQualification,
              annual_income: salary,
              food_preference: foodPreference,
              drink: drinkPreference,
              smoke: smokePreference,
              country: countryid,
              state: state,
              city: city,
            }),
          }
        );

        const createData = await createResponse.json();
        console.log(createData);
        // Handle the create response as needed
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return (
    <div>
      <div className="p_login__wrapepr">
        <div className="p_login p_login-padding">
          <h2 className="title_partnerpreference">Partner Preference</h2>

          <div className="range-container">
            Age:
            <div className="age_from"></div>
            From:
            <input
              type="range"
              id="Age"
              name="min_age"
              min="0"
              max="70"
              placeholder="Start Age"
              className="age_scroll"
              value={startAgeValue}
              onChange={handleStartAgeChange}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <div className="age_to">
              TO:
              <input
                type="range"
                id="Age1"
                name="max_age"
                min="0"
                max="70"
                placeholder="End Age"
                className="age_scroll"
                value={endAgeValue}
                onChange={handleEndAgeChange}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </div>
          {isHovered && (
            <span id="age-tooltip">
              {startAgeValue} - {endAgeValue}
            </span>
          )}

          {/* <input placeholder="Height" type="text" /> */}
          <div className="gender_state">
            <select className="gender">
              <option value="">min Height</option>
              {height.map((ele, index) => (
                <option key={index} value={ele}>
                  {ele.height_value}
                </option>
              ))}
            </select>
          </div>
          <div className="gender_state">
            <select className="gender">
              <option value="">max Height</option>
              {height.map((ele, index) => (
                <option key={index} value={ele}>
                  {ele.height_value}
                </option>
              ))}
            </select>
          </div>
          <input placeholder="Weight" type="text" />
          <div className="gender_state">
            <select className="gender">
              <option value="">Marital Status</option>
              {maritalStatus &&
                maritalStatus.map((maritalStatus, index) => (
                  <option key={index} value={maritalStatus.status}>
                    {maritalStatus.status}
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
          <div className="gender_state">
            <select className="gender">
              <option value="">Mother Tongue</option>
              {motherTongues &&
                motherTongues.map((motherTongues, index) => (
                  <option key={index} value={motherTongues.mt_name}>
                    {motherTongues.mt_name}
                  </option>
                ))}
            </select>
          </div>

          <div className="gender_state">
            <select className="gender">
              <option value="">Highest Qualification</option>
              {highestQualification &&
                highestQualification.map((highestQualification, index) => (
                  <option key={index} value={highestQualification.hq_name}>
                    {highestQualification.hq_name}
                  </option>
                ))}
            </select>
          </div>

          <div className="gender_state">
            <select className="gender">
              <option value="">Salary</option>
              {salary &&
                salary.map((salary, index) => (
                  <option key={index} value={salary.salary_value}>
                    {salary.salary_value}
                  </option>
                ))}
            </select>
          </div>

          <div className="gender_state">
            <select className="gender" onChange={handlecounty}>
              <option value="">Country</option>
              {country.map((country, index) => (
                <option value={country.country_id} key={index}>
                  {country.country_name}
                </option>
              ))}
              <option value="USA">USA</option>
            </select>
          </div>

          <div className="gender_state">
            <select className="gender" onChange={handlestate}>
              <option value="">State</option>
              {state.map((getstate, index) => (
                <option value={getstate.stateid} key={index}>
                  {getstate.state_name}
                </option>
              ))}
            </select>
          </div>

          <input type="text" name="city" id="city" placeholder="City" />

          <div className="gender_state">
            <select className="gender">
              <option value="">Diet</option>
              {highestQualification &&
                foodPreference.map((foodPreference, index) => (
                  <option key={index} value={foodPreference.fp_name}>
                    {foodPreference.fp_name}
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

export default Registration4;
