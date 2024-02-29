import React, { useState } from "react";
import "./NavBar.css";

import Mainlogo from "/src/assets/Mainlogo2.png";
import { UilSearch, UilFilter, UilUser } from "@iconscout/react-unicons";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
  const [btnClicked, setBtnClicked] = useState(false);

  const HandleClick = () => {
    setBtnClicked((btnClicked) => !btnClicked);
  };
  let toggleClassCheck = btnClicked ? " active" : null;

  /* idk this is weird fix this later cuz me lazy  */

  return (
    <div className="NavBar_container">
      <div className="NavBar_site-logo">
        <img className="website-icon" src={Mainlogo} alt="Website Icon" />
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
            <Link to={`/Filter`}>MOVIES</Link>
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
          <button onClick={HandleClick} className="NavBar_search-form-btn">
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
