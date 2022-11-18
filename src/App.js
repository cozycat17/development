import logo from "./logo.svg";
import "./App.css";
import FilterBar from "./components/FilterBar";
import AnimalCard from "./components/AnimalCard";
import { useState } from "react";
import animalData from "./animalData.json";

function App() {
  console.log(animalData);
  const [animals, setAnimals] = useState(animalData);

  return (
    <div className="App">
      <FilterBar animals={animals} setAnimals={setAnimals}></FilterBar>
      {animals.map((animal) => (
        <AnimalCard animal={animal} key={animal.name}></AnimalCard>
      ))}
    </div>
  );
}

export default App;
