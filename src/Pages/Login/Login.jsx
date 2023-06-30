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
import { BASE_URL } from "../../BASE_URL";

const Login = () => {
  const url = process.env.LURL;
  console.log(url);

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
    if (dell.contact_no.trim() === "" || dell.password.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
    handleLogin();
  };

  const handleLogin = async () => {
    const { contact_no, password } = dell;
    const formattedContactNo = "+91" + contact_no;
    console.log(formattedContactNo);
    if (formattedContactNo.length !== 13) { 
      alert("Invalid Mobile Number");
      return;
    } else {
      // navigate("/");
    }
    // Rest of your code...

    const res = await fetch(`${BASE_URL}/api/profile/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contact_no: formattedContactNo,
        password: password,
      }),
    });

    const abc = await res.json();
    console.log(abc);

    if (abc.code == 200) {
      // const token = response.data.token;

      // Store the token in localStorage
      // localStorage.setItem("token", token);
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

        <Link to="/NewUSER">New user ?</Link>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
