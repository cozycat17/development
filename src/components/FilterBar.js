import "./FilterBar.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Checkbox, Button } from "antd";
import { useState } from "react";

function FilterBar(props) {
  const [sortMethod, setSortMethod] = useState("");
  const defaultCheckedState = {
    Mammal: false,
    Bird: false,
    Reptile: false,
    Amphibian: false,
    Diurnal: false,
    Nocturnal: false,
  };
  const [checkedBoxes, setCheckedBoxes] = useState(defaultCheckedState);

  const sortByLife = (opposite) => {
    var data = [...props.animals];
    data.sort((a, b) => opposite * (a.lifespan - b.lifespan));
    props.setAnimals(data);
    setSortMethod(
      opposite < 0 ? "Lifespan: high to low" : "Lifespan: low to high"
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
      label: <div onClick={() => sortByLife(1)}>Lifespan: low to high</div>,
      key: "3",
    },
    {
      label: <div onClick={() => sortByLife(-1)}>Lifespan: high to low</div>,
      key: "4",
    },
  ];

  const onChange = (e, type, filter) => {
    var copy = { ...props.filters };
    if (e.target.checked) {
      copy[type] = filter;
      var newObj = {
        ...checkedBoxes,
      };
      newObj[type] = true;
      setCheckedBoxes(newObj);
    } else {
      var newObj = {
        ...checkedBoxes,
      };
      newObj[type] = false;
      setCheckedBoxes(newObj);
      delete copy[type];
    }
    console.log("DEVLOG", checkedBoxes);
    props.setFilters(copy);
  };

  const animalTypes = ["Mammal", "Bird", "Reptile", "Amphibian"];
  const activeTimes = ["Diurnal", "Nocturnal"];
  return (
    <div className="filterBarContainer">
      <div className="checkGroup">
        <b>Animal type:</b>
        <div>
          {animalTypes.map((t) => (
            <Checkbox
              checked={checkedBoxes[t]}
              onChange={(e) => onChange(e, t, (a) => a.animal_type == t)}
            >
              {t}
            </Checkbox>
          ))}
        </div>
      </div>
      <div className="checkGroup">
        <b>Active time:</b>
        <div>
          {activeTimes.map((t) => (
            <Checkbox
              checked={checkedBoxes[t]}
              onChange={(e) => onChange(e, t, (a) => a.active_time == t)}
            >
              {t}
            </Checkbox>
          ))}
        </div>
      </div>

      <Dropdown menu={{ items }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            sort by: {sortMethod}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      <Button
        onClick={() => {
          props.setFilters({});
          setCheckedBoxes(defaultCheckedState);
        }}
        className="reset-button"
      >
        Reset
      </Button>
    </div>
  );
}

export default FilterBar;
