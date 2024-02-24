import React from "react";
import "./SideBar.css";
function SideBar() {
  return (
    <>
      <div className="Trending_section">
        {/* <img src="movie.png" alt="movie name  " /> */}

        <div className="SideBar_Movie_info">
          <span className="SideBar_type">type</span>

          <span className="SideBar_movie_title"> Name</span>

          <span className="SideBar_movie_date"> rating - 2024 - 120min </span>
        </div>

        <div className="background_color-test2"> {/* background */}</div>
      </div>
      <hr />
    </>
  );
}

export default SideBar;
