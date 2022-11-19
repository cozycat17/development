import "./FilterBar.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Checkbox } from "antd";
import { useState } from "react";

function FilterBar(props) {
  const [sortMethod, setSortMethod] = useState("");

  const sortByLife = (opposite) => {
    var data = [...props.animals];
    data.sort((a, b) => opposite * (a.lifespan - b.lifespan));
    props.setAnimals(data);
    setSortMethod(
      opposite < 0
        ? "Life expectancy: high to low"
        : "Life expectancy: low to high"
    );
  };

  const sortByWeight = (opposite) => {
    var data = [...props.animals];
    data.sort(
      (a, b) => opposite * (parseFloat(a.weight_max) - parseFloat(b.weight_max))
    );
    props.setAnimals(data);
    setSortMethod(opposite < 0 ? "Weight: high to low" : "Weight: low to high");
  };

  const items = [
    {
      label: <div onClick={() => sortByWeight(1)}> Weight: low to high</div>,
      key: "0",
    },
    {
      label: <div onClick={() => sortByWeight(-1)}>Weight: high to low</div>,
      key: "1",
    },
    {
      label: (
        <div onClick={() => sortByLife(1)}>Life expectancy: low to high</div>
      ),
      key: "3",
    },
    {
      label: (
        <div onClick={() => sortByLife(-1)}>Life expectancy: high to low</div>
      ),
      key: "4",
    },
  ];

  const onChange = (e, type, filter) => {
    var copy = { ...props.filters };
    if (e.target.checked) {
      copy[type] = filter;
    } else {
      delete copy[type];
    }
    props.setFilters(copy);
  };

  const animalTypes = ["Mammal", "Bird", "Reptile", "Amphibian"];
  const activeTimes = ["Diurnal", "Nocturnal"];
  return (
    <div className="filterBarContainer">
      <div>
        Animal type:
        {animalTypes.map((t) => (
          <Checkbox onChange={(e) => onChange(e, t, (a) => a.animal_type == t)}>
            {t}
          </Checkbox>
        ))}
      </div>
      <div>
        Active time:
        {activeTimes.map((t) => (
          <Checkbox onChange={(e) => onChange(e, t, (a) => a.active_time == t)}>
            {t}
          </Checkbox>
        ))}
      </div>

      <Dropdown menu={{ items }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            sort by: {sortMethod}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}

export default FilterBar;
