import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import axios from "axios";
import Movie from "../components/ui/Movie";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    fetchMovies();
  }

  async function fetchMovies() {
    try {
      setLoading(true);

      const apiKey = "867f9b9b";
      const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;

      const { data } = await axios.get(apiUrl);
      if (data && data.Search) {
        setMovies(data.Search);
      }
    } catch (error) {
      console.error("Couldn't find what you're looking for:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }
  }

  function filterMovies(filter) {
    console.log(filter);
    if (filter === "Oldest_To_Newest") {
      setMovies(movies.slice(0, 6).sort((a, b) => a.Year - b.Year));
    }
    if (filter === "Newest_To_Oldest") {
      setMovies(movies.slice(0, 6).sort((a, b) => b.Year - a.Year));
    }
  }

  return (
    <>
      <div className="nav__movie--secondary">
        <h1 className="nav__title">Browse Our Movies</h1>
        <form action="" id="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Find your movie"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="header__btn--wrapper">
            <button className="header__btn" type="submit">
              <FontAwesomeIcon icon="magnifying-glass" size="xl" />
            </button>
          </div>
        </form>
      </div>
      <div className="header">
        <div className="header__movie">
          <h3 className="header__movie--search">Search Results For: {movies.length > 0 && search}</h3>
          <div className="filter__wrapper">
            <h3 className="header__movie--year">Year Range:</h3>
            <select
              id="filter"
              defaultValue="DEFAULT"
              onChange={(e) => filterMovies(e.target.value)}
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
          {movies.length === 0 ? (
            <h1 className="movies__placeholder">Search now to find your favorite movies!</h1>
            ) : (loading ? (
            <div className="movie__loading">
              <FontAwesomeIcon icon="spinner" />
            </div>
          ) : (
            movies.map((movie) => <Movie movie={movie} key={movie.imdbID} />).slice(0, 6)
          ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
