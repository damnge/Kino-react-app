import "./App.css";
import CinemaAndTrends from "./components/CinemaAndTrends";
import Navbar from "./components/Navbar";
import RankingCard from "./components/RankingCard";
import SelctedMovie from "./components/SelectedMovie";
import SearchResult from "./components/SearchResult";
import FavouriteAndWatch from "./components/FavouriteAndWatch";

// Pages
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import RankingPage from "./pages/RankingPage";
import FavouritePage from "./pages/FavouritePage";
import SelectedMoviePage from "./pages/SelectedMoviePage";

function App() {
  return (
    <div>
      {" "}
      <Navbar />
      <CinemaAndTrends title="In Cinema Now" />
      <CinemaAndTrends title="Trending Now" />
      <RankingCard />
      <SelctedMovie />
      <SearchResult />
      <FavouriteAndWatch
        title="My Favourite Movies"
        img="./img/fullheart.svg"
      />
      <FavouriteAndWatch title="Movies I want to Watch" img="./img/eye.svg" />
    </div>
  );
}

export default App;
