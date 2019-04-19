import { combineReducers } from 'redux';
import { films } from './films';

export const appReducer = combineReducers({ films });

// Films selectors
export function getFilms(films) {
  if (films.sortBy === 'rating') {
    return films.films.sort((a, b) => b.vote_average - a.vote_average);
  }
  if (films.sortBy === 'release date') {
    return films.films.sort((a, b) => b.release_date.slice(0, 4) - a.release_date.slice(0, 4));
  }
  return films.films;
}

export function getFilmsQuantity(store) {
  return store.films.quantityOfFilms;
}

export function getChosenFilm(store) {
  return store.films.chosenFilm;
}

export function getSearchParameter(store) {
  return store.films.searchBy;
}

export function getSearchValue(store) {
  return store.films.searchValue;
}

export function getSortParameter(store) {
  return store.films.sortBy;
}

export function getFoundFilms(store) {
  return store.films.foundFilms;
}

export function getFilteredFilms(store) {
  if (store.films && store.films.chosenFilm) {
    return filterFilmsByGenre(store.films.films, store.films.chosenFilm.genres);
  }
  return [];
}

export function filterFilmsByGenre(films, neededGenres) {
  return films.filter(film => film.genres.some(genre => neededGenres.some(neededGenre => genre === neededGenre)));
}
