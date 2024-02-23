import React from "react";
import "./Menu.css";
import { UilPlay } from "@iconscout/react-unicons";
import { UilHeart } from "@iconscout/react-unicons";
function Menu() {
  return (
    <>
      <div className="Menu_Container">
        <div className="hero_section">
          <div className="HeroImg_container">
            <img className="HeroImg" src="/src/assets/menu_assets.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="HeroImg_container-info">
        <h1>movie title</h1>
        <div> icon + rating +  tefach </div>
        <p>discriptions : Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, commodi? </p>
        <div className="HeroImg_container-btn">

          <button className="HeroImg_container-info_btn watchNow">
            {" "}
            Watch Now <UilPlay size={12}  />{" "}
          </button>
          
          <button className="HeroImg_container-info_btn addList">
            {" "}
            Add To List <UilHeart size={12} />{" "}
          </button>

        </div>
      </div>
      
    </>
  );
}

export default Menu;
