import React from "react";
import MovieLanding from "../assets/movie.svg"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="landing">
      <header>
        <div class="header__description">
          <h1 class="header__title">The Best Movie Platorm in the U.S.</h1>
          <h3 class="header__subtitle">
            GRAB YOUR POPCORN AND
            <div class="header__subtitle--anchor">
              <Link to="/movies" class="red">
                FIND YOUR FAVORITE FLICK
              </Link>
            </div>
          </h3>
        </div>
        <figure class="header__img--wrapper">
          <img class="header__img" src={MovieLanding} alt="couch" />
        </figure>
      </header>
    </div>
  );
};

export default Home;