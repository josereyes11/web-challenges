//App.jsx:

import Pet from "./components/Pet";
import "./styles.css";

export default function App() {
  function handlePet(animalName) {
    console.log(`I am a ...${animalName}`);
  }

  return (
    <div>
      <Pet name="A Cat" emoji="🐈" sound="Meow" isHungry onPet={handlePet} />
      <Pet name="A Dog" emoji="🐕" sound="Woof" onPet={handlePet} />
      <Pet name="A Mouse" emoji="🐁" sound="Squeak" isHungry onPet={handlePet}/>
    </div>
  );
}

// Pet.jsx:
export default function Pet({ name, emoji, sound, isHungry, onPet }) {
  return (
    <div onClick={() => onPet(name)}>
      {isHungry ? "feed me..." : sound}{" "}
      <span role="img" aria-label={name}>
        {emoji}
      </span>
    </div>
  );
}