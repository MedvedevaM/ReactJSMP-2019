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

export const setChosenFilm = (chosenFilm) => {
  return {
    type: SET_CHOSEN_FILM,
    chosenFilm
  }
}

// middlewares

export function fetchFilms(url) {
  return (dispatch) => {
    return fetch(url)
      .then((response) => response.json())
      .then((films) => {
        dispatch(getFilms(films.data));
        dispatch(getQuantityOfFilms(films.data.length));
      });
  };
}

export function getSortedFilms(films, parameter) {
  return (dispatch) => {
    if (parameter === "rating") {
      films = films.sort((a, b) => a.vote_average - b.vote_average);
    }
    if (parameter === "release date") {
      films = films.sort((a, b) => a.release_date.slice(0, 4) - b.release_date.slice(0, 4));
    }
    dispatch(getFilms(films));
  };
}

