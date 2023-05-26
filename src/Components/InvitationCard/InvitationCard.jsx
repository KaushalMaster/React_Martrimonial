import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import img1 from "../../Assets/profile/img1.png";
import "./InvitationCard.css";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const InvitationCard = () => {
  return (
    <div className="invitationcard">
      <div className="invitationcard_intro">
        <img src={img1} alt="" />
        <p>Kapil Patel</p>
      </div>
      <div className="invitationcard_bottom">
        <p className="proceed_further">want to procced further</p>
        <button className="invitationcard_upgrade_button">Upgrade</button>
      </div>
      <div className="invitationcard__buttons">
        <button className="invitationcard_button invitationcard_reject">
          <CloseIcon />
        </button>
        <button className="invitationcard_button invitationcard_accept">
          <CheckIcon style={{ color: "#22B00B" }} />
        </button>
      </div>
    </div>
  );
};

export default InvitationCard;
