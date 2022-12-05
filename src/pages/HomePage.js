import React from "react";
import Navbar from "../components/Navbar";
import CinemaAndTrends from "../components/CinemaAndTrends";

import Footer from "../src/components/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <CinemaAndTrends title="In Cinema Now" />
      <CinemaAndTrends title="Trending Now" />
      <Footer />
    </div>
  );
}

export default HomePage;
