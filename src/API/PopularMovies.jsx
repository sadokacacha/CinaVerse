import React, { useState, useEffect } from 'react';
import './APIII.css'
const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const url = 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&currentCountry=US&purchaseCountry=US';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '40ba1af8f2msh883d8db74efd9abp172060jsn23ef17945acc',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

        setPopularMovies(result);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching popular movies:', error);

        setError('Error fetching popular movies');

        setLoading(false);
      }
    };

    fetchPopularMovies();

  }, []); 



  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='api_test_color'>
      <h2>Popular Movies</h2>
      <ul>
        {popularMovies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PopularMovies;
