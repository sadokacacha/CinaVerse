import React, { useEffect, useState } from 'react';
import './Content.css';
import Movies from '../../Components/Movies/Movies';
import SideBar from '../../Components/SideBar/SideBar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

function Content() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setpopularMovies] = useState([]);
  const [popularTvShow, setpopularTvShow] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('movies');

  const [loading, setLoading] =
    useState(
      true
    ); /*  so it loads before the page render  importants   dont remove it  */

  useEffect(() => {
    const fetchData = async () => {
      const url1 =
        'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
      const url2 =
        'https://api.themoviedb.org/3/trending/tv/day?language=en-US';

      const url3 =
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

      const url4 =
        'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDU2ODE0OTNmZTc0MDc5MGY5NjE5YzE4MDUzMWNmMCIsInN1YiI6IjY1ZWEzMGFkNmJlYWVhMDE2Mzc5ODgwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ttUFm77rQ8NzUlRoTSe9q_3rbJTxPttlk7GaT8H9YiE',
        },
      };

      try {
        const response = await fetch(url1, options);

        const response2 = await fetch(url2, options);

        const response3 = await fetch(url3, options);

        const response4 = await fetch(url4, options);

        if (!response.ok || !response2.ok || !response3.ok || !response4.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData1 = await response.json();
        const jsonData2 = await response2.json();
        const jsonData3 = await response3.json();
        const jsonData4 = await response4.json();

        const mergedData = {
          movies: jsonData1.results,
          tvShows: jsonData2.results,
        };

        setTrendingMovies(mergedData);
        setpopularMovies(jsonData3);
        setpopularTvShow(jsonData4);

        console.log(mergedData);
        console.log(jsonData3);
        console.log(jsonData4);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const Navigate = useNavigate();

  const handleMoviesDetails = (id) => {
    const selectedMovie = trendingMovies.movies.find(
      (movie) => movie.id === id
    );

    if (selectedMovie) {
      Navigate(`/ItemDetail`, { state: { movie: selectedMovie } });
    }
    console.log(id);
  };



  return (
    <div className="movie-explore-section">
      <div>
        <p className="movie-explore-section_discription">
          If you enjoy the website, please consider sharing it
        </p>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="content-container">
          <div className="Latest">
            <h1>Trending</h1>
            <p className="content-container_type">
              <span
                className={
                  selectedCategory === 'movies'
                    ? 'contentCategorySelected'
                    : 'contentCategory'
                }
                onClick={() => setSelectedCategory('movies')}
              >
                Movies
              </span>{' '}
              <span
                className={
                  selectedCategory === 'movies'
                    ? 'contentCategory'
                    : 'contentCategorySelected'
                }
                onClick={() => setSelectedCategory('tvShows')}
              >
                TV Shows
              </span>
            </p>

            <div className="recommended-movies-container">
              {selectedCategory === 'movies'
                ? trendingMovies.movies.map((movie) => (
                    <div
                      key={movie.id}
                      onClick={() => handleMoviesDetails(movie.id)}
                    >
                      <Movies key={movie.id} movie={movie} />
                    </div>
                  ))
                : trendingMovies.tvShows.map((tvShow) => (
                    <div
                      key={tvShow.id}
                      onClick={() => handleTvShowsDetails(tvShow.id)}
                    >
                      <Movies key={tvShow.id} movie={tvShow} />
                    </div>
                  ))}
            </div>

            <div>
              <h1>top rated Movies</h1>
              <div
                onClick={() => handleMoviesDetails(Movies.id)}
                className="recommended-movies-container"
              >
                {popularMovies.results.map((tvShow) => (
                  <div
                    key={tvShow.id}
                    onClick={() => handleTvShowsDetails(tvShow.id)}
                  >
                    <Movies key={tvShow.id} movie={tvShow} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h1>top rated TV Show</h1>
              <div className="recommended-movies-container">
                {popularTvShow.results.map((movie) => (
                  <Movies key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
          </div>

          <div className="Side_Content">
            <div>
              <h1>Trending</h1>
              <p className="content-container_type">day / week / month</p>
              <div className="Trending-Side_Content-movies">
                <SideBar />
                <SideBar />
                <SideBar />
                <SideBar />
                <SideBar />
              </div>
            </div>
            <div>
              <h1>updated</h1>
              <p className="content-container_type">day / week / month</p>
              <div className="updated-Side_Content-movies">
                <SideBar />
                <SideBar />
                <SideBar />
                <SideBar />
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Content;
