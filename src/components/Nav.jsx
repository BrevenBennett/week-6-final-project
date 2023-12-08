import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/" class="logo__wrapper">
        <figure class="logo__img--wrapper">
          <i class="fa-solid fa-film"></i>
        </figure>
        <h2 class="logo__text">Movie Madness</h2>
      </Link>
      <ul class="nav__link--list">
        <li class="nav__link">
          <Link to="/" class="nav__link--anchor">
            Home
          </Link>
        </li>
        <li class="nav__link">
          <Link to="/movies" class="nav__link--anchor">
            Find Your Movie
          </Link>
        </li>
        <li class="nav__link">
          <Link
            to="/"
            class="nav__link--anchor nav__link--anchor-primary no-cursor"
          >
            Sign In
          </Link>
        </li>
      </ul>
      <button class="btn__menu" onclick="openMenu()">
        <i class="fas fa-bars"></i>
      </button>
      <div class="menu__backdrop">
        <button class="btn__menu btn__menu--close" onclick="closeMenu()">
          <i class="fas fa-times"></i>
        </button>
        <ul class="menu__links">
          <li class="menu__list">
            <Link
              to="/"
              class="menu__link link__hover-effect"
              onclick="closeMenu()"
            >
              Home
            </Link>
          </li>
          <li class="menu__list">
            <Link
              to="/movies"
              class="menu__link link__hover-effect"
              onclick="closeMenu()"
            >
              Find Your Movie
            </Link>
          </li>
          <li class="menu__list menu__list--primary">
            <Link class="menu__link nav__link--primary" onclick="closeMenu()">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
