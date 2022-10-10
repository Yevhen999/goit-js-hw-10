export function createMarkup(countries) {
  return countries
    .map(({ flags, name, capital, population, languages }) => {
      const langList = Object.values(languages);
      return `<li class="list__item list">
      <img class="list__img" src="${flags.svg}" width="40" height="40" />
      <span class="list__name">${name.official}</span>
      <p class="list__capital">Capital: <span>${capital}</span></p>
      <p class="list__population">Population: <span>${population}</span></p>
      <p class="list__languages">Languages: <span>${langList}</span></p>
      </li>`;
    })
    .join('');
}
