import React, { useState } from "react";
import "./MoviesApi.css";
import SecondNav from "./Components/Filter/SecondNav/SecondNav";

function MoviesApi() {
  const [movieQuery, setMovieQuery] = useState("");
  const [movieSuggestions, setMovieSuggestions] = useState([]); // Assuming data.d is an array

  const fetchData = async () => {
    const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${movieQuery}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "40ba1af8f2msh883d8db74efd9abp172060jsn23ef17945acc",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      if (!data || !Array.isArray(data.d)) {
        throw new Error("Invalid data format");
      }

      setMovieSuggestions(data.d);
    } catch (error) {
      console.error("Error fetching movie suggestions:", error);
    }
  };

  return (
    <div className="ApiTesting">
      <SecondNav />
      <div className="movie_search_container">
        <input
          type="text"
          value={movieQuery}
          onChange={(e) => setMovieQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <button onClick={fetchData}>Search</button>
      </div>

      {movieSuggestions.map((data) => (
        <>
          {/*      <img className="ApiTesting_movie" src={data.i.imageUrl} alt="" />
          <p key={data.id}>{data.l}</p>
          <div className="movie_info">
            <span> {data.q} </span>
            <span> {data.y} </span>
          </div> */}

          <div className="Recommended_section">
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

export default MoviesApi;
