import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <Link to={`/movies/${movie.imbdID}`}>
        <figure className="movie__img--wrapper">
          <img src={movie.Poster} alt="" className="movie__img" />
        </figure>
      </Link>
      <h4 className="movie__title">{movie.Title}</h4>
      <h4 className="movie__year">{movie.Year}</h4>
    </div>
  );
};

export default Movie;
