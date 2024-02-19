import React from "react";
import "./NavBar.css";
import Mainlogo from "/src/assets/Mainlogo2.png";
import { UilSearch, UilFilter, UilUser } from "@iconscout/react-unicons";
function NavBar() {
  return (
    <div className="NavBar_container">
      <div className="NavBar_site-logo">
        <img className="website-icon" src={Mainlogo} alt="Website Icon" />
      </div>

      <div className="NavBar_genre-list">
        <ul>
          <li>
            <a href="#">GENRE</a>
          </li>
          <li>
            <a href="#">COUNTRY</a>
          </li>
          <li>
            <a href="#">MOVIES</a>
          </li>
          <li>
            <a href="#">TV SHOWS</a>
          </li>
          <li>
            <a href="#">TRENDING</a>
          </li>
          <li>
            <a href="#">TOP IMDB</a>
          </li>
        </ul>
      </div>
      <div className="NavBar_input-Warpper">
        <form className="NavBar_search-form" action="/search">
          <input
            className="NavBar_search-form-search"
            type="text"
            placeholder="Search..."
          />

          <UilSearch className="icons search_icon" />
          <div className="NavBar_search-form-btn-wrapper">
            <input
              className="NavBar_search-form-btn"
              type="submit"
              value="Filter"
            />
          </div>
          <UilFilter className="icons filter_icon" size={20} />
        </form>
      </div>
      <div className="NavBar_site-profile">
        <UilUser className="icons profile_icon" />
      </div>
    </div>
  );
}

export default NavBar;