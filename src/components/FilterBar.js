function FilterBar(props) {
  const sortByLife = (opposite) => {
    var data = [...props.animals];
    data.sort((a, b) => opposite * (a.lifespan - b.lifespan));
    props.setAnimals(data);
  };

  const sortByWeight = (opposite) => {
    var data = [...props.animals];
    data.sort(
      (a, b) => opposite * (parseFloat(a.weight_max) - parseFloat(b.weight_max))
    );
    props.setAnimals(data);
  };

  return (
    <div>
      <h1 onClick={() => sortByWeight(1)}>Sort by weight_max</h1>
      <h1 onClick={() => sortByWeight(-1)}>rev by weight_max</h1>
      <h1 onClick={() => sortByLife(1)}>Sort by life</h1>
      <h1 onClick={() => sortByLife(-1)}>rev by life</h1>
    </div>
  );
}

export default FilterBar;
