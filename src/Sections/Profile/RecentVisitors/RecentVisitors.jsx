import React, { useEffect, useState } from "react";
import axios from "axios";
import RecentVisitorCard from "../../../Components/RecentVisitorCard/RecentVisitorCard";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import "./RecentVisitors.css";

const RecentVisitors = ({ recentVisitors }) => {
  const handlePrevClick = () => {
    let box = document.querySelector(".profile__recent_visitors_wrapper");
    box.scrollLeft = box.scrollLeft - 500;
  };

  const handleNextClick = () => {
    let box = document.querySelector(".profile__recent_visitors_wrapper");
    box.scrollLeft = box.scrollLeft + 500;
  };

  const [recentVisitorsData, setRecentVisitorsData] = useState([]);

  useEffect(() => {
    fetchRecentVisitors();
  }, []);

  const fetchRecentVisitors = async () => {
    try {
      const response = await axios.get(
        "https://metrimonial.onrender.com/api/profile/recent_visitor",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const recentVisitorsData = response.data.data.recent_visitors;
      // console.log(recentVisitorsData);
      setRecentVisitorsData(recentVisitorsData);
    } catch (error) {
      console.log("Failed !!", error);
    }
  };

  return (
    <div className="profile__recent_visitors">
      <div className="profile__recent_visitors_heading">
        <h3>
          Recent Visitors <span>({recentVisitorsData.length})</span>
        </h3>
        {/* <div className="profile__recent_visitors_icon_wrapper">
          <NavigateBefore
            className="profile__recent_visitors_icon"
            onClick={handlePrevClick}
          />
          <NavigateNext
            className="profile__recent_visitors_icon"
            onClick={handleNextClick}
          />
        </div> */}
      </div>
      <div className="profile__recent_visitors_wrapper my_class">
        {recentVisitorsData.map((rev, index) => (
          <RecentVisitorCard key={index} rev={rev} />
        ))}
      </div>
    </div>
  );
};

export default RecentVisitors;
