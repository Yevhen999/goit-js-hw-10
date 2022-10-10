export function createPreviewMarkup(countries) {
  return countries
    .map(({ flags, name }) => {
      return `<li class="list__item list"><img class="list__img" src="${flags.svg}" alt="" width='40' height='40'><span class="list__name">${name.common}</span></li>`;
    })
    .join('');
}
