import React from "react";
import MovieCardDetail from "./MovieCardDetail";
import "./selectedmovie.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SelectedMovie() {
  const { movieId } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=4d1dd7d940550563fbb5c0d4434d7ced&language=en-U`;
  const [detail, setDetails] = useState([]);
  useEffect(() => {
    fetchDetails();
  });
  const fetchDetails = async () => {
    const data = await fetch(url);
    const details = await data.json();
    console.log(details);
    setDetails(details.results);
  };

  return (
    <div>
      {detail.map((movie) => {
        return <MovieCardDetail key={movie.id} movie={movie} />;
      })}
      ;
    </div>
  );
}

export default SelectedMovie;
