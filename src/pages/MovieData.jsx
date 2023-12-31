import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MovieData = () => {
  const { imdbID } = useParams();
  console.log(imdbID);
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState();

  async function fetchMovieData() {
    setLoading(true);
    const apiKey = "867f9b9b";

    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`
    );
    setMovieData(data);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }

  useEffect(() => {
    fetchMovieData();
  }, [imdbID]);

  return (
    <div className="movies__container">
      <div className="row">
        <div className="movie__clicked--links">
          <Link to="/movies" className="movie__link">
            <FontAwesomeIcon icon="arrow-left" />
          </Link>
          <Link to="/movies" className="movie__link">
            <h2 className="movie__clicked--title">Movies</h2>
          </Link>
        </div>
        <div className="movie__clicked">
          {loading ? (
            new Array(1).fill(0).map((_, index) => (
              <div className="skeleton__info--wrapper" key={index}>
                <div className="movie__poster--skeleton"></div>
                <div className="movie__info-skeleton--wrapper">
                  <div className="movie__info-title--skeleton movie__info-title--skeleton-long"></div>
                  <div className="movie__info-title--skeleton"></div>
                  <div className="movie__info-title--skeleton"></div>
                  <div className="movie__info-title--skeleton"></div>
                  <div className="movie__info-title--skeleton movie__info-title--skeleton-large"></div>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="movie__clicked--description">
                <figure className="movie__clicked--figure">
                  <img
                    src={movieData.Poster}
                    alt=""
                    className="movie__clicked--img"
                  />
                </figure>
              </div>
              <div className="movie__clicked--info">
                <h1 className="movie__clicked--detail">{movieData.Title}</h1>
                <div className="movie__clicked--detail">
                  <h2>Initial Release:</h2> 
                  <h3>{movieData.Released}</h3>
                </div>
                <div className="movie__clicked--detail">
                  <h2>Director:</h2> 
                  <h3>{movieData.Director}</h3>
                </div>
                <div className="movie__clicked--detail">
                  <h2>Box Office:</h2> 
                  <h3>{movieData.BoxOffice}</h3>
                </div>
                <div className="movie__clicked--detail">
                  <h2>Synopsis:</h2>
                  <h3>{movieData.Plot}</h3>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieData;
