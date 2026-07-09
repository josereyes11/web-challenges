console.clear();

const url = "https://rickandmortyapi.com/api/character";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
  //console.log(data.results);
  // console.log(data.results.length);

  /*   const yoda = data.results.find((character) => character.name === "Yoda");
  console.log(yoda.skin_color); */
}

fetchData();
