export default function App() {
  return (
    <div>
      <Sum valueA={700} valueB={50} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  return <p>{`${valueA} + ${valueB} = ${valueA + valueB}`}</p>;
}
