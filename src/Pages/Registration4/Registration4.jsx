import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration4.css";
import country from "../../country.json";
import { faHandFist } from "@fortawesome/free-solid-svg-icons";

function Registration4() {
  const navigate = useNavigate();

  const [maritalStatus, setMaritalStatus] = useState([]);
  const [religion, setReligion] = useState([]);
  const [motherTongues, setMotherTongues] = useState([]);
  const [highestQualification, setHighestQualification] = useState([]);
  const [salary, setSalary] = useState([]);
  const [foodPreference, setFoodPreference] = useState([]);
  const [drinkPreference, setDrinkPreference] = useState([]);
  const [smokePreference, setSmokePreference] = useState([]);
  const [startAgeValue, setStartAgeValue] = useState(0);

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

  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");

  const ageOptions = [];
  for (let age = 18; age <= 100; age++) {
    ageOptions.push(
      <option key={age} value={age}>
        {age}
      </option>
    );
  }

  const handleMinAgeChange = (e) => {
    setMinAge(e.target.value);
  };

  const handleMaxAgeChange = (e) => {
    setMaxAge(e.target.value);
  };

  const [minHeightInput, setMinHeightInput] = useState("");
  const [maxHeightInput, setMaxHeightInput] = useState("");

  const handleMinHeightChange = (e) => {
    setMinHeightInput(e.target.value);
  };

  const handleMaxHeightChange = (e) => {
    setMaxHeightInput(e.target.value);
  };

  const maritalStatusOptions = [
    { _id: "62bc3", marital_status: "Single" },
    { _id: "62bc4", marital_status: "Married" },
    { _id: "62bc5", marital_status: "Divorced" },
  ];

  const handleMaritalStatusChange = (e) => {
    setMaritalStatus([e.target.value]);
  };

  const handleSalaryChange = (e) => {
    setSalary([e.target.value]);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     if (isPreferenceExist) {
  //       // Preference already exists, make a PUT request to update
  //       const updateResponse = await fetch(
  //         "https://metrimonial.onrender.com/api/preference",
  //         {
  //           method: "PUT",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: Token,
  //           },
  //           body: JSON.stringify({
  //             marital_status: maritalStatus,
  //             religion: religion,
  //             mother_tongue: motherTongues,
  //             min_height: minHeightInput,
  //             max_height: maxHeightInput,
  //             age_from: minAge,
  //             age_to: maxAge,
  //             highest_qualification: highestQualification,
  //             annual_income: salary,
  //             food_preference: foodPreference,
  //             drink: drinkPreference,
  //             smoke: smokePreference,
  //             country: countryid,
  //             state: state,
  //             city: city,
  //           }),
  //         }
  //       );

  //       const updateData = await updateResponse.json();
  //       console.log(updateData);
  //       // Handle the update response as needed
  //     } else {
  //       // Preference doesn't exist, make a POST request to create
  //       const createResponse = await fetch(
  //         "https://metrimonial.onrender.com/api/preference",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: Token,
  //           },
  //           body: JSON.stringify({
  //             marital_status: maritalStatus,
  //             religion: religion,
  //             mother_tongue: motherTongues,
  //             min_height: minHeightInput,
  //             max_height: maxHeightInput,
  //             age_from: minAge,
  //             age_to: maxAge,
  //             highest_qualification: highestQualification,
  //             annual_income: salary,
  //             food_preference: foodPreference,
  //             drink: drinkPreference,
  //             smoke: smokePreference,
  //             country: countryid,
  //             state: state,
  //             city: city,
  //           }),
  //         }
  //       );

  //       const createData = await createResponse.json();
  //       console.log(createData);
  //       // Handle the create response as needed
  //     }
  //   } catch (error) {
  //     console.log("ERROR: ", error);
  //   }
  // };

  const handleHighestQualification = (e) => {
    setHighestQualification([e.target.value]);
  };

  const handleStateChange = (e) => {
    setState([e.target.value]);
  };

  const handleDrinkChange = (e) => {
    setDrinkPreference([e.target.value]);
  };

  const handleSmokeChange = (e) => {
    setSmokePreference([e.target.value]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        marital_status: JSON.stringify(maritalStatus),
        religion: religion,
        mother_tongue: motherTongues,
        min_height: minHeightInput,
        max_height: maxHeightInput,
        age_from: minAge,
        age_to: maxAge,
        highest_qualification: JSON.stringify(highestQualification),
        annual_income: JSON.stringify(salary),
        food_preference: foodPreference,
        drink: JSON.stringify(drinkPreference),
        smoke: JSON.stringify(smokePreference),
        country: countryid,
        state: JSON.stringify(state),
        city: city,
      };

      const requestOptions = {
        method: isPreferenceExist ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: Token,
        },
        body: JSON.stringify(formData),
      };

      const endpoint = isPreferenceExist
        ? "https://metrimonial.onrender.com/api/preference"
        : "https://metrimonial.onrender.com/api/preference/preferencedata";

      const response = await fetch(endpoint, requestOptions);
      const responseData = await response.json();

      console.log(responseData);
      navigate("/uploadphotos");
      // Handle the response as needed
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return (
    <div>
      <div className="p_login__wrapepr">
        <div className="p_login p_login-padding">
          <h2 className="title_partnerpreference">Partner Preference</h2>

          {/* <div className="range-container">
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
          )} */}

          <div className="gender_state">
            <select
              className="gender"
              value={minAge}
              onChange={handleMinAgeChange}
            >
              <option value="">Min Age</option>
              {ageOptions}
            </select>
          </div>
          <div className="gender_state">
            <select
              className="gender"
              value={maxAge}
              onChange={handleMaxAgeChange}
            >
              <option value="">Max Age</option>
              {ageOptions}
            </select>
          </div>

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
            <select
              className="gender"
              value={maritalStatus}
              onChange={handleMaritalStatusChange}
            >
              <option value="">Marital Status</option>
              {maritalStatusOptions.map((option) => (
                <option key={option._id} value={option._id}>
                  {option.marital_status}
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
            <select
              className="gender"
              value={highestQualification}
              onChange={handleHighestQualification}
            >
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
            <select className="gender" name="SelectSalary">
              <option value={salary} onChange={handleSalaryChange}>
                Salary
              </option>
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
