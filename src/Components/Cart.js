import React, { useEffect } from "react";
import { Use_my_state } from "../Context/Data/DataState";
import Ratings from "./Ratings";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  let navigate = useNavigate();
  const {
    addedProducts: { cart },
    dispatch,
  } = Use_my_state();

  useEffect(() => {
    const checkAuthentication = () => {
      if (!localStorage.getItem("token")) {
        navigate("/");
      }
    };

    checkAuthentication();
  }, [navigate]);

  let { totalItems, totalPrice } = cart.reduce(
    (acc, cur) => {
      acc.totalItems += cur.quantity;
      acc.totalPrice += cur.price * cur.quantity;
      return acc;
    },
    {
      totalItems: 0,
      totalPrice: 0,
    }
  );
  console.log(totalItems);

  return (
    <>
      <div className="flex justify-center w-full h-fit bg-blue-100 mb-10">
        <div className="mt-8 mx-5">
          {cart.length > 0 ? (
            <>
              <div className="flex flex-col justify-center">
                <h2 className="flex justify-center text-3xl text-slate-900">
                  Your Cart Details
                </h2>
                <div className="flex my-4 mt-4 h-fit justify-center">
                  <span className="bg-blue-600 text-slate-100 py-0.5 px-2 mx-2 rounded-md">
                    Total Items :{totalItems}
                  </span>
                  <span className="bg-blue-600 text-slate-100 py-0.5 px-2 mx-2 rounded-md">
                    Total Price : &#x20B9;{totalPrice}
                  </span>
                </div>
              </div>
              {cart.map((i) => {
                return (
                  <div className="bg-slate-100 w-[420px] h-[250px] mt-3 rounded-lg shadow-slate-400 shadow-lg hover:shadow-slate-500 hover:shadow-2xl flex flex-col mb-5">
                    <div className="flex p-4">
                      <div className="flex flex-col items-center justify-center mt-1">
                        <img
                          src={i.thumbnail}
                          className="w-[250px] h-[100px]"
                        />
                        <div className="border-1 border-slate-950 p-1 w-20 flex justify-center items-center m-2 text-green-600 font-semibold mt-3">
                          Qty: {i.quantity}
                        </div>
                      </div>
                      <div className="w-full">
                        <span
                          className={`text-slate-900 flex justify-center mt-2 mx-1 py-2 ${
                            i.title.length > 17 ? "text-sm" : "text-lg"
                          }`}
                        >
                          {i.title}
                        </span>
                        <div className="flex justify-center">
                          <Ratings rating={i.rating} />
                          <span className="flex justify-center text-lg text-green-600 font-semibold pl-2">
                            &#x20B9; {i.price}
                          </span>
                        </div>
                        <span className="flex justify-center text-green-700 font-medium">
                          {i.discountPercentage}&#37; Disscount
                        </span>
                        <div className="flex justify-center text-lg font-medium mt-1">
                          Total Price: {i.price * i.quantity}
                        </div>
                        <div className="flex justify-evenly mt-6 mb-1.5">
                          <button
                            className=" mt-3 flex justify-center border-1 border-slate-900 p-0.5 hover:bg-green-600 hover:text-slate-100 rounded-md px-1"
                            onClick={() => {
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: i,
                              });
                            }}
                          >
                            <i class="fa-regular fa-trash-can p-0.5 mr-1"></i>{" "}
                            Delete
                          </button>
                          <button className=" mt-3 flex justify-center border-1 px-1 border-slate-900 p-0.5 hover:bg-green-600 hover:text-slate-100 rounded-md">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="h-screen">
              <h1 className="text-2xl font-semibold">Your Cart is Empty</h1>
              <Link
                to="/home"
                className="px-1.5 py-0.5 bg-blue-600 text-slate-100 flex justify-center my-3"
              >
                Buy Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
