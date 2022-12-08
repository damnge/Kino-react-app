import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import Navbar from "../components/Navbar";
// Pages that need to be linked

import HomePage from "../pages/HomePage";
import RankingPage from "../pages/RankingPage";
import FavouritePage from "../pages/FavouritePage";
import Footer from "../components/Footer";
// import SelectedMoviePage from "../pages/SelectedMoviePage";
import SelectedMovie from "../components/SelectedMovie";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route exact path="/cinema" element={<HomePage />} />
        <Route exact path="/ranking" element={<RankingPage />} />
        <Route exact path="/favourite" element={<FavouritePage />} />
        <Route exact path="/selectedmovie" element={<SelectedMovie />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



