import React from "react";
import "./Movies.css";
function Movies() {
  return (
    
      <div className="Recommended_section">
        {/* <img src="movie.png" alt="movie name  " /> */}
        <div className="background_color-test">
          {" "}
          {/* background */} {/* this will change into a picture  */}
        </div>

        <p className="movie_title"> movie name</p>
        <div className="Movie_info">
          <span className="movie_date">2024 - 100min</span>
          <span className="type">type </span>
        </div>
      </div>
    
  );
}

export default Movies;
