import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click here!</Button>
      <Button>Click over here too!</Button>
      <Button>Click one more time</Button>
      <Button>The last click</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
