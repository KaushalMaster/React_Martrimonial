import React from "react";
import "./Registration2.css";

function Registration2() {
  return (
    <div>
      <div className="login__wrapepr">
        <div className="login login-padding">
          <h2>Education/Carrer Details</h2>
          <input
            placeholder="Higher Qualification"
            type="text"
            // onChange={(e) => setuser_name(e.target.value)}
          />
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
          <input
            placeholder="Salary Range"
            type="text"
            // onChange={(e) => setuser_name(e.target.value)}
          />
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
