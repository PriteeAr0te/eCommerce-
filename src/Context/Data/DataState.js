import React, { useState } from "react";
import DataContext from "./DataContext";

const DataState = (props) => {
  const BASE_URL = "https://dummyjson.com";
  const dataInitial = [];
  const [data, setData] = useState(dataInitial);

  const getData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products`, {
        method: "GET",
      });
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log("Error in Fetching Data: ", error);
    }
  };

  // useEffect(() => {
  //   // eslint-disable-next-line
  //   getData();
  // }, []);
  // return { data, getData };

  return (
    <div>
      <DataContext.Provider value={{ data, getData }}>
        {props.children}
      </DataContext.Provider>
    </div>
  );
};

export default DataState;
