import React from "react";
import { useState } from "react";
import NavBar from "../Containers/Navbar/NavBar";
import "./APIII.css";
function Autocomplet() {
  const [movieSuggestions, setMovieSuggestions] = useState([]);
  const [movieQuery, setMovieQuery] = useState("");
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
        
     <NavBar
        movieQuery={movieQuery}
        setMovieQuery={setMovieQuery}
        fetchData={fetchData}
      />

      {movieSuggestions.map((data) => (
        <>
          <div className="Recommended_section " key={data.id} >
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

export default Autocomplet;
