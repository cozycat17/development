import React from "react";
import { Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./AnimalCard.css";

function AnimalCard(props) {
  return (
    <Card
      title={props.animal.name}
      cover={<img src={props.animal.image_link}></img>}
      actions={[<PlusOutlined />]}
      style={{ width: 300 }}
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
