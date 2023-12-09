import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";

const MovieInfo = ({ movies }) => {
    const { title } = useParams();
    const movie = movies.find((movie) => movie.title === title)

  return (
    <div className="movies__container">
      <div className="row">
        <div className="movie__selected--top">
          <Link to="/movies" className="movies__link">
            <FontAwesomeIcon icon="arrow-left" />
          </Link>
          <Link to="/movies" className="movie__link">
            <h2 className="movie__selected--title--top">Movies</h2>
          </Link>
        </div>
        <div className="movie__selected">
          <figure className="movie__selected--figure">
            <img src={movie.Poster} alt="" className="movie__selected--img" />
          </figure>
          <div className="movie__selected--description">
            <h2 className="movie__selected--title">{movie.title}</h2>
            <div className="movie__summary">
              <h3 className="movie__summary--title">Summary</h3>
              <p className="movie__summary--para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                autem maxime dolore quam fuga iste totam veritatis quaerat
                minima necessitatibus. Vitae earum corrupti nulla harum cum
                recusandae voluptatibus blanditiis veniam!
              </p>
              <p className="movie__summary--para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                autem maxime dolore quam fuga iste totam veritatis quaerat
                minima necessitatibus. Vitae earum corrupti nulla harum cum
                recusandae voluptatibus blanditiis veniam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
