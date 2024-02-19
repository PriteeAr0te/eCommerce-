import React, { useState } from "react";
import Fragrance from "./images/Perfumes.jpg";
import homeDecor from "./images/Decoration.webp";
import Skincare from "./images/Skincares.jpg";
import Smartphones from "./images/Smartphones.webp";
import Laptops from "./images/Laptops.webp";
import Grocery from "./images/Grocery.webp";

const Filters = ({ handleFilterClick }) => {
  return (
    <div className="flex justify-center">
      <div className="w-[80vw] max-h-28 bg-blue-100 m-0.5 p-5 flex items-center justify-around">
        <a
          className="flex flex-col hover:cursor-pointer"
          onClick={() => handleFilterClick("groceries")}
        >
          <img
            className="h-14 w-auto object-contain"
            src={Grocery}
            alt="Grocery"
            href="/grocery"
          />
          <span className="mt-auto bottom-0 text-sm">Grocery</span>
        </a>
        <a
          className="flex flex-col hover:cursor-pointer"
          onClick={() => handleFilterClick("skincare")}
        >
          <img
            className="h-14 w-auto object-contain"
            src={Skincare}
            alt="Skincare"
            href="/skincare"
          />
          <span className="mt-auto bottom-0 text-sm">Skincare</span>
        </a>
        <a
          className="flex flex-col hover:cursor-pointer"
          onClick={() => handleFilterClick("smartphones")}
        >
          <img
            className="h-14 w-auto object-contain"
            src={Smartphones}
            alt="Smartphones"
            href="/smartphones"
          />
          <span className="mt-auto bottom-0 text-sm">Smartphones</span>
        </a>
        <a
          className="flex flex-col hover:cursor-pointer"
          onClick={() => handleFilterClick("fragrances")}
        >
          <img
            className="h-14 w-auto object-contain"
            src={Fragrance}
            alt="Fragrance"
            href="/fragrance"
          />
          <span className="mt-auto bottom-0 text-sm">Fragrances</span>
        </a>
        <a
          className="flex flex-col hover:cursor-pointer"
          onClick={() => handleFilterClick("laptops")}
        >
          <img
            className="h-14 w-auto object-contain"
            src={Laptops}
            alt="Laptops"
            href="/laptops"
          />
          <span className="mt-auto bottom-0 text-sm">Laptops</span>
        </a>
        <a
          className="flex flex-col hover:cursor-pointer"
          onClick={() => handleFilterClick("home-decoration")}
        >
          <img
            className="h-14 w-auto object-contain"
            src={homeDecor}
            alt="Home Decor"
            href=""
          />
          <span className="mt-auto bottom-0 text-sm">Home Decor</span>
        </a>
      </div>
    </div>
  );
};

export default Filters;
