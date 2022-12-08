import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./cinemacards.css";
import "./responsive.css";

const CinemaAndTrends = (props) => {
  const url = `https://api.themoviedb.org/3/movie/${props.type}?api_key=4d1dd7d940550563fbb5c0d4434d7ced&language=en-US&page=1&region=GB`;
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      const data = await fetch(url);
      const movies = await data.json();
      console.log(movies);
      setPopular(movies.results);
    };
    fetchPopular();
  }, [url]);

  return (
    <section className="cinema">
      <h1 className="section__title">{props.name}</h1>
      <div className="poster__wrapper">
        {popular.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </section>
  );
};
export default CinemaAndTrends;
