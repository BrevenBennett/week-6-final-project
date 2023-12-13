import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import MoviePlaceHolder from "../assets/movie_placeholder.jpg"

const MovieData = () => {
  // use this url to build ui first: https://www.omdbapi.com/?i=tt1905041&apikey=867f9b9b
  // const { imbdID } = useParams();
  // const [loading, setLoading] = useState(true);

  // async function fetchMovieData(imbdID) {
  //   const apiKey = "867f9b9b";

  //   const { data } = await axios.get(`https://www.omdbapi.com/?i=${imbdID}&apikey=${apiKey}`)
  //   setMovie(data);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   if (imbdID) {
  //     fetchMovieData(imdbID);
  //   }
  // }, [imbdID])

  return (
    <div className="movies__container">
      <div className="row">
        <div className="movie__clicked--links">
          <Link to="/movies" className="movies__link">
            <FontAwesomeIcon icon="arrow-left" />
          </Link>
          <Link to="/movies" className="movie__link">
            <h2 className="movie__clicked--title">Movies</h2>
          </Link>
        </div>
        <div className="book__clicked">
          <figure className="book__clicked--wrapper">
            <img src={MoviePlaceHolder} alt="" className="book__clicked--img" />
          </figure>
          <div className="book__clicked--description">
            <h2 className="book__clicked--title">movie.title</h2>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieData;
