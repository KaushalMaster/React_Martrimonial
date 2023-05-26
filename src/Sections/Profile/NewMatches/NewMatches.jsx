import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import React from "react";
import NewMatchesCard from "../../../Components/NewMatchesCard/NewMatchesCard";
import RecentVisitorCard from "../../../Components/RecentVisitorCard/RecentVisitorCard";
import "./NewMatches.css";

const NewMatches = ({ newMatches }) => {
  const handlePrevClick = () => {
    let box = document.querySelector(".profile__newmatches_wrapper");
    box.scrollLeft = box.scrollLeft - 500;
  };
  const handleNextClick = () => {
    let box = document.querySelector(".profile__newmatches_wrapper");
    box.scrollLeft = box.scrollLeft + 500;
  };
  return (
    <div className="profile__newmatches">
      <div className="profile__newmatches_heading">
        <h3>
          New matches for you <span>( {newMatches.length} )</span>
        </h3>
        <div className="profile__newmatches_icon_wrapper">
          <NavigateBefore
            className="profile__newmatches_icon"
            onClick={handlePrevClick}
          />
          <NavigateNext
            className="profile__newmatches_icon"
            onClick={handleNextClick}
          />
        </div>
      </div>
      <div className="profile__newmatches_wrapper">
        {newMatches.map((newm) => {
          <NewMatchesCard newm={newm} />;
        })}
      </div>
    </div>
  );
};

export default NewMatches;
