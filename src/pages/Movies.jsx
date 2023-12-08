import React from "react";

const Movies = () => {
  return (
    <>
      <div class="nav__movie--secondary">
        <h1 class="nav__title">Browse Our Movies</h1>
        <form action="" id="form" onsubmit="onSearchChange(event)">
          <input type="text" placeholder="Find your movie" id="search" />
          <div class="header__btn--wrapper">
            <button class="header__btn">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
      </div>
      <header class="header">
        <div class="header__movie">
          <h3 class="header__movie--search">Search Results For:</h3>
          <div class="filter__wrapper">
            <h3 class="header__movie--year">Year Range:</h3>
            <select id="filter" onchange="filterYear(event)">
              <option value="" selected disabled>
                Filter
              </option>
              <option value="Oldest_To_Newest">Old to New</option>
              <option value="Newest_To_Oldest">New to Old</option>
            </select>
          </div>
        </div>
        <div class="movie-list"></div>
        <div class="movie__loading">
          <i class="fas fa-spinner"></i>
        </div>
      </header>
    </>
  );
};

export default Movies;
