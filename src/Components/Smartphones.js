import React, { useContext, useEffect, useState, useCallback } from "react";
import DataContext from "../Context/Data/DataContext";
import Ratings from "./Ratings";

const Smartphones = () => {
  const context = useContext(DataContext);
  const { data, getData } = context;
  const [smartphoneItem, setSmartphoneItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getData();
      } catch (error) {
        console.log("Error in Data Fetching:", error);
      }
    };
    fetchData();
  }, []);

  const setGroceryItemMemoized = useCallback(setSmartphoneItem, []);

  useEffect(() => {
    if (data && data.products) {
      const smartpones = data.products.filter(
        (product) => product.category === "smartphones"
      );
      setSmartphoneItem(smartpones);
    }
  }, [data, setGroceryItemMemoized]);

  return (
    <div className="flex justify-center">
      <div className="w-[94vw] md:h-[510px] h-fit p-4 bg-slate-200 mt-10 mb-3">
        <h1 className="font-semibold text-2xl ml-3"> Buy Your Smartphones </h1>
        <div className="flex justify-center">
          <div className="md:grid md:grid-cols-5 flex flex-col gap-2 mt-4">
            {smartphoneItem.map((item) => (
              <div
                key={item.id}
                className="bg-slate-100 p-5 rounded shadow w-[300px] md:mt-1 mt-7 md:w-auto h-[410px]"
              >
                <img
                  src={item.thumbnail}
                  className="md:w-full w-[200px] flex justify-center h-[150px] mb-4"
                  alt={item.title}
                />
                <h2
                  className={`flex item-center text-md ${
                    item.title.length > 17 ? "text-sm p-1" : "text-lg"
                  }`}
                >
                  {item.title}
                </h2>
                <div
                  className={`flex items-center font-semibold justify-around ${
                    item.title.length > 26 ? "" : "mt-3"
                  }`}
                >
                  <span>
                    {new Intl.NumberFormat("hi-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(item.price)}
                  </span>
                  <div className="font-semibold text-green-700">
                    {item.discountPercentage} &#37; off
                  </div>
                </div>
                <Ratings rating={item.rating} />
                <p className="flex flex-wrap text-sm pt-2.5 px-3">
                  {item.description.slice(0, 45)}...
                </p>
                <div className="flex flex-row mt-5 justify-between">
                  <button className="bg-amber-500 p-2 text-sm py-1.5 rounded-md">
                    Add To Cart{" "}
                  </button>
                  <button className="bg-blue-500 px-3 text-center text-sm py-1.5 rounded-md">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smartphones;
