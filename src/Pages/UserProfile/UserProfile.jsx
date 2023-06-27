import {
  ArrowUpward,
  BarChart,
  CalendarMonth,
  CastForEducationOutlined,
  FemaleOutlined,
  GirlOutlined,
  Group,
  GroupOutlined,
  Language,
  LocationCityOutlined,
  Lock,
  LockOutlined,
  Mail,
  MailOutline,
  Person,
  Person2Outlined,
  Person3Outlined,
  PersonOutline,
  Phone,
  PhoneOutlined,
  SchoolOutlined,
  SettingsEthernet,
} from "@mui/icons-material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import img1 from "../../Assets/userprofile/img1.png";
import img2 from "../../Assets/userprofile/img2.png";
import mother from "../../Assets/userprofile/mother.jpg";
import father from "../../Assets/userprofile/father.png";
import match from "../../Assets/userprofile/match.png";
import connect from "../../Assets/userprofile/connection.png";
import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import EditIcon from "@mui/icons-material/Edit";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";

import vagan from "../../Assets/userprofile/vagan.png";
import drink from "../../Assets/userprofile/drink.png";
import smoke from "../../Assets/userprofile/smoke.png";

import SchoolIcon from "@mui/icons-material/School";
import { useParams } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel variant="dark">
          <Carousel.Item>
            <img className="d-block w-100" src="1.png" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=eee"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=e5e5e5"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
    </Modal>
  );
}

const UserProfile = () => {
  const [details, setDetails] = useState("");
  const [family, setFamily] = useState("");
  const [religion, setReligion] = useState([]);
  const [language, setLanguage] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [profilePhoto, setProfilePhotos] = useState("");
  const [contactno, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [memberType, setMemberType] = useState("");
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [minHeight, setMinHeight] = useState("");
  const [maxHeight, setMaxHeight] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [foodPreference, setFoodPreference] = useState("");
  const [smoke, setSmoke] = useState("");
  const [drink, setDrink] = useState("");
  const [userName, setUserName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [community, setCommunity] = useState("");
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState("");
  const [motherTongue, setMotherTongue] = useState("");
  const [dob, setDob] = useState("");
  const [state, setState] = useState("");
  const [homeTown, setHomeTown] = useState("");
  const [settleDown, setSettleDown] = useState("");
  const [salary, setSalary] = useState("");
  const [age, setAge] = useState("");

  const token = localStorage.getItem("token");
  const { id } = useParams();
  console.log(id);
  const userDetails = async () => {
    const res = await fetch(
      `https://metrimonial.onrender.com/api/profile/userdetails?user_id=${id}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    setDetails(data.data.UserDetails[0]);
    setFamily(data.data.UserDetails.family[0]);
    setFoodPreference(data.data.UserDetails.preference[0]);
    console.log(data.data.UserDetails.preference[0]);
    setReligion(data.data.UserDetails.preference.religion);
    setLanguage(data.data.UserDetails.preference.language);
    setProfilePhotos(data.data.UserDetails.profile_photo);
    setContactNo(data.data.UserDetails.contact_no);
    setEmail(data.data.UserDetails.email);
    setMemberType(data.data.UserDetails.member_type);
    setMinAge(data.data.UserDetails.preference.min_age);
    setMaxAge(data.data.UserDetails.preference.max_age);
    setMinHeight(data.data.UserDetails.preference.min_height);
    setMaxHeight(data.data.UserDetails.preference.max_height);
    setMaritalStatus(data.data.UserDetails.preference.marital_status);
    setCountry(data.data.UserDetails.preference.country);
    setLocation(data.data.UserDetails.preference.location);
    setAnnualIncome(data.data.UserDetails.preference.annual_income);
    setFoodPreference(data.data.UserDetails.preference.food_preference);
    setSmoke(data.data.UserDetails.preference.smoke);
    setDrink(data.data.UserDetails.preference.drink);
    setUserName(data.data.UserDetails.user_name);
    setHeight(data.data.UserDetails.height);
    setWeight(data.data.UserDetails.weight);
    setCommunity(data.data.UserDetails.community);
    setBio(data.data.UserDetails.bio);
    setGender(data.data.UserDetails.gender);
    setMotherTongue(data.data.UserDetails.mother_tongue);
    setDob(data.data.UserDetails.dob);
    setState(data.data.UserDetails.state);
    setHomeTown(data.data.UserDetails.home_town);
    setSettleDown(data.data.UserDetails.settle_down);
    setSalary(data.data.UserDetails.salary);
    setAge(data.data.UserDetails.age);
  };

  useEffect(() => {
    userDetails();
    updateUserProfile();
  }, []);

  const updateUserProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      // // const userId = "user-id"; // Replace with the actual user ID
      const url = `https://metrimonial.onrender.com/api/profile`;

      // const data = {
      //   // Replace with the updated user profile data
      //   name: "John Doe",
      //   age: 30,
      //   // Include other fields you want to update
      // };

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(data),
      });

      if (response.ok) {
        // User profile updated successfully
        console.log(response);
        console.log("User profile updated");
      } else {
        // Handle the error case
        console.log("Failed to update user profile");
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  return (
    <div className="userprofile">
      <div className="userprofile__left">
        <div className="userprofile_profile">
          <div className="userprofile_profile_top">
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt=""
                style={{ borderRadius: "100%" }}
                onClick={() => setModalShow(true)}
              />
            ) : (
              profilePhoto
            )}
          </div>
          hi
          {/*Photo Modal */}
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <div className="userprofile_profile_bottom">
            <div className="userprofile_profile_bottom_detail_wrapper">
              <PhoneOutlined />
              {contactno}
              <EditIcon />
            </div>
            <div className="userprofile_profile_bottom_detail_wrapper">
              <MailOutline />
              {email}
              <EditIcon />
            </div>
            <div className="userprofile_profile_bottom_detail_wrapper">
              <LockOutlined />
              {memberType} Member
              <EditIcon />
            </div>
          </div>
        </div>
        <div className="userprofile_matches">
          <div className="userprofile_matches_profile_images">
            <img src={img1} alt="" className="userprofile_matches_me" />
            <img
              src={connect}
              alt=""
              className="userprofile_matches_connection"
            />
            <img src={img2} alt="" className="userprofile_matches_user" />
          </div>
          <div className="userprofile_matches_description">
            <span>You match 8/8 of his</span>
            <p>Desired Preferences</p>
          </div>
          <div className="userprofile_matches_content_wrapper">
            <div className="userprofile_matches_content">
              <p>Age:</p>
              <img src={match} alt="" />
              {/* <p>18 to 25</p> */}
              <p>{age}</p>
            </div>
            <div className="userprofile_matches_content">
              <p>Height</p>
              <img src={match} alt="" />
              <p>
                {height}
                {/* {minHeight} to {maxHeight} */}
              </p>
            </div>
            <div className="userprofile_matches_content">
              <p>Marital Status</p>
              <img src={match} alt="" />
              <p>{maritalStatus}</p>
            </div>
            <div className="userprofile_matches_content">
              <p>Religion / Community</p>
              <img src={match} alt="" />
              <p>{religion}</p>
            </div>
            <div className="userprofile_matches_content">
              <p>Mother Tongue</p>
              <img src={match} alt="" />
              <p>{language}</p>
            </div>
            <div className="userprofile_matches_content">
              <p>Country Living in</p>
              <img src={match} alt="" />
              <p>{country}</p>
            </div>
            <div className="userprofile_matches_content">
              <p>State Living in</p>
              <img src={match} alt="" />
              <p>{location}</p>
            </div>
            <div className="userprofile_matches_content">
              <p>Annual I ncome</p>
              <img src={match} alt="" />
              <p>{annualIncome}</p>
            </div>
            <div className="userprofile_matches_content">
              <p>Diet</p>
              <img src={match} alt="" />
              <p>{foodPreference}</p>
            </div>
            <div className="userprofile_matches_content">
              <p>Smoke</p>
              <img src={match} alt="" />
              <p>{smoke}</p>
            </div>
            <div className="userprofile_matches_content">
              <p>Drink</p>
              <img src={match} alt="" />
              <p>{drink}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="userprofile__right">
        <div className="userprofile_intro">
          <div className="userprofile_intro_name">
            <h2>{userName}</h2>
            {/* <p className="userprofile_intro_height">25 yrs, 5'55</p> */}
            <p className="userprofile_intro_height">
              {maxAge} yrs, {height}, {weight}kg
            </p>
            <br />
            <p style={{ marginTop: "-40px" }}>{community}</p>
          </div>

          <div className="userprofile_intro_bio">
            <h3>Bio</h3>
            <p>{bio}</p>
          </div>
        </div>
        <div className="userprofile_basic_details">
          <div className="userprofile_section_header">
            <h3>Basic Details</h3>
          </div>
          <div className="userprofile_basic_details_content_wrapper">
            <div className="userprofile_basic_details_content">
              <FemaleOutlined />
              {gender}
            </div>
            <div className="userprofile_basic_details_content">
              <Language />
              {motherTongue}
            </div>
            <div className="userprofile_basic_details_content">
              <CalendarMonth />
              {dob}
            </div>
            <div className="userprofile_basic_details_content">
              <PersonOutline />
              {religion}
            </div>
            <div className="userprofile_basic_details_content">
              <LocationCityOutlined />
              {/* Lives in Jamnagar, Gujarat-India */}
              Lives in {homeTown}, {state}, {country}
            </div>
            <div className="userprofile_basic_details_content">
              <img
                src="weddingRing.png"
                style={{
                  height: "20px",
                  fontWeight: "600",
                  paddingRight: "5px",
                }}
              />
              {maritalStatus}
            </div>
            <div
              className="userprofile_basic_details_content"
              style={{ fontWeight: "600" }}
            >
              Planning to settle-down in {settleDown}
            </div>
          </div>
        </div>
        <div className="userprofile_food_preference">
          <div className="userprofile_section_header">
            <h3>Food Preference</h3>
          </div>
          <div className="userprofile_food_preference_content_wrapper">
            <div className="userprofile_food_preference_content">
              <img src={vagan} alt="" />
              <p>{foodPreference}</p>
            </div>
            <div className="userprofile_food_preference_content">
              <img src={drink} alt="" />
              <p>{drink}</p>
            </div>
            <div className="userprofile_food_preference_content">
              <img src={smoke} alt="" />
              <p>{smoke}</p>
            </div>
          </div>
        </div>
        <div className="userprofile_education">
          <div className="userprofile_section_header">
            <h3>Education & Career</h3>
          </div>
          <div className="userprofile_education_content_wrapper">
            <div className="userprofile_education_content">
              <WorkOutlineIcon />
              <p>IT Diploma - Diploma in Information Technology college</p>
            </div>
            <div className="userprofile_education_content">
              <MilitaryTechIcon />
              <p>Computers / IT</p>
            </div>
            <div className="userprofile_education_content">
              <CalendarTodayIcon />
              <p>Business Owner - Entrepreneurship solution pvt ltd</p>
            </div>
            <div className="userprofile_education_content">
              <BarChart />
              <p>Earns INR {salary} annually</p>
            </div>
          </div>
        </div>
        <div className="userprofile_family_details">
          <div className="userprofile_section_header">
            <h3>Family Details</h3>
          </div>
          <div className="userprofile_family_details_content_wrapper">
            {/* <div className="userprofile_family_details_content">
              <img src={mother} alt="" />
              <div>
                <span>Mother’s name</span>
                <p>Josey Doe</p>
              </div>
            </div> */}
            <div className="userprofile_family_details_content">
              <img src={mother} alt="" />
              <div>
                <span>Mother’s Occupation</span>
                <p>{family.mother_occupation}</p>
              </div>
            </div>
            {/* <div className="userprofile_family_details_content">
              <img src={father} alt="" />
              <div>
                <span>Father’s name</span>
                <p>Maneik Doe</p>
              </div>
            </div> */}
            <div className="userprofile_family_details_content">
              <img src={father} alt="" />
              <div>
                <span>Father’s Occupatio</span>
                <p>{family.father_occupation}</p>
              </div>
            </div>
            <div className="userprofile_family_details_content">
              <img src={mother} alt="" />
              <div>
                <span>Sister</span>
                <p>{family.no_of_sister}</p>
              </div>
            </div>
            <div className="userprofile_family_details_content">
              <img src={mother} alt="" />
              <div>
                <span>No Of Married Sister</span>
                <p>{family.no_of_married_sister}</p>
              </div>
            </div>
            <div className="userprofile_family_details_content">
              <img src={father} alt="" />
              <div>
                <span>Brother</span>
                <p>{family.no_of_brother}</p>
              </div>
            </div>
            <div className="userprofile_family_details_content">
              <img src={father} alt="" />
              <div>
                <span>No Of Married Brother</span>
                <p>{family.no_of_married_brother}</p>
              </div>
            </div>
            {/* <div className="userprofile_family_details_content">
              <GroupOutlined />
              <div>
                <span>Family Status</span>
                <p>Upper Middle</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
