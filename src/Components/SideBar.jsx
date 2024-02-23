import React from "react";
import "./SideBar.css";
function SideBar() {
  return (
    <>
      <div className="Trending_section">
        {/* <img src="movie.png" alt="movie name  " /> */}

        <div className="Movie_info">
          <span className="type">type</span>

          <span className="movie_title"> name</span>

          <span className="movie_date"> rating - 2024 - 120min </span>
        </div>

        <div className="background_color-test2"> {/* background */}</div>
      </div>
      <hr />
    </>
  );
}

export default SideBar;
