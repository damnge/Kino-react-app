import React from "react";
import "./App.css";
import CinemaAndTrends from "./components/CinemaAndTrends";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Copyright from "./components/Footer";

function App() {
  return (
    <div style={{position:"relative", height:"100%"}}>
      {" "}
      <Navbar />
      <CinemaAndTrends title="In Cinema Now" />
      <CinemaAndTrends title="Trending Now" />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
