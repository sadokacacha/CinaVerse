import React, { useEffect, useState } from 'react';
import './Item_detail.css';
import NavBar from '../../../Containers/Navbar/NavBar';
import { useLocation } from 'react-router-dom';

function Item_detail() {
  const [getMovieId, setGetMovieId] = useState(null);
  const [getTvShowId, setgetTvShowId] = useState(null);
  const [MovieOrTvShow, setMovieOrTvShow] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      if (movies) {
        const url = `https://api.themoviedb.org/3/movie/${movies.id}?language=en-US`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDU2ODE0OTNmZTc0MDc5MGY5NjE5YzE4MDUzMWNmMCIsInN1YiI6IjY1ZWEzMGFkNmJlYWVhMDE2Mzc5ODgwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ttUFm77rQ8NzUlRoTSe9q_3rbJTxPttlk7GaT8H9YiE',
          },
        };
        try {
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setGetMovieId(jsonData);
          setMovieOrTvShow(movies);
        } catch (error) {
          console.error('Error fetching movie data:', error);
        }
      }

      if (TvShows) {
        const url2 = `https://api.themoviedb.org/3/tv/${TvShows.id}?language=en-US`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDU2ODE0OTNmZTc0MDc5MGY5NjE5YzE4MDUzMWNmMCIsInN1YiI6IjY1ZWEzMGFkNmJlYWVhMDE2Mzc5ODgwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ttUFm77rQ8NzUlRoTSe9q_3rbJTxPttlk7GaT8H9YiE',
          },
        };
        try {
          const response = await fetch(url2, options);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setgetTvShowId(jsonData);
          setMovieOrTvShow(TvShows);
        } catch (error) {
          console.error('Error fetching TV show data:', error);
        }
      }
    };

    fetchData();
  }, []);

  const { state } = useLocation();
  const movies = state?.movie;
  const TvShows = state?.tvShow;

  if (!movies && !TvShows) {
    return null; // Handle the case where neither movie nor TV show is provided
  }

  return (
    <div className="ItemContainer">
      <NavBar SecondNav="itemDetailNavBar" />

      <div className="ItemContainer_gradient">{/* Background blur */}</div>

      <div className="backgroundIMG">
        {MovieOrTvShow && MovieOrTvShow.backdrop_path && (
          <img
            className="HeroImg"
            src={`https://image.tmdb.org/t/p/w500${MovieOrTvShow.backdrop_path}`}
            alt={MovieOrTvShow.title}
          />
        )}
      </div>

      <div className="info">
        <div className="detailsContainer">
          <div className="detailsContainer_IMG">
            {MovieOrTvShow && MovieOrTvShow.poster_path && (
              <img
                className="ItemIMG"
                src={`https://image.tmdb.org/t/p/w500${MovieOrTvShow.poster_path}`}
                alt={MovieOrTvShow.title}
              />
            )}
          </div>

          <div className="ItemContainer_details">
            <h1>{MovieOrTvShow && MovieOrTvShow.title}</h1>
            <ul className="GenereContainer">
              <li> genere1 </li>
              <li> genere2 </li>
              <li> genere3 </li>
              <li> genere4 </li>
            </ul>
            <p> {MovieOrTvShow.overview}</p>
            <p> {MovieOrTvShow && MovieOrTvShow.media_type} </p>
            <p> {MovieOrTvShow && MovieOrTvShow.original_language} </p>

            <div className="castIMG">
              <ul>
                <li> cast1 </li>
                <li> cast2 </li>
                <li> cast3 </li>
                <li> cast4 </li>
              </ul>
            </div>

            <p> rate : stars here or smth else</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item_detail;
