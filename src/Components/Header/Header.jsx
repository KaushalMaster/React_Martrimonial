import React, { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import "./Header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

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
      // console.log(data);
      const userName = data?.data?.UserDetails?.user_name || "";
      const user_id = data?.data?.UserDetails?._id;
      // console.log(userName);
      // console.log(user_id);
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

  const hamburgerMenu = () => {
    if (window.innerWidth < 768) {
      return (
        <button className="header__hamburger" onClick={toggleDropdown}>
          <i class="fa fa-bars"></i>
        </button>
      );
    }
  };

  return (
    <div>
      {/* <Link to="/" className="h2__link">
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
        {hamburgerMenu()} */}
      {/* </div> */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        width="100"
        className="nav"
      >
        <Container>
          <Navbar.Brand href="#home" className="h2__link">
            Meet Up
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className="nhy " href="/">
                Home
              </Nav.Link>
              <Nav.Link href="/services" className="nhy pe-4">
                Services
              </Nav.Link>

              <Nav.Link href="/SelectPlan" className="nhy me-5">
                {" "}
                Plans
              </Nav.Link>

              <Nav.Link href="/contactus" className="nhy ">
                Contact
              </Nav.Link>
            </Nav>
            {token ? (
              <NavDropdown title={name} id="collasible-nav-dropdown">
                <NavDropdown.Item href="/profile" onClick={handleProfile}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="" onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/login" className="btn_login">
                Login
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
