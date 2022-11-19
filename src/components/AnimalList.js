import AnimalCard from "./AnimalCard";
import { Row, Col } from "antd";

function AnimalList(props) {
  const filter = (animals) => {
    for (const [_, value] of Object.entries(props.filters)) {
      animals = animals.filter(value);
    }
    return animals;
  };

  var filtered = filter(props.animals);

  return (
    <Row type="flex" gutter={[16, 16]}>
      {filtered.map((animal) => (
        <Col span={8}>
          <AnimalCard
            className="animalCard"
            animal={animal}
            key={animal.name}
            zoo={props.zoo}
            setZoo={props.setZoo}
          ></AnimalCard>
        </Col>
      ))}
    </Row>
  );
}

export default AnimalList;
