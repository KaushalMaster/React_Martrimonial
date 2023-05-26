import React from "react";
import "./PremiumMatches.css";

import RecentVisitorCard from "../../../Components/RecentVisitorCard/RecentVisitorCard";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import PremiumMatchesCard from "../../../Components/PremiumMatchesCard/PremiumMatchesCard";

const PremiumMatches = ({ premiumMatches }) => {
  const handlePrevClick = () => {
    let box = document.querySelector(".profile__premium_matches_wrapper");
    box.scrollLeft = box.scrollLeft - 500;
  };
  const handleNextClick = () => {
    let box = document.querySelector(".profile__premium_matches_wrapper");
    box.scrollLeft = box.scrollLeft + 500;
  };
  return (
    <div className="profile__premium_matches">
      <div className="profile__premium_matches_heading">
        <h3>
          Premium Matches <span>( {premiumMatches.length} )</span>
        </h3>
        <div className="profile__premium_matches_icon_wrapper">
          <NavigateBefore
            className="profile__premium_matches_icon"
            onClick={handlePrevClick}
          />
          <NavigateNext
            className="profile__premium_matches_icon"
            onClick={handleNextClick}
          />
        </div>
      </div>
      <div className="profile__premium_matches_wrapper">
        {premiumMatches.map((prem) => {
          <RecentVisitorCard prem={prem} />;
        })}
      </div>
    </div>
  );
};

export default PremiumMatches;
