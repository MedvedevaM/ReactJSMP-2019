import { combineReducers } from 'redux';
import { films } from './films';

export const appReducer = combineReducers({
    films,
})

// Films selectors
export function getFilms(store) {
    if (store.films.sortBy === "rating") {
        return store.films.films.sort((a, b) => b.vote_average - a.vote_average);
    }
    if (store.films.sortBy === "release date") {
        return store.films.films.sort((a, b) => b.release_date.slice(0, 4) - a.release_date.slice(0, 4));
    }
    return store.films.films;
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

export function getSortParameter(store) {
    return store.films.sortBy;
}

export function getFilteredFilms(store) {
    if (store.films && store.films.chosenFilm) {
        return filterFilmsByGenre(store.films.films, store.films.chosenFilm.genres);
    }
    return [];
}

export function filterFilmsByGenre(films, neededGenres) {
    return films.filter(film => {
        return film.genres.some(genre => {
            return neededGenres.some(neededGenre => genre === neededGenre);
        });
    });
}