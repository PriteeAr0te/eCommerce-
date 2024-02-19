import React from "react";

const RatingFilter = (state, action) => {
  switch (action.type) {
    case "Add_Rate":
      return {
        ...state,
        rate: action.payload,
      };
      break;

    case "Set_Price_Range":
      return {
        ...state,
        price_range: action.payload,
      };
      break;

    case "Clear_Filter":
      return {
        ...state,
        rate: null,
        price_range: [0, 2000],
      };
      break;
    default:
      return state;
      break;
  }
};

export default RatingFilter;
