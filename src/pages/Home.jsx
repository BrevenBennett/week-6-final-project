import React from "react";
import MovieLanding from "../assets/movie.svg"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="landing">
      <header>
        <div className="header__description">
          <h1 className="header__title">The Best Movie Platorm in the U.S.</h1>
          <h3 className="header__subtitle">
            GRAB YOUR POPCORN AND
            <div className="header__subtitle--anchor">
              <Link to="/movies" className="red">
                FIND YOUR FAVORITE FLICK
              </Link>
            </div>
          </h3>
        </div>
        <figure className="header__img--wrapper">
          <img className="header__img" src={MovieLanding} alt="couch" />
        </figure>
      </header>
    </div>
  );
};

export default Home;