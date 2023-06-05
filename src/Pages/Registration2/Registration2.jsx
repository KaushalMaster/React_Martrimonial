import React, { useEffect, useState } from "react";
import "./Registration2.css";
import axios from "axios";

function Registration2() {
  const [higherQualification, setHigherQualification] = useState([]);
  const [salaryRange, setSalaryRange] = useState([]);

  useEffect(() => {
    fetchHighestQualification();
    fetchSalaryRange();
  }, []);

  const fetchHighestQualification = async () => {
    try {
      const response = await axios.get(
        "https://metrimonial.onrender.com/api/highest_qualification"
      );
      // console.log(response);
      // console.log(response.data);
      // console.log(response.data.data[0].hq_name);

      if (Array.isArray(response.data.data)) {
        setHigherQualification(response.data.data);
      } else {
        setHigherQualification([response.data.data]);
      }
    } catch (error) {
      console.error("Error fetching Higher Qualification status:", error);
    }
  };

  const fetchSalaryRange = async () => {
    try {
      const response = await axios.get(
        "https://metrimonial.onrender.com/api/salary"
      );
      // console.log(response);
      // console.log(response.data);
      // console.log(response.data.data[0].salary_value);

      if (Array.isArray(response.data.data)) {
        setSalaryRange(response.data.data);
      } else {
        setSalaryRange([response.data.data]);
      }
    } catch (error) {
      console.error("Error fetching Salary Range:", error);
    }
  };

  return (
    <div>
      <div className="m_login__wrapepr">
        <div className="m_login m_login-padding">
          <h2>Education/Carrer Details</h2>
          <div className="gender_state">
            <select className="gender">
              <option value="">Higher Qualification</option>
              {higherQualification &&
                higherQualification.map((higherQualification, index) => (
                  <option key={index} value={higherQualification.hq_name}>
                    {higherQualification.hq_name}
                  </option>
                ))}
            </select>
          </div>
          <input
            placeholder="Highest Qualification"
            type="text"
            // onChange={(e) => setuser_name(e.target.value)}
          />
          <input
            placeholder="Colledge Name"
            type="text"
            // onChange={(e) => setuser_name(e.target.value)}
          />
          <input
            placeholder="Job Title"
            type="text"
            // onChange={(e) => setuser_name(e.target.value)}
          />
          <input
            placeholder="Company Name"
            type="text"
            // onChange={(e) => setuser_name(e.target.value)}
          />
          <div className="gender_state">
            <select className="gender">
              <option value="">Salary Range</option>
              {salaryRange &&
                salaryRange.map((salaryRange, index) => (
                  <option key={index} value={salaryRange.salary_value}>
                    {salaryRange.salary_value}
                  </option>
                ))}
            </select>
          </div>
          <input
            placeholder="Designation"
            type="text"
            // onChange={(e) => setuser_name(e.target.value)}
          />

          <div id="recaptcha"></div>
          {/* onClick={handleSubmit} */}
          <button className="text-light">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Registration2;
