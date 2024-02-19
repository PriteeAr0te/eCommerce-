import React, { useState } from "react";
import SliderBar from "./SliderBar";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const BASE_URL = "https://dummyjson.com";
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const json = await response.json();
      if (response.ok) {
        localStorage.setItem("token", json.authtoken); // Assuming authtoken is returned upon successful login
        alert("Login Successfully", "success");
        navigate("/home");
      } else {
        alert("Invalid Username or Password", "danger");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SliderBar />
      <div className="flex flex-col justify-center">
        <form className="flex justify-center w-full" onSubmit={handleSubmit}>
          <div className="text-center w-[60vw] h-[250px] mt-5 mb-5">
            <h2 className="text-3xl my-4 mb-3">Sign in to Your Account</h2>
            <div className="col p-2 flex flex-col items-center">
              <div className="my-2 w-[50%] items-center">
                <input
                  type="text"
                  className="form-control bg-amber-500 py-2 focus:bg-amber-400"
                  placeholder="Username"
                  name="username"
                  value={credentials.username}
                  aria-label="Username"
                  onChange={onChange}
                />
              </div>
              <div className="my-2 w-[50%] items-center">
                <input
                  type="text"
                  className="form-control bg-amber-500 py-2 focus:bg-amber-400"
                  placeholder="Password"
                  name="password"
                  value={credentials.password}
                  aria-label="Password"
                  onChange={onChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-3 w-[18%] py-2.5 bg-blue-500 rounded-lg hover:bg-blue-400 text-slate-100 text-lg font-medium hover:text-xl"
            >
              Signin
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Hero;
