import logo from "./logo.svg";
import "./App.css";
import FilterBar from "./components/FilterBar";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [animals, setAnimals] = useState([]);

  return (
    <div className="App">
      <FilterBar animals={animals} setAnimals={setAnimals}></FilterBar>
      {animals.map((animal) => (
        <Card></Card>
      ))}
    </div>
  );
}

export default App;
