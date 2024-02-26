import React from 'react';
import Mainlogo from '/src/assets/Mainlogo2.png';
import './Footer.css';
function Footer() {
  return (
    <div>
      <div className="Top-footer_container">
        <div className="footer_site-logo">
          <img className="website-icon" src={Mainlogo} alt="Website Icon" />
        </div>

        <div className="footer_genre-list">
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

      

      </div>
  <div className="copyright_section">
          <span> © 2024 sadok acacha All Rights Reserved </span>
        </div>

    </div>
  );
}

export default Footer;
