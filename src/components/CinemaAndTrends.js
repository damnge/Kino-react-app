import React from "react";
import MovieCard from "./MovieCard";
import "./cinemacards.css";

function CinemaAndTrends(props) {
  return (
    <section className="cinema">
      <h1 className="section__title">{props.title}</h1>
      <div className="poster__wrapper">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
}

export default CinemaAndTrends;
