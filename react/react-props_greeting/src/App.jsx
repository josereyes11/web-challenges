export default function App() {
  return (
    <div>
      <Greeting name="Mario" />
    </div>
  );
}

function Greeting({ name }) {
  const greetingName = coaches.includes(name) ? "Coach" : name;
  return <h1>{`Hello, ${greetingName}`}</h1>;
}

const coaches = ["Mario", "Luis", "Klaus", "Martin"];
