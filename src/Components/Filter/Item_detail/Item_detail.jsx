import React from "react";
import "./Item_detail.css";
import NavBar from "../../../Containers/Navbar/NavBar";
function Item_detail() {
  return (
    <div className="ItemContainer">
      <NavBar customClassItemDetail="itemDetailNavBar" />

      <img className="HeroImg" src="/menu_assets.jpg" alt="" />
      <span className="ItemContainer_gradient">{/*  gradient color */} </span>




<div className="info">
     <div className="detailsContainer">

        <div className="ItemIMG">
          <span className="InfoContainer_IMG">
            {" "}
            {/* this will be an img */}{" "}
          </span>
        </div>

        <div className="ItemContainer_details">
          <h1> movie title </h1>
          <ul className="GenereContainer">
            <li> genere1 </li>
            <li> genere2 </li>
            <li> genere3 </li>
            <li> genere4 </li>
          </ul>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempora
            molestiae mollitia. Delectus esse, ipsam neque ex explicabo
            consectetur? Doloremque illum impedit eum fugiat a ad corrupti earum
            corporis inventore!
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
     





    </div>
  );
}

export default Item_detail;
