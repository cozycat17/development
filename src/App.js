import logo from "./logo.svg";
import "./App.css";
import FilterBar from "./components/FilterBar";
import { useState } from "react";
import { Layout } from "antd";
import animalData from "./animalData.json";
import AnimalList from "./components/AnimalList";
import SideCart from "./components/SideCart";

function App() {
  const { Content, Sider } = Layout;

  const [animals, setAnimals] = useState(animalData);
  const [filters, setFilters] = useState({});
  const [zoo, setZoo] = useState([]);
  console.log(zoo);

  return (
    <div className="App">
      <Layout hasSider>
        <Sider
          width={"20vw"}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            right: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <SideCart zoo={zoo}></SideCart>
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              maxWidth: "78vw",
            }}
          >
            <FilterBar
              filters={filters}
              setFilters={setFilters}
              animals={animals}
              setAnimals={setAnimals}
            ></FilterBar>
            <AnimalList
              zoo={zoo}
              setZoo={setZoo}
              filters={filters}
              animals={animals}
            ></AnimalList>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
