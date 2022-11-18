import logo from "./logo.svg";
import "./App.css";
import FilterBar from "./components/FilterBar";
import AnimalCard from "./components/AnimalCard";
import { useState } from "react";
import { Row, Col } from "antd";
import animalData from "./animalData.json";

function App() {
  console.log(animalData);
  const [animals, setAnimals] = useState(animalData);

  return (
    <div className="App">
      <FilterBar animals={animals} setAnimals={setAnimals}></FilterBar>

      <Row type="flex" gutter={[16, 16]}>
        {animals.map((animal) => (
          <Col span={8}>
            <AnimalCard
              className="animalCard"
              animal={animal}
              key={animal.name}
            ></AnimalCard>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
