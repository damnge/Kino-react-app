import React from "react";
import "./selectedmovie.css";

function MovieCardDetail({ movie }) {
  return (
    <section className="selected__movie">
      <div className="selected__movie__leftbox">
        <img
          src="./img/Blackpanter.png"
          alt="poster"
          className="selected__poster"
        />
        <div className="icons__box">
          <div className="icons__box__heart">
            <img src="./img/heart.svg" alt="heart icon" className="fav-icon" />
            <span className="add__fav">Add to Favourite</span>
          </div>
          <div className="icons__box__eye">
            <img src="./img/eye.svg" alt="eye icon" className="fav-icon" />
            <span className="want__watch">Want to Watch</span>
          </div>
        </div>
      </div>
      <div className="selected__movie__rightbox">
        <h1 className="selected__movie__title">{movie.title}</h1>
        <div className="selected__movie__ratings">
          <span className="duration">161min</span>
          <span className="rating">PG-13</span>
          <div className="rating__imdb">
            <img src="./img/imdb.png" className="imdb" alt="imdb logo" />
            <span className="score__imdb">{movie.vote_average}</span>
          </div>
          <div className="rating__tomato">
            <img src="./img/tomato.png" className="tomato" alt="tomoato logo" />
            <span className="score__tomato">80%</span>
          </div>
        </div>
        <div className="movie__genre">
          <span>Action</span>
          <span>Adventure</span>
          <span>Drama</span>
        </div>
        <p className="movie__description">{movie.overview}</p>
      </div>
    </section>
  );
}

export default MovieCardDetail;
