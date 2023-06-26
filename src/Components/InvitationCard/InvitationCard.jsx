import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import img1 from "../../Assets/profile/img1.png";
import "./InvitationCard.css";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const InvitationCard = ({ inv }) => {
  const navigate = useNavigate();
  const data = inv?.profile[0];
  if (!data) {
    return null;
  }
  // console.log(data.user_name);
  // console.log(inv);

  const acceptRequest = () => {
    console.log("acceptRequest");
  };

  const declineRequest = () => {
    console.log("Decline Request");
  };

  const redirectUser = () => {
    const user_id = data._id;
    console.log(user_id);
    navigate(`/userprofile/${user_id}`);
    // console.log(data);
  };

  return (
    <div className="invitationcard" onClick={redirectUser}>
      <div className="invitationcard_intro">
        <img src={inv.user_photo} alt="" />
        <p>{data.user_name}</p>
      </div>
      <div className="invitationcard_bottom">
        <p className="proceed_further">want to procced further</p>
        <button className="invitationcard_upgrade_button">Upgrade</button>
      </div>
      <div className="invitationcard__buttons">
        <button
          className="invitationcard_button invitationcard_reject"
          onClick={declineRequest}
        >
          <CloseIcon />
        </button>
        <button
          className="invitationcard_button invitationcard_accept"
          onClick={acceptRequest}
        >
          <CheckIcon style={{ color: "#22B00B" }} />
        </button>
      </div>
    </div>
  );
};

export default InvitationCard;
