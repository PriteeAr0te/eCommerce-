import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const Ratings = ({ rating, onClick }) => {
  const rate = Math.round(rating);
  return (
    <div className="flex justify-end pr-3 text-amber-500 py-2 pt-2.5 items-center cursor-pointer">
      {[...Array(5)].map((_, i) => {
        return (
          <span key={i} onClick={() => onClick(i)}>
            {rate > i ? <FaStar /> : <FaRegStar />}
          </span>
        );
      })}
    </div>
  );
};

export default Ratings;
