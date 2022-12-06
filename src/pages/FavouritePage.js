import React from "react";
import FavouriteAndWatch from "../components/FavouriteAndWatch";
import Footer from "../components/Footer";

function FavouritePage() {
  return (
    <div>
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
