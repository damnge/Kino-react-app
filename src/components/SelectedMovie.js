import React from "react";
import "./selectedmovie.css";
function SelectedMovie() {
  return (
    <section className="selected__movie">
      <div className="selected__movie__leftbox">
        <img
          src="./img/blackpanter.png"
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
        <h1 className="selected__movie__title">
          Black Panther: Wakanda Forever (2022)
        </h1>
        <div className="selected__movie__ratings">
          <span className="duration">161min</span>
          <span className="rating">PG-13</span>
          <div className="rating__imdb">
            <img src="./img/imdb.png" className="imdb" alt="imdb logo" />
            <span className="score__imdb">7.6</span>
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
        <p className="movie__description">
          Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to
          protect their nation from intervening world powers in the wake of King
          T'Challa's death. As the Wakandans strive to embrace their next
          chapter, the heroes must band together with Nakia and Everett Ross to
          forge a new path for their beloved kingdom.
        </p>
      </div>
    </section>
  );
}

export default SelectedMovie;
