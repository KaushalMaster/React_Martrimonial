import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const saveUserData = async (userData) => {
  try {
    const response = await axios.post(
      "https://metrimonial.onrender.com/api/profile",
      userData
    );
    // Handle the response if needed
    console.log(response.data);
  } catch (error) {
    // Handle the error
    console.error(error);
  }
};

const NewUSER = () => {
  const [user_name, setuser_name] = useState("");
  const [contact_no, setcontact_no] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // let navigate = useNavigate();

  const handleSubmit = () => {
    const userData = {
      user_name: user_name,
      contact_no: contact_no,
      email: email,
      password: password,
    };

    saveUserData(userData);

    // let path = "/Otp";
    // navigate(path);
  };

  return (
    <>
      <div className="login__wrapepr">
        <div className="login login-padding">
          <h2>User Details</h2>
          <input
            placeholder="Username"
            type="text"
            onChange={(e) => setuser_name(e.target.value)}
          />
          <input
            placeholder="Mobile Number"
            type="tel"
            name="contact_no"
            id="contact_no"
            onChange={(e) => setcontact_no(e.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input placeholder="Confirm Password" type="password" />
          <div id="recaptcha"></div>
          <button onClick={handleSubmit} className="text-light">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default NewUSER;
