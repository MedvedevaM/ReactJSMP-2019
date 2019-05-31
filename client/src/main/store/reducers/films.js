import { SET_FILMS,
  SET_QUANTITY_OF_FILMS,
  SET_SEARCH_PARAMETER,
  SET_SORT_PARAMETER,
  SET_SEARCH_VALUE,
  SET_CHOSEN_FILM,
  SET_FOUND_FILMS } from '../actions/actions';

const DEFAULT_SEARCH_PARAMETER = 'Title';
const DEFAULT_SORT_PARAMETER = 'release date';

const initialState = { films: [],
  quantityOfFilms: 0,
  chosenFilm: null,
  searchBy: DEFAULT_SEARCH_PARAMETER,
  sortBy: DEFAULT_SORT_PARAMETER,
  searchValue: '',
  foundFilms: [] };

export const films = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILMS:
      return { ...state, films: action.films };
    case SET_QUANTITY_OF_FILMS:
      return { ...state, quantityOfFilms: action.quantityOfFilms };
    case SET_SORT_PARAMETER:
      return { ...state, sortBy: action.sortBy };
    case SET_SEARCH_PARAMETER:
      return { ...state, searchBy: action.searchBy };
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.searchValue };
    case SET_FOUND_FILMS:
      return { ...state, foundFilms: action.foundFilms };
    case SET_CHOSEN_FILM:
      return { ...state, chosenFilm: action.chosenFilm };
    default:
      return state;
  }
};
