import React from "react";
import "./Content.css";
import Movies from "../../Components/Movies";

function Content() {
  return (
    <div className="movie-explore-section">
      <div>
        <p>If you enjoy the website, please consider sharing it</p>
      </div>
      <div className="Latest_movies">
        <div className="Latest">
        <h1>Recommended</h1>

          <Movies />
          <Movies />
          <Movies />




        </div>
        <div className="Trending_updated">
          <div className="trending">
            <h1>trending</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
