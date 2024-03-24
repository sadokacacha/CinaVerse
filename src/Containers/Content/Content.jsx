import React, { useEffect, useState } from 'react';
import './Content.css';
import Movies from '../../Components/Movies/Movies';
import SideBar from '../../Components/SideBar/SideBar';
import Footer from '../Footer/Footer';

function Content() {

  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
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
        setTrendingMovies(jsonData.results);
        setLoading(false);
        console.log(jsonData);
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

      <div className="content-container">
        <div className="Latest">
          <h1>Recommended</h1>
          <p className="content-container_type"> movies / tv show </p>
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
      <Footer />
    </div>
  );
}

export default Content;
