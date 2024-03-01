import React from 'react';
import Movies from '../../Movies/Movies';
import SideBar from '../../SideBar/SideBar';
import { UilFilter } from '@iconscout/react-unicons';

import './FilterContent.css';
export default function Filter_Content() {
  return (
    <div className="Filter_movie-explore-section">
      <div className="Filtered_container ">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />

        <button className="NavBar_search-form-btn">
          Filter
          <UilFilter className="filter_icon" size={13} />
        </button>
      </div>

      <div className="Filter_content-container">
        <div className="Filter_Latest">
          <h1>Recommended</h1>
          <p className="Filter_content-container_type"> movies / tv show </p>
          <div className="Filter_recommended-movies-container">
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

        <div className="Filter_Side_Content">
          <div>
            <h1>Suggestions</h1>
            <p className="Filter_content-container_type">day / week / month</p>
            <div className="Filter_Trending-Side_Content-movies">
              <SideBar />
              <SideBar />
              <SideBar />
              <SideBar />
              <SideBar />
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
