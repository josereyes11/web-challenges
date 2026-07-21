export function getRelocatedCity(city1, city2) {
  if (city2 === undefined) {
    city2 = { name: "Berlin", country: "Germany" };
  }
  const cityData = getNameAndCountry(city2);
  const country = cityData[1];
  const relocatedCity = {};

  for (const key in city1) {
    relocatedCity[key] = city1[key];
  }
  relocatedCity.country = country;
  return relocatedCity;
}
