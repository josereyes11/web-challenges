import { useState, useEffect } from "react";

export default function Joke() {
  const [joke, setJoke] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://example-apis.vercel.app/api/bad-jokes/${id}`,
      );
      const data = await response.json();
      setJoke(data);
    }
    fetchData();
  }, [id]);

  return (
    <>
      <h1>{joke.joke}</h1>
      <button onClick={() => setId(joke.nextId)} type="button">
        Next Joke
      </button>
    </>
  );
}
