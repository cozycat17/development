import React from "react";
import { Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./AnimalCard.css";

function AnimalCard(props) {
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
      actions={[<PlusOutlined />]}
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
      </div>
    </Card>
  );
}

export default AnimalCard;
