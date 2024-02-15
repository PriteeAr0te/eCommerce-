import React from "react";
import Fragrance from "./images/Perfumes.jpg";
import homeDecor from "./images/Decoration.webp";
import Skincare from "./images/Skincares.jpg";
import Smartphones from "./images/Smartphones.webp";
import Laptops from "./images/Laptops.webp";
import Grocery from "./images/Grocery.webp";

const Filters = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[80vw] max-h-28 bg-slate-200 m-3 p-5 flex items-center justify-around">
        <a className="flex flex-col hover:cursor-pointer">
          <img
            className="h-14 w-auto object-contain"
            src={Grocery}
            alt="Grocery"
          />
          <span className="mt-auto bottom-0 text-sm">Grocery</span>
        </a>
        <a className="flex flex-col hover:cursor-pointer">
          <img
            className="h-14 w-auto object-contain"
            src={Skincare}
            alt="Skincare"
          />
          <span className="mt-auto bottom-0 text-sm">Skincare</span>
        </a>
        <a className="flex flex-col hover:cursor-pointer">
          <img
            className="h-14 w-auto object-contain"
            src={Smartphones}
            alt="Smartphones"
          />
          <span className="mt-auto bottom-0 text-sm">Smartphones</span>
        </a>
        <a className="flex flex-col hover:cursor-pointer">
          <img
            className="h-14 w-auto object-contain"
            src={Fragrance}
            alt="Fragrance"
          />
          <span className="mt-auto bottom-0 text-sm">Fragrances</span>
        </a>
        <a className="flex flex-col hover:cursor-pointer">
          <img
            className="h-14 w-auto object-contain"
            src={Laptops}
            alt="Laptops"
          />
          <span className="mt-auto bottom-0 text-sm">Laptops</span>
        </a>
        <a className="flex flex-col hover:cursor-pointer">
          <img
            className="h-14 w-auto object-contain"
            src={homeDecor}
            alt="Home Decor"
          />
          <span className="mt-auto bottom-0 text-sm">Home Decor</span>
        </a>
      </div>
    </div>
  );
};

export default Filters;
