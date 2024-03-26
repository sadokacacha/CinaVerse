import './Movies.css';
import React from 'react';

function Movies({ movie }) {
  if (!movie) {
    return null;
  }

  return (
    <div className="Recommended_section">
      <div className="Recommended_section_content">
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`     }
            alt={movie.title}
          />
        )}
      </div>

      <p className="movie_title">
        {' '}
        {movie.title} {movie.name}{' '}
      </p>
      <div className="Movie_info">
        <span className="movie_date">
          {' '}
          {movie.release_date} {movie.first_air_date}{' '}
        </span>
        <span className="type">{movie.media_type} </span>
      </div>
    </div>
  );
}

export default Movies;
