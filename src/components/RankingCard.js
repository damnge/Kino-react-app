import React from "react";
import "./rankingcard.css";

function RankingCard() {
  return (
    <div className="ranking__card">
      <div className="ranking__card__id">1</div>
      <img className="ranking__card__img" src="./img/dune.png" alt="poster" />
      <div className="ranking__card__info">
        <div className="ranking__card__info__type">
          <h1 className="movie__title">
            Dune <span>(2021)</span>
          </h1>
          <div>
            {" "}
            <span className="duration">Duration</span>{" "}
            <span className="rating">Rating</span>
          </div>
        </div>
        <span className="genere">Genere</span>
      </div>
      <div className="ranking__card__score">
        <span className="score">8.7</span>
        <img src="./img/star.svg" className="score__star" alt="star" />
      </div>
    </div>
  );
}

export default RankingCard;
