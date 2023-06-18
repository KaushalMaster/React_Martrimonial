import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Registration2.css";
import axios from "axios";

function Registration2() {
  const location = useLocation();
  const data = location.state?.data;
  console.log(data);
  const [higherQualification, setHigherQualification] = useState([]);
  const [salaryRange, setSalaryRange] = useState([]);
  const [formData, setFormData] = useState({
    highestQualification: "",
    collegeName: "",
    jobTitle: "",
    companyName: "",
    salaryRange: "",
    designation: "",
  });

  useEffect(() => {
    fetchHighestQualification();
    fetchSalaryRange();
  }, []);

  const fetchHighestQualification = async () => {
    try {
      const response = await axios.get(
        "https://metrimonial.onrender.com/api/highest_qualification"
      );

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

      if (Array.isArray(response.data.data)) {
        setSalaryRange(response.data.data);
      } else {
        setSalaryRange([response.data.data]);
      }
    } catch (error) {
      console.error("Error fetching Salary Range:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://metrimonial.onrender.com/api/registration",
        formData
      );

      if (response.status === 200) {
        // Data stored successfully
        console.log("Data stored successfully");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        // Data already exists, make a PUT request instead
        try {
          const response = await axios.put(
            "https://metrimonial.onrender.com/api/registration",
            formData
          );

          if (response.status === 200) {
            // Data updated successfully
            console.log("Data updated successfully");
          }
        } catch (error) {
          console.error("Error updating data:", error);
        }
      } else {
        console.error("Error storing data:", error);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="m_login__wrapepr">
        <div className="m_login m_login-padding">
          <h2>Education/Career Details</h2>
          <div className="gender_state">
            <select
              className="gender"
              name="highestQualification"
              value={formData.highestQualification}
              onChange={handleChange}
              required
            >
              <option value="">Highest Qualification</option>
              {higherQualification &&
                higherQualification.map((item, index) => (
                  <option key={index} value={item.hq_name}>
                    {item.hq_name}
                  </option>
                ))}
            </select>
          </div>
          <input
            placeholder="College Name"
            type="text"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Job Title"
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Company Name"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          <div className="gender_state">
            <select
              className="gender"
              name="salaryRange"
              value={formData.salaryRange}
              onChange={handleChange}
              required
            >
              <option value="">Salary Range</option>
              {salaryRange &&
                salaryRange.map((item, index) => (
                  <option key={index} value={item.salary_value}>
                    {item.salary_value}
                  </option>
                ))}
            </select>
          </div>
          <input
            placeholder="Designation"
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />

          <div id="recaptcha"></div>
          <button className="text-light" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration2;
