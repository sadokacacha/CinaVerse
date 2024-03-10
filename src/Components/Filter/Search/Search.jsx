import React, { useState } from "react";
import "./Search.css";
import Autocomplet from "../../../API/Autocomplet";
import NavBar from "../../../Containers/Navbar/NavBar";
function Search() {
  const [movieSuggestions, setMovieSuggestions] = useState([]);
  const [movieQuery, setMovieQuery] = useState("");

  return (
    <div>
      <NavBar
        movieQuery={movieQuery}
        setMovieQuery={setMovieQuery}
        setMovieSuggestions={setMovieSuggestions}
        fetchData={fetchData}
      />
      <Autocomplet data={data} />
      
      {movieSuggestions.map((data) => (
        <>
          <div className="Recommended_section " key={data.id}>
            <div className="background_color-test">
              {" "}
              <img src={data.i.imageUrl} alt="" />
            </div>

            <p key={data.id} className="movie_title">
              {data.l}
            </p>
            <div className="Movie_info">
              <span className="movie_date">{data.y} </span>
              <span className="type">{data.y} </span>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Search;
