import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0");
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState("");

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setPokemon(data.results);
        setPrevious(data.previous);
        setNext(data.next);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, [url]);

  return (
    <main>
      <button
        onClick={() => setUrl(previous)}
        type="button"
        disabled={!previous}
      >
        Previous Page
      </button>
      <button onClick={() => setUrl(next)} type="button">
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
