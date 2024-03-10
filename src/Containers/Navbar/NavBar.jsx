import React, { useState } from "react";

import "./NavBar.css";

import Mainlogo from "/MainLogo2.png";

import { UilSearch, UilFilter, UilUser } from "@iconscout/react-unicons";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ movieQuery, setMovieQuery, fetchData , customClassItemDetail }) => {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setMovieQuery(e.target.value);
  };

  const handleSearchClick = () => {
    navigate(`/Search`);
    fetchData();
  };

  return (
    <div className={`NavBar_container ${customClassItemDetail}`}>
      <div className="NavBar_site-logo">
        <Link to={`/`}>
          <img className="website-icon" src={Mainlogo} alt="Website Icon" />
        </Link>
      </div>

      <div className="NavBar_genre-list">
        <ul>
          <li>
            <Link to={`/Filter`}>GENERE</Link>
          </li>
          <li>
            <Link to={`/Filter`}>COUNTRY</Link>
          </li>
          <li>
            <Link to={`/PopularMovies`}>MOVIES</Link>
          </li>
          <li>
            <Link to={`/Autocomplet`}>TV SHOWS</Link>
          </li>
          <li>
            <Link to={`/Filter`}>TRENDING</Link>
          </li>
          <li>
            <Link to={`/Filter`}>TOP IMDB</Link>
          </li>
        </ul>
      </div>

      <div className="NavBar_input-Warpper">
        <form className="NavBar_search-form" action="/search">
          <button className="NavBar_search-form-btn">
            Filter
            <UilFilter className="filter_icon" size={13} />
          </button>
          <input
            className="NavBar_search-form-search"
            type="text"
            value={movieQuery}
            onChange={handleInputChange}
            placeholder="Search for movies..."
          />{" "}
          <UilSearch className="search_icon " onClick={handleSearchClick} />
        </form>
      </div>

      <div className="NavBar_site-profile">
        <UilUser className=" profile_icon" />
      </div>
    </div>
  );
};

export default NavBar;
