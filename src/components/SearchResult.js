import React from "react";
import SearchCard from "./SearchCard";
import "./searchresult.css";

function SearchResult() {
  return (
    <section className="search__results">
      <h1 className="search__results__title">Search Results</h1>
      <h3 className="search__results__for">for "Dune"</h3>
      <SearchCard />
      <SearchCard />
      <SearchCard />
    </section>
  );
}

export default SearchResult;
