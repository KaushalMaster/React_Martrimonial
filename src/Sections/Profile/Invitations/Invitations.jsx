import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import React from "react";
import InvitationCard from "../../../Components/InvitationCard/InvitationCard";
import RecentVisitorCard from "../../../Components/RecentVisitorCard/RecentVisitorCard";
import "./Invitations.css";

const Invitations = ({ invitations }) => {
  const handlePrevClick = () => {
    let box = document.querySelector(".profile__invitations_wrapper");
    box.scrollLeft = box.scrollLeft - 500;
  };
  const handleNextClick = () => {
    let box = document.querySelector(".profile__invitations_wrapper");
    box.scrollLeft = box.scrollLeft + 500;
  };

  return (
    <div className="profile__invitations">
      <div className="profile__invitations_heading">
        <h3>
          Invitations <span>( {invitations.length} )</span>
        </h3>
        <div className="profile__invitations_icon_wrapper">
          <NavigateBefore
            className="profile__invitations_icon"
            onClick={handlePrevClick}
          />
          <NavigateNext
            className="profile__invitations_icon"
            onClick={handleNextClick}
          />
        </div>
      </div>
      <div className="profile__invitations_wrapper">
        {invitations.map((inv) => {
          <RecentVisitorCard inv={inv} />;
        })}
      </div>
    </div>
  );
};

export default Invitations;
