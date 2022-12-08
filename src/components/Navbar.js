import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img src="./img/logo.svg" alt="kino app logo" className="logo" />
        <div className="right__links">
          <ul className="navbar__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cinema">Cinema</Link>
            </li>
            <li>
              <Link to="/ranking">Ranking</Link>
            </li>
            {/* <li>
              <Link to="/favourite">Favourite</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
