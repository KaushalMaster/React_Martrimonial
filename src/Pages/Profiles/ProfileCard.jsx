import React from "react";
import "./Profiles.css";
// import img1 from "../../../Assets/profile2/img1.jpg";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LanguageIcon from "@mui/icons-material/Language";
import PlaceIcon from "@mui/icons-material/Place";
import SchoolIcon from "@mui/icons-material/School";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PersonIcon from "@mui/icons-material/Person";
import BoltIcon from "@mui/icons-material/Bolt";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import HeightIcon from "@mui/icons-material/Height";
// import TempleHinduIcon from "@mui/icons-material/TempleHindu";

function ProfileCard({ data }) {
  //   console.log(data);
  return (
    <div className="received_request_card">
      <div className="received_request_card_left">
        <div className="left_intro_group">
          <img src={data.user_photo} alt="" />
          <div className="received_request_card_name">
            <PersonIcon sx={{ height: "15px" }} />
            {data.user_name}
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
            {data.age}
          </p>
          <p>
            <HeightIcon sx={{ height: "15px" }} />
            {/* B.E./B.Tech */}
            {data.height}
          </p>
          <p>
            <LanguageIcon sx={{ height: "15px" }} />
            {/* Gujarati, Ahir */}
            {data.mother_tongue}
          </p>
          <p>
            <PlaceIcon sx={{ height: "15px" }} />
            {/* Surat, Gujarat */}
            {data.home_town}
          </p>

          <p>
            <WorkOutlineIcon sx={{ height: "15px" }} />
            {/* Software Developer / Programmar */}
            {data.designation}
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
}

export default ProfileCard;
