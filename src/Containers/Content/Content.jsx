import React, { useEffect, useState } from 'react';
import './Content.css';
import Movies from '../../Components/Movies/Movies';
import SideBar from '../../Components/SideBar/SideBar';
import Footer from '../Footer/Footer';

function Content() {
  const [trendingMovies, setTrendingMovies] = useState([]);

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

        if (!response.ok || !response2.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData1 = await response.json();
        const jsonData2 = await response2.json();

        const mergedData = {
          movies: jsonData1.results,
          tvShows: jsonData2.results,
        };

        setTrendingMovies(mergedData);
        setLoading(false);
        console.log(mergedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
            <h1>Recommended</h1>
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
                    <Movies key={movie.id} movie={movie} />
                  ))
                : trendingMovies.tvShows.map((tvShow) => (
                    <Movies key={tvShow.id} movie={tvShow} />
                  ))}
            </div>

            <div>
              <h1>latest Movies</h1>
              <div className="recommended-movies-container">
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
              </div>
            </div>

            <div>
              <h1>latest TV Show</h1>
              <div className="recommended-movies-container">
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
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
