import React from "react";
import Navbar from "../components/Navbar";
import SelctedMovie from "../components/SelectedMovie";

import Footer from "../src/components/Footer";

function SelectedMoviePage() {
  return (
    <div>
      <Navbar />
      <SelctedMovie />
      <Footer />
    </div>
  );
}

export default SelectedMoviePage;
