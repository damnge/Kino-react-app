import React from "react";
import { useEffect, useState } from "react";
import "./style/rankingcard.css";
import "./style/responsive.css";
import { Link } from "react-router-dom";

function RankingCard() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4d1dd7d940550563fbb5c0d4434d7ced&language=en-US&page=1-2"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);
  console.log(movies);
  return (
    <div className="ranking__card__container">
      <h1 className="ranking__title">Ranking of TOP 20 movies </h1>
      {movies.map((movie, index) => (
        <>
          <Link to={`/${movie.id}`}>
            <div className="ranking__card">
              <div className="ranking__card__id"> {index + 1} </div>
              <img
                className="ranking__card__img"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="poster"
              />
              <div className="ranking__info__score">
                <div className="ranking__card__info">
                  <h1 className="movie__title__ranking"> {movie.title} </h1>
                </div>
                <div className="ranking__card__score">
                  <span className="score">{movie.vote_average} </span>
                  <img
                    src="./img/star.svg"
                    className="score__star"
                    alt="star"
                  />
                </div>
              </div>
            </div>
          </Link>
          <div className="divider"></div>
        </>
      ))}
    </div>
  );
}
export default RankingCard;
