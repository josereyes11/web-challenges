console.clear();

const url = "https://swapi.py4e.com/api/people";

/* async function fetchDataPage1() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log(data.results);
  console.log(data.results.length);
  console.log(data.results[5].name);

  const r2d2 = data.results.find((character) => character.name === "R2-D2");
  console.log(r2d2.eye_color);

  const obiWanKenobi = data.results.find((c) => c.name === "Obi-Wan Kenobi");
  console.log(obiWanKenobi.gender);
} */

const url2 = "https://swapi.py4e.com/api/people/?page=2";

async function fetchDataPage2() {
  const response = await fetch(url2);
  const data = await response.json();

  console.log(data);
  // console.log(data.results);
  // console.log(data.results.length);

  /*   const yoda = data.results.find((character) => character.name === "Yoda");
  console.log(yoda.skin_color); */
}

//fetchDataPage1();
fetchDataPage2();
