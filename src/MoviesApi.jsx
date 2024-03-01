import React from 'react'
import React, { useState, useEffect } from 'react';

function MoviesApi() {


  const [movieQuery, setMovieQuery] = useState('game');
  const [movieSuggestions, setMovieSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${movieQuery}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '40ba1af8f2msh883d8db74efd9abp172060jsn23ef17945acc',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setMovieSuggestions(data.d);
      } catch (error) {
        console.error('Error fetching movie suggestions:', error);
      }
    };

    fetchData();
  }, [movieQuery]);


  return (
      <div>
        <input
          type="text"
          value={movieQuery}
          onChange={(e) => setMovieQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <ul>
          {movieSuggestions.map((movie) => (
            <li key={movie.id}>{movie.l}</li>
          ))}
        </ul>
      </div>
  );
}

export default MoviesApi