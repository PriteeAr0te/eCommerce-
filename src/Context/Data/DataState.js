import React, { useContext, useReducer, useState } from "react";
import DataContext from "./DataContext";
import { InitialState, Reducer } from "../../Reducer";
import RatingFilter from "../../Components/RatingFilter";

const DataState = (props) => {
  const BASE_URL = "https://dummyjson.com";
  const dataInitial = [];
  const [data, setData] = useState(dataInitial);

  const getData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log("Error in Fetching Data: ", error);
    }
  };

  const [addedProducts, dispatch] = useReducer(Reducer, InitialState);
  const [price_filter, dispatch_filter] = useReducer(RatingFilter, {
    sort: null,
    rate: null,
    price_range: [0, 2000],
  });

  return (
    <div>
      <DataContext.Provider
        value={{
          data,
          getData,
          addedProducts,
          dispatch,
          price_filter,
          dispatch_filter,
        }}
      >
        {props.children}
      </DataContext.Provider>
    </div>
  );
};

export const Use_my_state = () => useContext(DataContext);

export default DataState;
