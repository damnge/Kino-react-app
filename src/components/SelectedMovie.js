import React from "react";
import "./selectedmovie.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SelectedMovie() {
  const [film, setFilm] = useState([]);
  const { id } = useParams();

  const detailMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/11?api_key=4d1dd7d940550563fbb5c0d4434d7ced&language=en-U`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setFilm(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  // useEffect(() => {
  //   detailMovies(11);
  // }, []);

  return (
    <>
      <section className="selected__movie">
        {film.map((data, index) => (
          <div key={index}>
            <div className="selected__movie__leftbox">
              <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${data.poster_path}`}
                alt="poster"
                className="selected__poster"
              />
              <div className="icons__box">
                <div className="icons__box__heart">
                  <img
                    src="./img/heart.svg"
                    alt="heart icon"
                    className="fav-icon"
                  />
                  <span className="add__fav">Add to Favourite</span>
                </div>
                <div className="icons__box__eye">
                  <img
                    src="./img/eye.svg"
                    alt="eye icon"
                    className="fav-icon"
                  />
                  <span className="want__watch">Want to Watch</span>
                </div>
              </div>
            </div>
            <div className="selected__movie__rightbox">
              <h1 className="selected__movie__title">${data.name}</h1>
              <div className="selected__movie__ratings">
                <span className="duration">161min</span>
                <span className="rating">PG-13</span>
                <div className="rating__imdb">
                  <img src="./img/imdb.png" className="imdb" alt="imdb logo" />
                  <span className="score__imdb">${data.vote_average}</span>
                </div>
                <div className="rating__tomato">
                  <img
                    src="./img/tomato.png"
                    className="tomato"
                    alt="tomoato logo"
                  />
                  <span className="score__tomato">80%</span>
                </div>
              </div>
              <div className="movie__genre">
                <span>Action</span>
                <span>Adventure</span>
                <span>Drama</span>
              </div>
              <p className="movie__description">{data.overview}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default SelectedMovie;
