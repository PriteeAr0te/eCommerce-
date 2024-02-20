import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { useState, useEffect } from "react";
import Cart from "./Components/Cart";

import LoadingBar from "react-top-loading-bar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [filters, setFilters] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const checkAuthentication = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    };

    checkAuthentication();
  }, []);

  const handleFilterClick = (filters) => {
    setFilters(filters);
  };

  return (
    <div className="app-container">
      <div className="main-container">
        <BrowserRouter>
          <LoadingBar color="#f11946" height={3} progress={progress} />
          <Navbar setProgress={setProgress} />
          <Routes>
            <Route path="/" element={<Hero setProgress={setProgress} />} />
            <Route
              path="/home"
              element={
                <Home
                  filters={filters}
                  handleFilterClick={handleFilterClick}
                  setProgress={setProgress}
                />
              }
            />
            <Route path="/cart" element={<Cart setProgress={setProgress} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
