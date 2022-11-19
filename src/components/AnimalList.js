import AnimalCard from "./AnimalCard";
import { Row, Col } from "antd";

function AnimalList(props) {
  const filter = (animals) => {
    for (let i = 0; i < props.filters.length; i++) {
      animals = animals.filter(props.filters[i]);
    }
    return animals;
  };

  var filtered = filter(props.animals);

  //props.filters.foreach((filter) => (filtered = filtered.filter(filter)));

  return (
    <Row type="flex" gutter={[16, 16]}>
      {filtered.map((animal) => (
        <Col span={8}>
          <AnimalCard
            className="animalCard"
            animal={animal}
            key={animal.name}
          ></AnimalCard>
        </Col>
      ))}
    </Row>
  );
}

export default AnimalList;
