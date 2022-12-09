import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style/navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img
              src="./img/logo.svg"
              alt="kino app logo"
              className="kino__logo"
            />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img
            src="./img/hamburger.svg"
            alt="hamburger menu icon"
            className="hamburger__icon"
          />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li className="nav__link__element">
              <Link to="/">Home</Link>
            </li>
            <li className="nav__link__element">
              <Link to="/cinema">Cinema</Link>
            </li>
            <li className="nav__link__element">
              <Link to="/ranking">Ranking</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
