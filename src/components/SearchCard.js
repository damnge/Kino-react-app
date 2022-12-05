import React from "react";
import "./searchcard.css";

function SearchCard() {
  return (
    <div className="search__card">
      <div className="poster__box">
        <img
          src="./img/dune.png"
          alt="movie poster"
          className="search__poster"
        />
      </div>
      <div className="movie__details">
        <h1 className="selected__movie__title">Dune: Part One (2021)</h1>
        <span className="duration">161min</span>
        <span className="rating">PG-13</span>
        <div className="movie__genre">
          <span>Action</span>
          <span>Adventure</span>
          <span>Drama</span>
        </div>
      </div>
    </div>
  );
}
export default SearchCard;
