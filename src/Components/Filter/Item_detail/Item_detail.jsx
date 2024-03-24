import React, { useEffect, useState } from 'react';
import './Item_detail.css';
import NavBar from '../../../Containers/Navbar/NavBar';
function Item_detail() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const [loading, setLoading] =
    useState(true); /*  so it loads before the page render  importants    */

  const [itemId, setItemId] = useState(3);

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
    <div className="ItemContainer">
      <NavBar SecondNav="itemDetailNavBar" />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <img
            className="HeroImg"
            src={`https://image.tmdb.org/t/p/w500${trendingMovies[itemId].backdrop_path}`}
            alt=""
          />

          <span className="ItemContainer_gradient">
            {/*  gradient color */}{' '}
          </span>
          <div className="info">
            <div className="detailsContainer">
              <div className="detailsContainer_IMG">
                <img
                  className="ItemIMG"
                  src={`https://image.tmdb.org/t/p/w500${trendingMovies[itemId].poster_path}`}
                  alt=""
                />
              </div>

              <div className="ItemContainer_details">
                <h1>
                  {' '}
                  {trendingMovies.length > 0
                    ? trendingMovies[itemId].title
                    : ''}{' '}
                </h1>
                <ul className="GenereContainer">
                  <li> genere1 </li>
                  <li> genere2 </li>
                  <li> genere3 </li>
                  <li> genere4 </li>
                </ul>
                <p>
                  {trendingMovies.length > 0
                    ? trendingMovies[itemId].overview
                    : ''}{' '}
                </p>

                <div className="castIMG">
                  <ul>
                    <li> cast1 </li>
                    <li> cast2 </li>
                    <li> cast3 </li>
                    <li> cast4 </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Item_detail;
