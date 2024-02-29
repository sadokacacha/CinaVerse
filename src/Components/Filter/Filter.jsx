import React from "react";
import "./Filter.css";
import Movies from "../Movies/Movies";
import SideBar from "../SideBar/SideBar";
import SecondNav from "../../Containers/SecondNav/SecondNav";
function Filter() {
  return (
    <div className="movie-explore-section">
      <div className="Second_NavBar">

      <SecondNav />
      </div>

      <div className="content-container">
        <div className="Latest">
          <h1>Recommended</h1>
          <p className="content-container_type"> movies / tv show </p>
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
            <Movies />
            <Movies />
          </div>

          <div>
            <h1>latest Movies</h1>
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
              <Movies />
              <Movies />
              <Movies />
              <Movies />
            </div>
          </div>

          <div>
            <h1>latest TV Show</h1>
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
              <Movies />
              <Movies />
              <Movies />
              <Movies />
            </div>
          </div>
        </div>

        <div className="Side_Content">
          <div>
            <h1>Trending</h1>
            <p className="content-container_type">day / week / month</p>
            <div className="Trending-Side_Content-movies">
              <SideBar />
              <SideBar />
              <SideBar />
              <SideBar />
              <SideBar />
              <SideBar />
            </div>
          </div>
          <div>
            <h1>updated</h1>
            <p className="content-container_type">day / week / month</p>
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

export default Filter;
