import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <figure className="movie__img--wrapper">
        <img src={movie.Poster} alt="" className="movie__img" />
      </figure>
      <h4 className="movie__title">{movie.Title}</h4>
      <h4 className="movie__year">{movie.Year}</h4>
    </div>
  );
};

export default Movie;
