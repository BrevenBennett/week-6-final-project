import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/" className="logo__wrapper">
            <figure className="logo__img--wrapper">
              <FontAwesomeIcon icon="film" />
            </figure>
            <h2 className="logo__text">Movie Madness</h2>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <Link to="/movies" className="footer__link">
              Movies
            </Link>
            <Link to="/" className="footer__link no-cursor">
              Sign In
            </Link>
          </div>
          <div className="footer__copyright">Copyright &copy; 2023 Breven Bennett</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
