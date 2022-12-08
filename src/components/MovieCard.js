import React from "react";
import "./moviecard.css";

const MovieCard = ({ movie }) => {
  return (
    <div
      className="movie__card"
      style={{ display: movie.backdrop_path ? "flex" : "none" }}
    >
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt={movie.path}
        className="poster"
      />
      <h5 className="movie__card__title">{movie.title}</h5>
    </div>
  );
};
export default MovieCard;
