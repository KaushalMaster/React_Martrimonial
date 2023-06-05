import React, { useEffect, useState } from "react";
import "./Registration4.css";
import country from "../../country.json";

function Registration4() {
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
      setMaritalStatus(responseData.data.marital_status);
      setReligion(responseData.data.religion);
      setMotherTongues(responseData.data.mother_tongue);
      setHighestQualification(responseData.data.highest_qualification);
      setSalary(responseData.data.salary);
      setFoodPreference(responseData.data.food_preference);
      setDrinkPreference(responseData.data.drink);
      setSmokePreference(responseData.data.smoke);
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
    // console.log(stateid);
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
              name="Age"
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
                name="Age1"
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
          <div className="range-container">
            Height:
            <div className="age_from"></div>
            From:
            <input
              type="range"
              id="height"
              name="height"
              min="0"
              max="7"
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
                id="height1"
                name="height1"
                min="0"
                max="7"
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
                <option value={getstate.state_id} key={index}>
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
          <button className="text-light">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Registration4;
