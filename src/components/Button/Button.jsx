import "./styles.css";

function Button({battonName = "Get"}) {
  // console.log(props.battonName);

  return (
    <button className="main-button">{battonName}</button>
  );
}

export default Button;
