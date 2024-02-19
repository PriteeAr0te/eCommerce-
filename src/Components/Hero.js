import React from "react";
import SliderBar from "./SliderBar";

const Hero = () => {
  return (
    <>
      <SliderBar />
      <div className="flex flex-col justify-center">
        <form className="flex justify-center w-full">
          <div className="text-center w-[60vw] h-[250px] mt-5 mb-5">
            <h2 className="text-3xl my-4 mb-3">Sign in to Your Account</h2>
            <div className="col p-2 flex flex-col items-center">
              <div className="my-2 w-[50%] items-center">
                <input
                  type="text"
                  className="form-control bg-amber-500 py-2 focus:bg-amber-400"
                  placeholder="Username"
                  aria-label="Username"
                />
              </div>
              <div className="my-2 w-[50%] items-center">
                <input
                  type="text"
                  className="form-control bg-amber-500 py-2 focus:bg-amber-400"
                  placeholder="Password"
                  aria-label="Password"
                />
              </div>
            </div>
            <button className="mt-3 w-[18%] py-2.5 bg-blue-500 rounded-lg hover:bg-blue-400 text-slate-100 text-lg font-medium hover:text-xl">
              Signin
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Hero;
