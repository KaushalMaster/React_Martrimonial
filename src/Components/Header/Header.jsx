import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [name, setName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const getUser = async () => {
    try {
      const response = await fetch(
        "https://metrimonial.onrender.com/api/profile/userdetails",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      const userName = data?.data?.UserDetails[0]?.user_name || "";
      setName(userName);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setShowDropdown(false);
  };

  const handleProfile = () => {
    navigate("/profile");
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown((prevValue) => !prevValue);
  };

  return (
    <div className="header">
      <Link to="/" className="h2__link">
        <h2 className="header__h2">
          Meet
          <span>Up</span>
        </h2>
      </Link>
      <div className="header__links">
        <a href="/">Home</a>
        <a href="/services">Our Services</a>
        <a href="/SelectPlan">Our Plans</a>
        <Link to="/ContactUs">Contact Us</Link>

        {token ? (
          <div className="header__dropdown">
            <p className="header__name" onClick={toggleDropdown}>
              Welcome,
              <br />
              {name}
            </p>
            {showDropdown && (
              <ul className="header__dropdown-menu">
                <li onClick={handleLogout}>Logout</li>
                <li onClick={handleProfile}>Profile</li>
              </ul>
            )}
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
