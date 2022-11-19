import logo from "./logo.svg";
import "./App.css";
import FilterBar from "./components/FilterBar";
import { useState } from "react";
import { Layout } from "antd";
import animalData from "./animalData.json";
import AnimalList from "./components/AnimalList";

function App() {
  const { Content, Sider } = Layout;

  const [animals, setAnimals] = useState(animalData);
  const [filters, setFilters] = useState({});

  return (
    <div className="App">
      <Layout hasSider>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            right: 0,
            top: 0,
            bottom: 0,
          }}
        ></Sider>
        <Layout>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              maxWidth: "80vw",
            }}
          >
            <FilterBar
              filters={filters}
              setFilters={setFilters}
              animals={animals}
              setAnimals={setAnimals}
            ></FilterBar>
            <AnimalList filters={filters} animals={animals}></AnimalList>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
