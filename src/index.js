import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import { createMarkup } from './createMarkup';
import { createPreviewMarkup } from './createPreviewMarkup';
import Notiflix from 'notiflix';
import { refs } from './refs';

const DEBOUNCE_DELAY = 300;

refs.inputRef.addEventListener('input', debounce(handleSearch, DEBOUNCE_DELAY));

function handleSearch(event) {
  event.preventDefault();
  const search = event.target.value.trim().toLowerCase();
  if (search === '') {
    refs.listRef.innerHTML = '';
  }
  fetchCountries(search)
    .then(data => {
      const markup = createMarkup(data);
      const markupPreview = createPreviewMarkup(data);

      if (data.length === 1) {
        refs.listRef.innerHTML = markup;
      } else if (data.length >= 2 && data.length < 10) {
        refs.listRef.innerHTML = markupPreview;
      } else {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        refs.listRef.innerHTML = '';
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
      refs.listRef.innerHTML = '';
    });
}
