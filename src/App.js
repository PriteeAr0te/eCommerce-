import "./App.css";
import Filters from "./Components/Filters";
import Grocery from "./Components/Grocery";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import DataState from "./Context/Data/DataState";

function App() {
  return (
    <div>
      <DataState>
        <Navbar />
        <Filters />
        <Hero />
        <Grocery />
      </DataState>
    </div>
  );
}

export default App;
