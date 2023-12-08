import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Movies = () => {
  return (
    <>
      <div className="nav__movie--secondary">
        <h1 className="nav__title">Browse Our Movies</h1>
        <form action="" id="form" onSubmit={() => "onSearchChange(event)"}>
          <input type="text" placeholder="Find your movie" id="search" />
          <div className="header__btn--wrapper">
            <button className="header__btn">
              <FontAwesomeIcon icon="magnifying-glass" />
            </button>
          </div>
        </form>
      </div>
      <header className="header">
        <div className="header__movie">
          <h3 className="header__movie--search">Search Results For:</h3>
          <div className="filter__wrapper">
            <h3 className="header__movie--year">Year Range:</h3>
            <select id="filter" defaultValue="DEFAULT" onChange={() => "filterYear(event)"}>
              <option value="DEFAULT" disabled>
                Filter
              </option>
              <option value="Oldest_To_Newest">Old to New</option>
              <option value="Newest_To_Oldest">New to Old</option>
            </select>
          </div>
        </div>
        <div className="movie-list"></div>
        <div className="movie__loading">
          <FontAwesomeIcon icon="spinner" />
        </div>
      </header>
    </>
  );
};

export default Movies;
