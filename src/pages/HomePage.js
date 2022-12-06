import React from "react";
import CinemaAndTrends from "../components/CinemaAndTrends";

function HomePage() {
  return (
    <div>
      <CinemaAndTrends title="In Cinema Now" />
      <CinemaAndTrends title="Trending Now" />
    </div>
  );
}

export default HomePage;
