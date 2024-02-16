import { useRef } from "react";
import "./App.css";
import Filters from "./Components/Filters";
import Fragrances from "./Components/Fragrances";
import Grocery from "./Components/Grocery";
import Hero from "./Components/Hero";
import HomeDecor from "./Components/HomeDecor";
import Laptops from "./Components/Laptops";
import Navbar from "./Components/Navbar";
import Skincare from "./Components/Skincare";
import Smartphones from "./Components/Smartphones";
import DataState from "./Context/Data/DataState";

function App() {
  const groceryRef = useRef(null);
  const laptopRef = useRef(null);
  const fragranceRef = useRef(null);
  const smartphoneRef = useRef(null);
  const skincareRef = useRef(null);
  const homedecorRef = useRef(null);

  return (
    <div>
      <Navbar />
      <DataState>
        <Filters
          groceryRef={groceryRef}
          laptopRef={laptopRef}
          fragranceRef={fragranceRef}
          smartphoneRef={smartphoneRef}
          skincareRef={skincareRef}
          homedecorRef={homedecorRef}
        />
        <div>
          <Hero />
        </div>
        <div ref={groceryRef}>
          <Grocery />
        </div>
        <div ref={laptopRef}>
          <Laptops />
        </div>
        <div ref={fragranceRef}>
          <Fragrances />
        </div>
        <div ref={smartphoneRef}>
          <Smartphones />
        </div>
        <div ref={skincareRef}>
          <Skincare />
        </div>
        <div ref={homedecorRef}>
          <HomeDecor />
        </div>
      </DataState>
    </div>
  );
}

export default App;
