import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <Link to="/" className="logo__wrapper">
        <figure className="logo__img--wrapper">
          <FontAwesomeIcon icon="film" />
        </figure>
        <h2 className="logo__text">Movie Madness</h2>
      </Link>
      <ul className="nav__link--list">
        <li className="nav__link">
          <Link to="/" className="nav__link--anchor">
            Home
          </Link>
        </li>
        <li className="nav__link">
          <Link to="/:title" className="nav__link--anchor">
            Find Your Movie
          </Link>
        </li>
        <li className="nav__link">
          <Link
            to="/"
            className="nav__link--anchor nav__link--anchor-primary no-cursor"
          >
            Sign In
          </Link>
        </li>
      </ul>
      <button className="btn__menu" onClick={openMenu}>
        <FontAwesomeIcon icon="bars" />
      </button>
      <div className="menu__backdrop">
        <button className="btn__menu btn__menu--close" onClick={closeMenu}>
          <FontAwesomeIcon icon="times" />
        </button>
        <ul className="menu__links">
          <li className="menu__list">
            <Link
              to="/"
              className="menu__link link__hover-effect"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="menu__list">
            <Link
              to="/:title"
              className="menu__link link__hover-effect"
              onClick={closeMenu}
            >
              Find Your Movie
            </Link>
          </li>
          <li className="menu__list menu__list--primary">
            <Link className="menu__link nav__link--primary" onClick={closeMenu}>
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
