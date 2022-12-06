import React, { useState } from "react";
// import SearchCard from "./SearchCard";
import "./searchresult.css";
import "./responsive.css";
import "./selectedmovie.css";

export default function SearchResult() {
  //states- input query, movies
  const [query, setQuery] = useState("");
  //create the state for movies, and update that state appropriate
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=4d1dd7d940550563fbb5c0d4434d7ced&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section className="search__results">
        <form className="form" onSubmit={searchMovies}>
          <label className="label" htmlFor="query">
            <h1 className="section__title"> Find the movie you like</h1>
          </label>
          <div className="input__wrapper">
            <input
              className="search__input"
              type="text"
              name="query"
              placeholder="Search movie from our database ..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="search__btn" type="submit">
              Search
            </button>
          </div>
        </form>
        <div className="card__list">
          <h1
            className="search__results__title"
            style={{ display: query ? "block" : "none" }}
          >
            Search Results
          </h1>
          <h3
            className="search__results__for"
            style={{ display: query ? "block" : "none" }}
          >
            for "{query}"
          </h3>
          {movies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <div className="search__card" key={movie.id}>
                <img
                  className="search__poster"
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                  alt={movie.title + " poster"}
                />
                <div className="movie__details">
                  <div className="movie__headline">
                    <h3 className="selected__movie__title">
                      {movie.title} ({movie.release_date.slice(0, 4)})
                    </h3>
                    <div className="rating__imdb">
                      <img
                        src="./img/imdb.png"
                        className="imdb"
                        alt="imdb logo"
                      />

                      <span className="score__imdb">{movie.vote_average}</span>
                    </div>
                  </div>

                  <p className="search__description">{movie.overview}</p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
