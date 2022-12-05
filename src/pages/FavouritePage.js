import React from "react";
import Navbar from "../components/Navbar";
import FavouriteAndWatch from "../components/FavouriteAndWatch";

import Footer from "../src/components/Footer";

function FavouritePage() {
  return (
    <div>
      <Navbar />
      <FavouriteAndWatch
        title="My Favourite Movies"
        img="./img/fullheart.svg"
      />
      <FavouriteAndWatch title="Movies I want to Watch" img="./img/eye.svg" />
      <Footer />
    </div>
  );
}

export default FavouritePage;
