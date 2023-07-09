import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../BASE_URL";
import { auth } from "../../firebase";
import { RecaptchaVerifier } from "firebase/auth";

const Otp = () => {
  const captchaVerify = () => {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignup();
          console.log("Recaptcha resolved");
        },
        defaultCountry: "IN",
      },
      auth
    );
  };

  const onSignup = () => {
    captchaVerify();

    const phoneNumber = "+91" + location.state?.userData?.phone;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;

  };
  const saveUserData = async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/profile`, userData);
      // Handle the response if needed
      console.log(response.data);
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState("");

  const handleOtpVerification = () => {
    // Perform OTP verification logic
    // If OTP is verified, call the saveUserData function
    if (otp == "1234") {
      const userData = location.state?.userData;
      console.log(userData);
      navigate("/Registration1");
      if (userData) {
        saveUserData(userData);
      }
    }
  };

  return (
    <>
      <div className="login__wrapepr">
        <div className="login OTP_input">
          <h2>Enter OTP</h2>
          <input
            type="tel"
            maxLength="4"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="OTP_input"
            required
          />
          <button onClick={handleOtpVerification}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Otp;
