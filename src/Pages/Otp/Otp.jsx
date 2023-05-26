import { createAsyncThunk } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import axios from "axios";
import firebase from "../../firebase";

const Otp = () => {
  let navigate = useNavigate();
    const routeChange = () => { 
        let path = `/SignUp`; 
        navigate(path);
      }
  return (
    <>
      <div className="login__wrapepr">
      <div className="login OTP_input">
        <h2>Enter OTP</h2>
        <input type="tel" maxLength="4" placeholder="OTP" className="OTP_input" />
        <button onClick={routeChange}>Submit</button>
      </div>
    </div>
    </>
  );
};

export default Otp;
