import React, { useContext, useEffect, useState, useCallback } from "react";
import Carousel from "react-multi-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
import DataContext from "../Context/Data/DataContext";
import Ratings from "./Ratings";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Grocery = () => {
  const context = useContext(DataContext);
  const { data, getData } = context;
  const [groceryItem, setGroceryItem] = useState([]);

  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos
          style={{
            color: "white",
          }}
        />
      </div>
    );
  };

  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos
          style={{
            color: "white",
          }}
        />
      </div>
    );
  };

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

  const setGroceryItemMemoized = useCallback(setGroceryItem, []);

  useEffect(() => {
    if (data && data.products) {
      const groceries = data.products.filter(
        (product) => product.category === "groceries"
      );
      setGroceryItem(groceries);
    }
  }, [data, setGroceryItemMemoized]);

  return (
    <div className="flex justify-center">
      <div className="w-[94vw] md:h-[510px] h-fit p-4 bg-slate-200 mt-10 mb-3">
        <h1 className="font-semibold text-2xl ml-3"> Buy Your Groceries </h1>
        <div className="">
          {/* <div className="md:grid md:grid-cols-5 flex flex-col gap-2 mt-4"> */}
          <Slider
            prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}
            slidesToShow={4}
            infinite={false}
          >
            {groceryItem.map((item) => (
              <div
                key={item.id}
                className="bg-slate-100 p-5 rounded shadow w-[180px] md:mt-1 mt-7 px-6 md:w-[200px] h-[410px]"
              >
                <img
                  src={item.thumbnail}
                  className="md:w-full w-[200px] flex justify-center h-[150px] mb-4"
                  alt={item.title}
                />
                <h2
                  className={`flex item-center ${
                    item.title.length > 25 ? "text-sm p-1" : "text-lg"
                  }`}
                >
                  {item.title}
                </h2>
                <div className="flex items-center font-semibold justify-around mt-3">
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
          </Slider>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Grocery;
