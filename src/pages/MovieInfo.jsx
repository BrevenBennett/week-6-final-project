import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const MovieInfo = ({ movies }) => {
  // const { id } = useParams();
  // const [loading, setLoading] = useState(true);
  // const [movie, setMovie] = useState("");

  // async function fetchMovieInfo() {
  //   const apiKey = "867f9b9b";
  //   const { data } = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}&s=`)
  //   setMovie(data);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchMovieInfo();
  // }, [])

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
            <img src="{movie.Poster}" alt="" className="movie__selected--img" />
          </figure>
          <div className="movie__selected--description">
            <h2 className="movie__selected--title">movie.title</h2>
            <div className="movie__summary">
              <h3 className="movie__summary--title">Summary</h3>
              <p className="movie__summary--para">
                movie.Plot
              </p>
              <p className="movie__summary--para">
                movie.Rated
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
