import "./App.css";
import CinemaAndTrends from "./components/CinemaAndTrends";
import Navbar from "./components/Navbar";
import RankingCard from "./components/RankingCard";
import SelctedMovie from "./components/SelectedMovie";

function App() {
  return (
    <div>
      {" "}
      <Navbar />
      <CinemaAndTrends title="In Cinema Now" />
      <CinemaAndTrends title="Trending Now" />
      <RankingCard />
      <SelctedMovie />
    </div>
  );
}

export default App;
