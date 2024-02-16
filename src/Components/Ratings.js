import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const Ratings = ({ rating }) => {
  const rate = Math.round(rating);
  return (
    <div className="flex justify-end pr-3 text-amber-500 py-2 pt-2.5 items-center">
      {[...Array(5)].map((_, i) => {
        return rate > i ? <FaStar /> : <FaRegStar />;
      })}
    </div>
  );
};

export default Ratings;
