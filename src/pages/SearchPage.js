import React from "react";
import Navbar from "../components/Navbar";
import SearchResult from "../components/SearchResult";
import Footer from "../components/Footer";

function SearchPage() {
  return (
    <div>
      <Navbar />
      <SearchResult />
      <Footer />
    </div>
  );
}

export default SearchPage;
