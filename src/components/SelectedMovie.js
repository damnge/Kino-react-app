import React from "react";
import MovieCardDetail from "./MovieCardDetail";
import "./selectedmovie.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SelectedMovie() {
  const { movieId } = useParams();
  console.log(movieId);
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=4d1dd7d940550563fbb5c0d4434d7ced&language=en-U`;
  const [detail, setDetails] = useState([]);
  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(url);
      const details = await data.json();
      console.log(details);
      setDetails(details);
    };

    fetchDetails();
  }, [url]);

  return <MovieCardDetail key={detail.id} movie={detail} />;
}

export default SelectedMovie;
