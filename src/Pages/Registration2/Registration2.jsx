import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Registration2.css";
import axios from "axios";

function Registration2() {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const [higherQualification, setHigherQualification] = useState([]);
  const [salaryRange, setSalaryRange] = useState([]);
  const [formData, setFormData] = useState({
    highest_qualification: "",
    college: "",
    job_title: "",
    company_name: "",
    salary: "",
    designation: "",
  });

  console.log(formData);

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
      if (
        !formData.highest_qualification ||
        !formData.college ||
        !formData.job_title ||
        !formData.company_name ||
        !formData.salary ||
        !formData.designation
      ) {
        alert("Please fill in all the fields.");
        return;
      }
      // Combine the data and form data
      const combinedData = {
        ...data,
        ...formData,
      };

      console.log(combinedData);

      const response = await axios.put(
        "https://metrimonial.onrender.com/api/profile",
        combinedData,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status === 200) {
        // Data stored or updated successfully
        console.log("Data stored or updated successfully");
        navigate("/Registration3");
      }
    } catch (error) {
      console.error("Error storing or updating data:", error);
    }
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <div className="m_login__wrapepr">
        <div className="m_login m_login-padding">
          <h2>Education/Career Details</h2>
          <div className="gender_state">
            <select
              className="gender"
              name="highest_qualification"
              value={formData.highest_qualification}
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
            name="college"
            value={formData.college}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Job Title"
            type="text"
            name="job_title"
            value={formData.job_title}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Company Name"
            type="text"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            required
          />
          <div className="gender_state">
            <select
              className="gender"
              name="salary"
              value={formData.salary}
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
