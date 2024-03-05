import React from "react";
import "./SecondNav.css";
import Mainlogo from "/MainLogo2.png";
import { UilSearch, UilFilter, UilUser } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
function SecondNav() {
  return (
    <>
      <div className="Second_NavBar_container">
        <div className="Second_NavBar_site-logo">
          <Link to={`/`}>
            <img className="website-icon" src={Mainlogo} alt="Website Icon" />
          </Link>{" "}
        </div>

        <div className="Second_NavBar_genre-list">
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

        <div className="Second_NavBar_input-Warpper">
          <form className="Second_NavBar_search-form" action="/search">
            <button className="NavBar_search-form-btn">
              Filter
              <UilFilter className="Second_filter_icon" size={13} />
            </button>

            <input
              className="Second_NavBar_search-form-search"
              type="text"
              placeholder="Search..."
            />

            <UilSearch className="Second_search_icon " />
          </form>
        </div>

        <div className="Second_NavBar_site-profile">
          <UilUser className=" Second_profile_icon" />
        </div>
      </div>

      <div className="Second_NavBar_line">
        <hr />
      </div>
    </>
  );
}

export default SecondNav;
