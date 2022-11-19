import React from "react";
import { Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./AnimalCard.css";

function AnimalCard(props) {
  const addToZoo = () => {
    props.setZoo([
      { name: props.animal.name, lifespan: props.animal.lifespan },
      ...props.zoo,
    ]);
  };
  return (
    <Card
      title={props.animal.name}
      cover={
        <div style={{ overflow: "hidden", height: "40vh", padding: "1em" }}>
          <img
            alt="example"
            style={{ height: "100%" }}
            src={props.animal.image_link}
          />
        </div>
      }
      actions={[<PlusOutlined onClick={addToZoo} />]}
    >
      <div className="cardContent">
        <p>
          <b>Animal type: </b>
          {props.animal.animal_type}
        </p>

        <p>
          <b>Active time: </b>
          {props.animal.active_time}
        </p>
        <p>
          <b>Life expectancy (years): </b>
          {props.animal.lifespan}
        </p>
        <p>
          <b>Weight: </b>
          {props.animal.weight_max}
        </p>
      </div>
    </Card>
  );
}

export default AnimalCard;
