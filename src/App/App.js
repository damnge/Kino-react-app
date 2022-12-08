import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import Navbar from "../components/Navbar";
// Pages that need to be linked

import HomePage from "../pages/HomePage";
import RankingPage from "../pages/RankingPage";
import FavouritePage from "../pages/FavouritePage";
import Footer from "../components/Footer";
import SelectedMovie from "../components/SelectedMovie";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/cinema" element={<HomePage />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="/selectedmovie/:id" element={<SelectedMovie />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
