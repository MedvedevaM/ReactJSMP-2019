import { checkMatching } from '../utils/utils';

export const SET_FILMS = 'SET_FILMS';
export const SET_QUANTITY_OF_FILMS = 'SET_QUANTITY_OF_FILMS';
export const SET_SORT_PARAMETER = 'SET_SORT_PARAMETER';
export const SET_SEARCH_PARAMETER = 'SET_SEARCH_PARAMETER';
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const SET_CHOSEN_FILM = 'SET_CHOSEN_FILM';
export const SET_FOUND_FILMS = 'SET_FOUND_FILMS';

export const setFilms = films => ({ type: SET_FILMS,
  films });

export const setFoundFilms = foundFilms => ({ type: SET_FOUND_FILMS,
  foundFilms });

export const setQuantityOfFilms = quantityOfFilms => ({ type: SET_QUANTITY_OF_FILMS,
  quantityOfFilms });

export const setSortParameter = sortBy => ({ type: SET_SORT_PARAMETER,
  sortBy });

export const setSearchParameter = searchBy => ({ type: SET_SEARCH_PARAMETER,
  searchBy });

export const setSearchValue = searchValue => ({ type: SET_SEARCH_VALUE,
  searchValue });

export const setChosenFilm = chosenFilm => ({ type: SET_CHOSEN_FILM,
  chosenFilm });

// middlewares

export function fetchFilms(url, searchValue, searchParameter) {
  return dispatch => fetch(url)
    .then(response => response.json())
    .then((films) => {
      dispatch(setFilms(films.data));
      if (searchValue) {
        searchFilms(searchValue, films.data, searchParameter)(dispatch);
      } else {
        dispatch(setFoundFilms(films.data));
        dispatch(setQuantityOfFilms(films.data.length));
      }
    });
}

export function searchFilms(value, films, searchParameter) {
  return (dispatch) => {
    if (searchParameter === 'Title' && value) {
      films = films.filter(film => checkMatching(value, film.title));
    }

    if (searchParameter === 'Genre' && value) {
      films = films.filter(film => film.genres.some(genre => checkMatching(value, genre)));
    }

    dispatch(setFoundFilms(films));
    dispatch(setQuantityOfFilms(films.length));
  };
}

