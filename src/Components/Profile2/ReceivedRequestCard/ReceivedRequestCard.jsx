import React from "react";
import "./ReceivedRequestCard.css";
import img1 from "../../../Assets/profile2/img1.jpg";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LanguageIcon from "@mui/icons-material/Language";
import PlaceIcon from "@mui/icons-material/Place";
import SchoolIcon from "@mui/icons-material/School";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PersonIcon from "@mui/icons-material/Person";
import BoltIcon from "@mui/icons-material/Bolt";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const ReceivedRequestCard = ({ data }) => {
  // console.log(data);
  console.log(data.profile[0].age);
  return (
    <div className="received_request_card">
      <div className="received_request_card_left">
        <div className="left_intro_group">
          <img src={img1} alt="" />
          <div className="received_request_card_name">
            <PersonIcon sx={{ height: "15px" }} />
            {data && data.profile[0].user_name}
            <BoltIcon style={{ color: "#FCF204", height: "15px" }} />
          </div>
          {/* {data && data[0]?.profile && data[0].profile[0]?.user_name} */}
          <p className="online_now">
            Online now
            <FiberManualRecordIcon
              sx={{ height: "8px", color: "#22B00B", margin: "0px" }}
            />
          </p>
        </div>
      </div>
      <div className="received_request_card_right">
        <div className="card_right_top">
          <p>
            <TrendingUpIcon sx={{ height: "15px" }} />
            {/* 23 yrs, 5’8” */}
            {data && data.profile[0].age}
          </p>
          <p>
            <LanguageIcon sx={{ height: "15px" }} />
            {/* Gujarati, Ahir */}
            {data && data.profile[0].mother_tongue}
          </p>
          <p>
            <PlaceIcon sx={{ height: "15px" }} />
            {/* Surat, Gujarat */}
            {data && data.profile[0].state}
          </p>

          <p>
            <SchoolIcon sx={{ height: "15px" }} />
            {/* B.E./B.Tech */}
            {data && data.profile[0].highest_qualification}
          </p>
          <p>
            <WorkOutlineIcon sx={{ height: "15px" }} />
            {/* Software Developer / Programmar */}
            {data && data.profile[0].job_title}
          </p>
        </div>
        <p className="received_request_card_more_details">
          You have a message from Jay Kava. We restrict message reading to
          premium users only in the interest of our premium subscribers.{" "}
          <span>Upgrade Now</span>
        </p>
      </div>
    </div>
  );
};

export default ReceivedRequestCard;
