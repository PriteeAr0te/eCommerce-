import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataState from "./Context/Data/DataState";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { useState } from "react";
import Cart from "./Components/Cart";

function App() {
  const [filters, setFilters] = useState("");

  const handleFilterClick = (filters) => {
    setFilters(filters);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/home"
            element={
              <Home filters={filters} handleFilterClick={handleFilterClick} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart filters={filters} handleFilterClick={handleFilterClick} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
