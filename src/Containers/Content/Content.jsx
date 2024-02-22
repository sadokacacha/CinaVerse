import React from 'react';
import './Content.css';
import Movies from '../../Components/Movies';
import SideBar from '../../Components/SideBar';

function Content() {
  return (
    <div className="movie-explore-section">
      <div>
        <p>If you enjoy the website, please consider sharing it</p>
      </div>

      <div className="content-container">
        <div className="Latest">
          <h1>Recommended</h1>
          <p> movies / tv show </p>
          <div className="recommended-movies-container">
            <Movies />
            <Movies />
            <Movies />
            <Movies />
            <Movies />
            <Movies />
            <Movies />
            <Movies />
            <Movies />
            <Movies />
            <Movies />
            <Movies />
          </div>

          <div>
            <h1>latest</h1>
            <p> movies / tv show </p>
            <div className="latest-movies-container">
              <Movies />
              <Movies />
            </div>
          </div>
        </div>

        <div className="Side_Content">
          <div>
            <h1>Trending</h1>
            <p>day / week / month</p>
            <div className="Trending-Side_Content-movies">
              <SideBar />
              <SideBar />
              <SideBar />
              <SideBar />
            </div>
          </div>
          <div>
            <h1>updated</h1>
            <p>day / week / month</p>
            <div className="updated-Side_Content-movies">
              <SideBar />
              <SideBar />
              <SideBar />
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
