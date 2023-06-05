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
  const [stateid, setStateid] = useState("");

  const handlecounty = (e) => {
    const getcountryId = e.target.value;
    const getStatedata = country.find(
      (country) => country.country_id === getcountryId
    ).states;
    setState(getStatedata);
    setCountryid(getcountryId);
    //console.log(getcountryId);
  };

  const handlestate = (e) => {
    const stateid = e.target.value;
    //console.log(stateid);
    setStateid(stateid);
  };

  return (
    <div>
      <div className="p_login__wrapepr">
        <div className="p_login p_login-padding">
          <h2 className="title_partnerpreference">Partner Preference</h2>

          <input
            placeholder="Age"
            type="text"
            // onChange={(e) => setuser_name(e.target.value)}
          />
          <input
            placeholder="Height"
            type="text"
            // onChange={(e) => setuser_name(e.target.value)}
          />
          <input
            placeholder="Weight"
            type="text"
            // onChange={(e) => setuser_name(e.target.value)}
          />
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
              <option value="">Relegion</option>
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
            <select className="gender" onChange={(e) => handlecounty(e)}>
              <option value="">Country</option>
              {country.map((country, index) => {
                return (
                  <option value={country.country_id} key={index}>
                    {country.country_name}
                  </option>
                );
              })}
              <option value="USA">USA</option>
            </select>
          </div>

          <div className="gender_state">
            <select className="gender" onChange={(e) => handlestate}>
              <option value="">State</option>
              {state.map((getstate, index) => (
                <option value={getstate.state_id} key={index}>
                  {getstate.state_name}
                </option>
              ))}
              {/* <option value="Ahmedabad">Ahmedabad</option> */}
            </select>
          </div>

          <div className="gender_state">
            <select className="gender">
              <option value="">City</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Ahmedabad">Ahmedabad</option>
            </select>
          </div>

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
