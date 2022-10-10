const BASE_URL = 'https://restcountries.com/v3.1/name/';

export function fetchCountries(name) {
  const url = `${BASE_URL}${name}?fields=flags,name,capital,population,languages`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
