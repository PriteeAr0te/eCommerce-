import React, { useCallback, useContext, useEffect, useState } from "react";
import DataContext from "../Context/Data/DataContext";
import Ratings from "./Ratings";
import Filters from "./Filters";
import { Use_my_state } from "../Context/Data/DataState";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useNavigate } from "react-router-dom";

const Home = ({ filters, handleFilterClick, setProgress }) => {
  let navigate = useNavigate();
  useEffect(() => {
    const checkAuthentication = () => {
      setProgress(0);
      if (!localStorage.getItem("token")) {
        setProgress(70);
        navigate("/");
        setProgress(100);
      }
    };

    checkAuthentication();
  }, [navigate]);

  const context = useContext(DataContext);
  const { data, getData } = context;
  const [productsItem, setProductsItem] = useState([]);
  const [addedToCart, setAddedToCart] = useState({});

  const {
    addedProducts: { searchkey },
    dispatch,
  } = Use_my_state();

  const {
    price_filter: { rate, price_range },
    dispatch_filter,
  } = Use_my_state();

  useEffect(() => {
    setProgress(10);
    const fetchData = async () => {
      try {
        await getData();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    setProgress(100);
  }, []);

  const setProductsItemMemorized = useCallback(setProductsItem, []);

  useEffect(() => {
    if (data && data.products) {
      const filteredProducts = filters
        ? data.products.filter((product) => product.category === filters)
        : data.products;

      setProductsItem(filteredProducts);
    }
  }, [data, filters, setProductsItemMemorized]);

  const filter_products = () => {
    let newProducts = data && data.products ? data.products : [];
    if (rate) {
      newProducts = newProducts.filter((i) => {
        return Math.round(i.rating) <= rate;
      });
    }
    const min = price_range[0];
    const max = price_range[1];
    if (price_range) {
      newProducts = newProducts.filter((i) => {
        return i.price >= min && i.price <= max;
      });
    }
    return newProducts;
  };

  const [value, setValue] = useState([0, 2000]);

  const handleChange = (event, newValue) => {
    dispatch_filter({
      type: "Set_Price_Range",
      payload: newValue,
    });
  };

  const handleAddToCart = (item) => {
    setAddedToCart({ ...addedToCart, [item.id]: true });
    setProgress(40);
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
    setProgress(100);
  };

  return (
    <div className="flex mt-0.5 w-[96vw] pt-[60px]">
      <div className="xl:col-md-2 col-md-3 bg-blue-100 h-screen mr-2 p-4">
        <h2 className="flex justify-center mt-2 font-semibold text-2xl">
          <i className="fa-solid fa-arrow-up-wide-short text-lg my-2 mx-1.5"></i>
          Filters
        </h2>
        <div className="mt-5 flex flex-col">
          <ul>
            <div className="mb-4">
              <li>Filter By Ratings</li>
              <span className="flex justify-center">
                <Ratings
                  rating={rate}
                  onClick={(i) => {
                    setProgress(50);
                    dispatch_filter({
                      type: "Add_Rate",
                      payload: i + 1,
                    });
                    setProgress(100);
                  }}
                />
              </span>
            </div>
            <div className="my-4">
              <li>Filter By Price</li>
              <div className="w-[80%]">
                <Box sx={{ width: 100, margin: 2 }}>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={price_range}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={0}
                    step={50}
                    max={2000}
                  />
                </Box>
              </div>
            </div>
          </ul>
        </div>
        <div className="flex justify-center mt-3">
          <button
            onClick={() => {
              setProgress(5);
              dispatch_filter({
                type: "Clear_Filter",
              });
              setProgress(100);
            }}
            className="bg-red-500 p-2 text-sm py-1.5 rounded-md text-slate-100 transform transition-transform hover:scale-110"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="xl:col-md-10 col-md-9 ml-2">
        <Filters handleFilterClick={handleFilterClick} />

        <div className="flex justify-center">
          <div className="w-full md:h-[510px] h-auto p-4 bg-blue-100 mb-3">
            <h1 className="font-semibold text-2xl ml-3 md:text-red-600 lg: text-green-600">
              {" "}
              Buy Your Products{" "}
            </h1>
            <div className="flex justify-center">
              <div className="md:grid md:grid-cols-2 xl:grid-cols-4 flex flex-col gap-4 mt-4">
                {filter_products()
                  .filter(
                    (s) =>
                      s.title.toLowerCase().includes(searchkey) ||
                      s.brand.toLowerCase().includes(searchkey) ||
                      s.category.toLowerCase().includes(searchkey)
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-slate-100 p-3 rounded shadow w-[300px] md:mt-1 md:w-auto h-[450px]"
                    >
                      <img
                        src={item.thumbnail}
                        className="md:w-full w-[200px] flex justify-center h-[150px] mb-4 transform transition-transform hover:scale-110"
                        alt={item.title}
                      />
                      <h2
                        className={`flex justify-center text-md ${
                          item.title.length > 17 ? "text-sm p-1" : "text-lg"
                        }`}
                      >
                        {item.title}
                      </h2>
                      <span className="flex justify-center font-mono italic text-sm">
                        {item.brand}
                      </span>
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
                      <div className="flex flex-row px-2 mt-4 justify-center">
                        <button
                          className={`${
                            addedToCart[item.id]
                              ? "bg-blue-600 text-white"
                              : "bg-amber-500 text-slate-100"
                          } px-3 text-sm py-1.5 rounded-md transform transition-transform hover:scale-95`}
                          onClick={() => handleAddToCart(item)}
                        >
                          {addedToCart[item.id] ? "Added" : "Add To Cart"}
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
