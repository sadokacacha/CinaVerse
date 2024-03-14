import React from 'react';
import './Filter.css';

import Filter_Content from './FilterContent.jsx/Filter_Content';
import NavBar from '../../Containers/Navbar/NavBar';
function Filter() {
  return (
    <>
      <NavBar/>

      <Filter_Content />
    </>
  );
}

export default Filter;
