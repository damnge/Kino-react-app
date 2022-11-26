import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img src="img/logo.svg" alt="kino app logo" className="logo" />
        <div className="right__links">
          <input
            className="search__bar"
            placeholder="Search for a Movie"
          ></input>
          <ul className="navbar__links">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">Cinema</a>
            </li>
            <li>
              <a href="index.html">Ranking</a>
            </li>
            <li>
              <a href="index.html">Favourite</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
