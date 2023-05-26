import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SignUpJourneyCard from "../../Components/SignUpJourneyCard/SignUpJourneyCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration1 = () => {
  let NAvigate = useNavigate();
    const routeChange = () => { 
        let path = `/Profile`; 
        NAvigate(path);
      }

  return (
    <div className="signup">
      <div className="signup__top">
        <div className="signup__left">
          <SignUpJourneyCard />
        </div>
        <div className="signup__right ">
          <div className="signup__right_top">
            <h3 className="signup__inpput_heading">Basic Detail</h3>
            <div className="signup__basic_details">
                <select name="drink" id="" className="advancedsearch__element_select" >
                  <option value="null">select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              <input type="text" placeholder="Last Name"/>
              <input type="text" placeholder="@Email"/>
              <input type="text" placeholder="Enter your mobile number"/>
              <input type="text" placeholder="Age"/>
            </div>
          </div>
          <div className="signup__right_bottom ">
            <div className="signup__right_left  ">
              <div className="signup__education_details ">
                <h3 className="signup__inpput_heading">Education Detail</h3>
                <input type="text" placeholder="Higher Qualification"/>
                <input type="text" placeholder="College" />
              </div>
              <div className="signup__occupation_details ">
                <h3 className="signup__inpput_heading">Occupation Detail</h3>
                <input type="text" placeholder="Job title" />
                <input type="text" placeholder="Company name" />
                <input type="text" placeholder="Company description" />
              </div>
              <div className="signup__diet_prefference  ">
                <h3 className="signup__inpput_heading">Diet Preference</h3>
                <select name="age" id="" className="advancedsearch__element_select" >
                  <option value="">Food Preference</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Nonvegetarian">Nonvegetarian</option>
                  <option value="Eggetarian">Eggetarian</option>
                </select>
                <select name="drink" id="" className="advancedsearch__element_select" >
                  <option value="">Drink</option>
                  <option value="Yes">Yes</option>
                  <option value="Occasionally">Occasionally</option>
                  <option value="Never">Never</option>
                </select>
                <select name="age" id="" className="advancedsearch__element_select" >
                  <option value="">Smoke</option>
                  <option value="Yes">Yes</option>
                  <option value="Occasionally">Occasionally</option>
                  <option value="Never">Never</option>
                </select>
              </div>
            </div>
            <div className="signup__right_right ">
                <div className="signup__home_town ">
                    <h3 className="signup__inpput_heading">Home Town</h3>

                <select placeholder="Home town" name="country" id="" >
                    <option value="">Select your country:</option>
                </select>

                <select placeholder="Home town" name="country" id="" >
                    <option value="">Select your State:</option> 
                </select>

                <select  placeholder="Home town" name="country"  id="" >
                    <option value="">Select your Home Town:</option> 
                </select>

                <select name="religion" id="" >
                    <option value="">Religion</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                </select>
                <select name="maritalStatus" id="" >
                    <option value="">MaritalStatus</option>
                    <option value="Married">Married</option>
                    <option value="UnMarried">Un married</option>
                </select>
                <select name="community" id="" >
                    <option value="">Community</option>
                    <option value="General">General</option>
                    <option value="OBC">OBC</option>
                </select>
                <select name="motherTongue" id="" >
                    <option value="">motherTongue</option>
                    <option value="Gujarati">Gujarati</option>
                    <option value="Hindi">Hindi</option>
                </select>
              </div>
              <div>
                <h3 className="signup__inpput_heading">Bio</h3>
                <textarea className="signup__bio" name="" id="" cols="55" rows="5"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button onClick={routeChange}>Submit</button>
    </div>
  );
};

export default Registration1;
