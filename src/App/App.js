import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import RankingPage from "../pages/RankingPage";
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
        <Route path="/:movieId" element={<SelectedMovie />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
