import React from "react";

function Registration3() {
  return (
    <div>
      <div className="login__wrapepr">
        <div className="login login-padding">
          <h2>Family Details</h2>
          <div className="gender_state">
            <select className="gender">
              <option value="">Father's Occupation</option>
              <option value="Service">Service</option>
              <option value="Job">Job</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <div className="gender_state">
            <select className="gender">
              <option value="">Mother's Occupation</option>
              <option value="HouseWife">HouseWife</option>
              <option value="Service">Service</option>
              <option value="Job">Job</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <input
            placeholder="No. Of Brother"
            type="text"
            // onChange={(e) => setuser_name(e.target.value)}
          />
          <input
            placeholder="No. Of Sister"
            type="text"
            // onChange={(e) => setuser_name(e.target.value)}
          />
          <input
            placeholder="No. of Married Brother"
            type="text"
            // onChange={(e) => setuser_name(e.target.value)}
          />
          <input
            placeholder="No. of Married Sister"
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

export default Registration3;
