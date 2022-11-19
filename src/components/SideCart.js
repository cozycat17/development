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

  const counts = consolidate(props.zoo);

  return (
    <div className="sideBar">
      <h1>How long will your zoo last?</h1>
      Average lifespan: {average} years
      <ol>
        {Object.entries(counts).map(([k, v]) => (
          <li>
            {k} x {v}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SideCart;
