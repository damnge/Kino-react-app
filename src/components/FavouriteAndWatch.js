import React from "react";
import MovieCard from "./MovieCard";
import "./cinemacards.css";

function FavouriteAndWatch(props) {
  return (
    <section className="cinema">
      <div style={{ display: "inline-flex" }}>
        <h1 className="section__title">{props.title}</h1>
        <img
          className="section__img"
          src={props.img}
          alt="heart"
          style={{ marginLeft: "15px", paddingBottom: "15px" }}
        />
      </div>
      <div className="poster__wrapper">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
}

export default FavouriteAndWatch;
