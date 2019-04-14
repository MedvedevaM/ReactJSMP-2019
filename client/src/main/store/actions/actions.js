export const GET_FILMS = 'GET_FILMS';
export const GET_QUANTITY_OF_FILMS = 'GET_QUANTITY_OF_FILMS';
export const SET_SORT_PARAMETER = 'SET_SORT_PARAMETER';
export const SET_SEARCH_PARAMETER = 'SET_SEARCH_PARAMETER';
export const SET_CHOSEN_FILM = 'SET_CHOSEN_FILM';

export const getFilms = (films) => {
  return {
    type: GET_FILMS,
    films
  }
}

export const getQuantityOfFilms = (quantityOfFilms) => {
  return {
    type: GET_QUANTITY_OF_FILMS,
    quantityOfFilms
  }
}

export const setSortParameter = (sortBy) => {
  return {
    type: SET_SORT_PARAMETER,
    sortBy
  }
}

export const setSearchParameter = (searchBy) => {
  return {
    type: SET_SEARCH_PARAMETER,
    searchBy
  }
}

export const setChosenFilm = (chosenFilm = null) => {
  return {
    type: SET_CHOSEN_FILM,
    chosenFilm
  }
}

