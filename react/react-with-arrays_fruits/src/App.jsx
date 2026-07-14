import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "🍌 Banana", color: "yellow" },
    { id: 2, name: "🍎 Apple", color: "red" },
    { id: 3, name: "🍊 Orange", color: "orange" },
    { id: 4, name: "🍇 Grapes", color: "purple" },
    { id: 5, name: "🍓 Strawberry", color: "red" },
    { id: 6, name: "🍑 Peach", color: "peachpuff" },
    { id: 7, name: "🥝 Kiwi", color: "green" },
    { id: 8, name: "🍍 Pineapple", color: "gold" },
    { id: 9, name: "🍒 Cherry", color: "crimson" },
    { id: 10, name: "🍋 Lemon", color: "lightyellow" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}

/*   return (
    <div className="app">
      <Card name="🍌 Banana" color="yellow" />
      <Card name="🍎 Apple" color="red" />
    </div>
  ); */
