import React from "react";
import CinemaAndTrends from "../components/CinemaAndTrends";

function HomePage() {
  return (
    <div>
      <CinemaAndTrends name="In Cinemas Now" type="upcoming" />
      <CinemaAndTrends name="Popular Movies" type="popular" />
    </div>
  );
}

export default HomePage;
