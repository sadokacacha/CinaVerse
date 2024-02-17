import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div className="Menu_Container">
      <div className="HeroImg_container">
        <img className="HeroImg" src="/src/assets/hero-bg.jpg" alt="" />
      </div>
      <div className="HeroImg_container-info">
        <h1>Title</h1>
        <div> tefach</div>
        <p>discriptions</p>
        <div>
          <button> Watch Now </button>
          <button> Add To List</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
