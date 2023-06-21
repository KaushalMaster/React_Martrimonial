import { createAsyncThunk } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import firebase from "../../firebase";
import { NavigationRounded } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom";

const Login = () => {
  const [dell, setDell] = useState({
    contact_no: "",
    password: "",
  });
  const navigate = useNavigate();

  const txt = (e) => {
    const { name, value } = e.target;
    setDell({ ...dell, [name]: value });
  };
  console.log(dell);

  const handleSubmit = async () => {
    // dispatch(loginUser(phone));
    // let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    // let number = phone;

    // firebase
    //   .auth()
    //   .signInWithPhoneNumber(number, recaptcha)
    //   .then(function (e) {
    //     let code = prompt("Enter the otp", "");
    //     if (code == null) return;
    //     e.confirm(code)
    //       .then(function (result) {
    //         alert("Number Varified");
    //         handleLogin();
    //       })
    //       .catch((err) => console.log(err));
    //   });
    handleLogin();
  };

  const handleLogin = async () => {
    const { contact_no, password } = dell;
    const formattedContactNo = "+91" + contact_no;
    console.log(formattedContactNo);
    if (formattedContactNo.length !== 13) {
      // Display error message using Bootstrap alert
      alert("Invalid Mobile Number");
      return;
    } else {
      navigate("/");
    }
    // Rest of your code...

    let LURL = process.env.LURL;
    const res = await fetch("${LURL}/api/profile/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contact_no,
        password,
      }),
    });

    const abc = await res.json();
    console.log(abc);

    if (abc.code == 200) {
      navigate("/profile");
      // localStorage.clear();
      localStorage.setItem("user", JSON.stringify(abc.data));
      localStorage.setItem("token", abc.data.token);
    }
  };

  return (
    <div className="login__wrapepr">
      <div className="login">
        <input
          placeholder="Phone"
          type="text"
          onChange={txt}
          name="contact_no"
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={txt}
          name="password"
        />
        <div id="recaptcha"></div>
        <div id="error-container"></div>

        <Link to="/NewUSER">New user ?</Link>
        <button onClick={handleSubmit}>Login</button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
