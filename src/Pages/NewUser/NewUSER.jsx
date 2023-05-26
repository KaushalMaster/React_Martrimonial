import { createAsyncThunk } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import axios from "axios";
import firebase from "../../firebase";

const NewUSER = () => {
    let navigate = useNavigate();
    const routeChange = () => { 
        let path = `/Otp`; 
        navigate(path);
      }
  return (
    <>
      <div className="login__wrapepr">
        <div className="login login-padding">
            <h2>User Details</h2>
          <input placeholder="First Name" type="text"/>
          <input placeholder="Last Name" type="text"/>
          <input placeholder="Mobile Number" type="tel"/>
          <input placeholder="Email" type="email"/>
          <input placeholder="Password" type="password"/>
          <input placeholder="Confirm Password" type="password"/>
          <div id="recaptcha"></div>
          <button onClick={routeChange} className="text-light">Next</button>
        </div>
      </div>
    </>
  );
};

export default NewUSER;
