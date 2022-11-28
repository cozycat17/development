import "./SideCart.css";

function SideCart(props) {
  const average = props.zoo.length
    ? (
        props.zoo.reduce((a, b) => a + parseInt(b.lifespan), 0) /
        props.zoo.length
      ).toFixed(1)
    : 0;

  const consolidate = (arr) => {
    const counts = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].name in counts) {
        counts[arr[i].name] = counts[arr[i].name] + 1;
      } else {
        counts[arr[i].name] = 1;
      }
    }
    return counts;
  };

  const remove = (key) => {
    const arr = [...props.zoo];
    var location = -1;

    for (var i = 0; i < arr.length; i++) {
      console.log("DEVLOG", arr[i]);
      if (arr[i].name == key) {
        location = i;

        break;
      }
    }

    arr.splice(location, 1);
    props.setZoo(arr);
  };

  const counts = consolidate(props.zoo);

  return (
    <div className="sideBar">
      <h1>How long will your zoo last?</h1>
      Average lifespan: {average} years
      <ol>
        {Object.entries(counts).map(([k, v]) => (
          <li>
            {k} x {v} <button onClick={() => remove(k)}>-</button>
          </li>
        ))}
      </ol>
      <button onClick={() => props.setZoo([])}>Reset</button>
    </div>
  );
}

export default SideCart;
