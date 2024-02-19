import React from "react";
import shopLogo from "./shopLogo.png";
import SearchBar from "./SearchBar";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { Use_my_state } from "../Context/Data/DataState";

const Navbar = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const {
    addedProducts: { cart },
  } = Use_my_state();
  return (
    <>
      <div>
        <nav className="w-full h-15 flex justify-between items-center px-auto bg-blue-500">
          <div>
            <Link to="/">
              <img className="" src={shopLogo} alt="shopLogo" />
            </Link>
          </div>
          <div className="search-bar-container">
            <SearchBar />
          </div>
          <div className="flex flex-row">
            <Link to="/home">
              <IoHome className="text-2xl mx-3 mt-1 text-slate-100" />
            </Link>
            <Link className="pr-[2vw] hover:cursor-pointer mx-3 " to="/cart">
              <i
                className="fa-solid fa-cart-shopping px-1 py-2 cart-logo"
                data={cart && cart.length}
              ></i>
              <span className="text-slate-100 text-semibold text-lg">Cart</span>
            </Link>
            {localStorage.getItem("token") ? (
              <button
                className="border-2 border-amber-500 text-slate-50 font-semibold px-2 py-0.5 rounded-lg mr-3 transform transition-transform hover:scale-110"
                onClick={handleLogout}
              >
                {" "}
                Logout{" "}
              </button>
            ) : (
              <></>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
