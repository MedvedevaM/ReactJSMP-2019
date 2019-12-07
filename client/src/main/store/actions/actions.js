export const SET_FILMS = 'SET_FILMS';
export const SET_QUANTITY_OF_FILMS = 'SET_QUANTITY_OF_FILMS';
export const SET_SORT_PARAMETER = 'SET_SORT_PARAMETER';
export const SET_SEARCH_PARAMETER = 'SET_SEARCH_PARAMETER';
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const SET_CHOSEN_FILM = 'SET_CHOSEN_FILM';
export const SET_FOUND_FILMS = 'SET_FOUND_FILMS';
export const FETCH_FILMS = 'FETCH_FILMS';
export const SEARCH_FILMS = 'SEARCH_FILMS';

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


export const fetchFilmsFromApi = (url, searchValue, searchParameter) => ({ type: FETCH_FILMS,
  payload: { url,
    searchValue,
    searchParameter } });
export const searchFilms = (value, films, searchParameter) => ({ type: SEARCH_FILMS,
  payload: { value,
    films,
    searchParameter } });
