export default function App() {
  function handleClick() {
    console.log("You clicked me!");
  }
  return (
    <h1>
      <Button
        color="#000000"
        disabled={false}
        text={"This is a long, long button"}
        onClick={handleClick}
      />
    </h1>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      disabled={disabled}
      style={{ height: "100px", color: color, borderRadius: "24px" }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
