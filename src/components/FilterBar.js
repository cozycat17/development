import "./FilterBar.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
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

  return (
    <div className="filterBarContainer">
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
