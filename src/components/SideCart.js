import "./SideCart.css";

function SideCart(props) {
  const average = props.zoo.length
    ? (
        props.zoo.reduce((a, b) => a + parseInt(b.lifespan), 0) /
        props.zoo.length
      ).toFixed(1)
    : 0;

  return (
    <div className="sideBar">
      <h1>How long will your zoo last?</h1>
      Average lifespan: {average} years
      <ol>
        {props.zoo.map((animal) => (
          <li>{animal.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default SideCart;
