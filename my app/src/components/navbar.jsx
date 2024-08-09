import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav-container m-3">
      <nav className=" mx-2 d-flex justify-content-end justify-content-lg-between align-items-center mt-1">
        <div className="logo"></div>
        <div className="search-box d-flex align-items-center mx-3">
          <div className="input-section d-none d-md-block">
            <input type="text" placeholder="search your products..." />
          </div>
          <div className="search-button ">
            <button className="btn btn-warning">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <Link to='insertproduct'> insert-product</Link>
        <Link to='deleteproduct'> delete-product</Link>
        <div className="profile-section d-none d-md-flex">
          <i class="fa-solid fa-user"></i>
        </div>
        <div className="cart-section d-none d-md-flex">
          <i class="fa fa-cart-shopping"></i>
        </div>
      </nav>
      <nav className="menu-section mt-2 align-items-center justify-content-evenly d-none d-md-flex">
        <div className="menu-box ">
          <Link to="/">
            <i class="fa-solid fa-house"></i>
          </Link>
        </div>
        <div className="menu-box">
         <Link to='/food'> <p>FOOD</p></Link>
          <div className="dropdown">
            
          </div>
        </div>
   
        <div className="menu-box">
        <Link to='/atar'> <p>ATAR</p> </Link>
          <i className="fa-solid fa-chevron-down"></i>
          <div className="dropdown">
          <p>Combo & Gifts</p>
            <p>Wholesale Attar</p>
          </div>
        </div>
       
        <div className="menu-box">
          <Link to='/clothing'>  <p>MEN'S CLOTHING</p>
          </Link>
          <i className="fa-solid fa-chevron-down"></i>
          <div className="dropdown">
            <p>Dawah jersey</p>
            <p>Pant & pajama</p>
            <p>Shirt</p>
            <p>polo shirt</p>
            <p>twill cotton trouser</p>
            <p>t-shirt</p>
          </div>
        </div>
        <div className="menu-box">
         <Link to='/others'> <p>OTHERS</p></Link>
          <i className="fa-solid fa-chevron-down"></i>
          <div className="dropdown">
            <p>Electronics</p>
            <p>Backpacks</p>
          </div>
        </div>
        <div className="menu-box">
        <Link to="/combo-offers"><p>COMBO OFFERS</p>
        </Link>
          <i className="fa-solid fa-chevron-down"></i>
          <div className="dropdown">
            <p>T-shirt Combo</p>
            
          </div>
        </div>
        <div className="menu-box">
           <Link to="/panjabi"><p>PANJABI</p>
           </Link>
          <i className="fa-solid fa-chevron-down"></i>
          <div className="dropdown">
            <p>new arrivals</p>
            <p>bd cotton panjabi</p>
            <p>cotton panjabi</p>
            <p>soft tencel panjabi</p>
            <p>platinum panjabi</p>
            <p>stripped panjabi</p>
            <p>embroidered panjabi</p>
            <p>solid color</p>
          </div>
        </div>
        <div className="menu-box">
         <Link to="/flash-sale"> <p>FLASH SALE</p>
         </Link>
          <i className="fa-solid fa-chevron-down"></i>
          <div className="dropdown">
            <p>sneakers</p>
            <p>rechargable fan</p>
            <p>wallet</p>
            <p>panjabi</p>
            <p>food</p>
            <p>attar oil</p>
            <p>combo & others</p>
            <p>visor cap</p>
          </div>
        </div>
        <div className="menu-box">
          <Link to="/dawah-canvas"><p>DAWAH CANVAS</p></Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
