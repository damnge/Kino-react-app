import React from "react";
import "./searchcard.css";

function SearchCard(props) {
  return (
    <div className="search__card">
      <div className="poster__box">
        <img src={props.img} alt={props.name} className="search__poster" />
      </div>
      <div className="movie__details">
        <h1 className="selected__movie__title">{props.name}</h1>
        <span className="duration">{props.time}</span>
        <span className="rating">{props.rating}</span>
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
