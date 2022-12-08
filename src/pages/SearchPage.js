import React from "react";
import SearchResult from "../components/SearchResult";
import CinemaAndTrends from "../components/CinemaAndTrends";

function SearchPage() {
  return (
    <>
      <SearchResult />
      <CinemaAndTrends name="Popular Movies" type="popular" />;
    </>
  );
}

export default SearchPage;
