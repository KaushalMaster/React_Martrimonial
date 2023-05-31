import React from "react";

function Registration4() {
  return (
    <div>
      <div className="login__wrapepr">
        <div className="login login-padding">
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
              <option value="Married">Married</option>
              <option value="Un-Married">Un-Married</option>
            </select>
          </div>
          <div className="gender_state">
            <select className="gender">
              <option value="">Relegion</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
            </select>
          </div>
          <div className="gender_state">
            <select className="gender">
              <option value="">Mother's Tongue</option>
              <option value="Hindi">Hindi</option>
              <option value="Gujarati">Gujarati</option>
            </select>
          </div>

          <input
            placeholder="Highest Qualification"
            type="text"
            // onChange={(e) => setuser_name(e.target.value)}
          />

          <div className="gender_state">
            <select className="gender">
              <option value="">Annual Income</option>
              <option value="0-2_LPA">0-2 LPA</option>
              <option value="2-7_LPA">2-7 LPA</option>
            </select>
          </div>

          <div className="gender_state">
            <select className="gender">
              <option value="">Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
          </div>

          <div className="gender_state">
            <select className="gender">
              <option value="">State</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Ahmedabad">Ahmedabad</option>
            </select>
          </div>

          <div className="gender_state">
            <select className="gender">
              <option value="">Diet</option>
              <option value="Vegeterian">Vegeterian</option>
              <option value="Non-Vegeterian">Non-Vegeterian</option>
            </select>
          </div>

          <div className="gender_state">
            <select className="gender">
              <option value="">Drink</option>
              <option value="Ocassionally">Ocassionally</option>
              <option value="Never">Never</option>
              <option value="Sometimes">Sometimes</option>
            </select>
          </div>
          <div className="gender_state">
            <select className="gender">
              <option value="">Smoke</option>
              <option value="Ocassionally">Ocassionally</option>
              <option value="Never">Never</option>
              <option value="Sometimes">Sometimes</option>
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
