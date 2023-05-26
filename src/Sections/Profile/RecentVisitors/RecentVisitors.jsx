import React from "react";
import "./RecentVisitors.css";
import RecentVisitorCard from "../../../Components/RecentVisitorCard/RecentVisitorCard";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { useEffect } from "react";
import axios from "axios";

const RecentVisitors = ({ recentVisitors }) => {
  const handlePrevClick = () => {
    let box = document.querySelector(".profile__recent_visitors_wrapper");
    box.scrollLeft = box.scrollLeft - 500;
  };
  const handleNextClick = () => {
    let box = document.querySelector(".profile__recent_visitors_wrapper");
    box.scrollLeft = box.scrollLeft + 500;
  };

  return (
    <div className="profile__recent_visitors">
      <div className="profile__recent_visitors_heading">
        <h3>
          Recent Visitors <span>( {recentVisitors.length} )</span>
        </h3>
        <div className="profile__recent_visitors_icon_wrapper">
          <NavigateBefore
            className="profile__recent_visitors_icon"
            onClick={handlePrevClick}
          />
          <NavigateNext
            className="profile__recent_visitors_icon"
            onClick={handleNextClick}
          />
        </div>
      </div>
      <div className="profile__recent_visitors_wrapper">
        {recentVisitors.map((rev) => {
          <RecentVisitorCard rev={rev} />;
        })}
      </div>
    </div>
  );
};

export default RecentVisitors;
