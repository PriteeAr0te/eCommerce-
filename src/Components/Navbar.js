import React from "react";
import shopLogo from "./shopLogo.png";
import SearchBar from "./SearchBar";
import "../App.css";
const Navbar = () => {
  return (
    <>
      <div>
        <nav className="w-full h-15 flex justify-between items-center px-auto bg-blue-500">
          <div>
            <img className="" src={shopLogo} alt="shopLogo" />
          </div>
          <div className="search-bar-container">
            <SearchBar />
          </div>
          <a className="pr-[2vw] hover:cursor-pointer">
            <i
              className="fa-solid fa-cart-shopping px-1 py-2 cart-logo"
              data="0"
            ></i>
            <span className="text-white text-semibold text-lg">Cart</span>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
