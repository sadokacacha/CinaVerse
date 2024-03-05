import React, { useState } from "react";
import "./NavBar.css";

import Mainlogo from "/MainLogo2.png";

import { UilSearch, UilFilter, UilUser } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar_container">
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
            <Link to={`/MoviesApi`}>MOVIES</Link>
          </li>
          <li>
            <Link to={`/Filter`}>TV SHOWS</Link>
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
            placeholder="Search..."
          />

          <UilSearch className="search_icon " />
        </form>
      </div>

      <div className="NavBar_site-profile">
        <UilUser className=" profile_icon" />
      </div>
    </div>
  );
}

export default NavBar;
