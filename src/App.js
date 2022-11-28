import "./App.css";
import CinemaAndTrends from "./components/CinemaAndTrends";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      {" "}
      <Navbar />
      <CinemaAndTrends title="In Cinema Now" />
      <CinemaAndTrends title="Trending Now" />
    </div>
  );
}

export default App;
