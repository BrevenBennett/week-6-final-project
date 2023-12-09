import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Movie from "../components/ui/Movie";

const Movies = () => {
  const { title } = useParams();
  console.log(title)
  const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState();
  const [searchTitle, setSearchTitle] = useState(title);

  function onSearch() {
    fetchMovies(searchTitle);
  }

  async function fetchMovies(searchedTitle) {
    // setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=53de5b3d&s=${searchedTitle || title}`
    );
    setMovies(data);
    console.log(data);
    // setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  // function filterMovies(filter) {
  //   console.log(filter);
  //   if (filter === "Oldest_To_Newest") {
  //     setMovies(
  //       movies
  //         .slice(0, 6)
  //         .sort(
  //           (a, b) =>
  //             (a.salePrice || a.originalPrice) -
  //             (b.salePrice || b.originalPrice)
  //         )
  //     );
  //   }
  //   if (filter === "Newest_To_Oldest") {
  //     setMovies(
  //       movies
  //         .slice(0, 6)
  //         .sort(
  //           (a, b) =>
  //             (b.salePrice || b.originalPrice) -
  //             (a.salePrice || a.originalPrice)
  //         )
  //     );
  //   }
  // }

  return (
    <>
      <div className="nav__movie--secondary">
        <h1 className="nav__title">Browse Our Movies</h1>
        <form
          action=""
          id="form"
          value={searchTitle}
          onSubmit={(e) => onSearch(e.target.value)}
        >
          <input
            type="text"
            placeholder="Find your movie"
            id="search"
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <div className="header__btn--wrapper">
            <button className="header__btn" onClick={() => onSearch}>
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
            <select
              id="filter"
              defaultValue="DEFAULT"
              // onChange={(e) => filterMovies(e.target.value)}
            >
              <option value="DEFAULT" disabled>
                Filter
              </option>
              <option value="Oldest_To_Newest">Old to New</option>
              <option value="Newest_To_Oldest">New to Old</option>
            </select>
          </div>
        </div>
        <div className="movie-list">
          {/* {movies.map((movie) => (<Movie movie={movie} />).slice(0, 6))} */}
        </div>
        <div className="movie__loading">
          <FontAwesomeIcon icon="spinner" />
        </div>
      </header>
    </>
  );
};

export default Movies;
