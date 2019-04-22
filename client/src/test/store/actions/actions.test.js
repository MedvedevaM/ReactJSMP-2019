import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { SET_FILMS, SET_QUANTITY_OF_FILMS, SET_SORT_PARAMETER, SET_SEARCH_PARAMETER, SET_CHOSEN_FILM, SET_SEARCH_VALUE, SET_FOUND_FILMS } from '../../../main/store/actions/actions';
import { setFilms, setQuantityOfFilms, setSortParameter, setSearchParameter, setChosenFilm, fetchFilms, setSearchValue, searchFilms, setFoundFilms, checkMatching } from '../../../main/store/actions/actions';

describe('actions', () => {
    it('should create an action to get films', () => {
        const films = [{}, {}];
        const expectedAction = {
            type: SET_FILMS,
            films
        }
        expect(setFilms(films)).toEqual(expectedAction);
    });
    it('should create an action to get quantity of films', () => {
        const quantityOfFilms = 4;
        const expectedAction = {
            type: SET_QUANTITY_OF_FILMS,
            quantityOfFilms
        }
        expect(setQuantityOfFilms(quantityOfFilms)).toEqual(expectedAction);
    });
    it('should create an action to set sort parameter', () => {
        const sortBy = "title";
        const expectedAction = {
            type: SET_SORT_PARAMETER,
            sortBy
        }
        expect(setSortParameter(sortBy)).toEqual(expectedAction);
    });
    it('should create an action to set search parameter', () => {
        const searchBy = "title";
        const expectedAction = {
            type: SET_SEARCH_PARAMETER,
            searchBy
        }
        expect(setSearchParameter(searchBy)).toEqual(expectedAction);
    });
    it('should create an action to set chosen film', () => {
        const chosenFilm = {};
        const expectedAction = {
            type: SET_CHOSEN_FILM,
            chosenFilm
        }
        expect(setChosenFilm(chosenFilm)).toEqual(expectedAction);
    });

    it('should create an action to set search value', () => {
        const searchValue = "test";
        const expectedAction = {
            type: SET_SEARCH_VALUE,
            searchValue
        }
        expect(setSearchValue(searchValue)).toEqual(expectedAction);
    });
})

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })
    const films = [{}, {}];

    it('check fetching films', () => {
        fetchMock.getOnce('/films', {
            body: {
                data: films
            },
            headers: {
                'content-type': 'application/json'
            }
        })

        const expectedActionGetQuantity = {
            type: SET_QUANTITY_OF_FILMS,
            quantityOfFilms: films.length
        };
        const expectedActionGetFilms = {
            type: SET_FILMS,
            films
        };
        const store = mockStore({
            films
        })

        return store.dispatch(fetchFilms('/films')).then(() => {
            expect(setFilms(films)).toEqual(expectedActionGetFilms);
            expect(setQuantityOfFilms(films.length)).toEqual(expectedActionGetQuantity);
        })
    })
})

describe('test middlewares', () => {
    const foundFilms = [{
        title: "test",
        genres: "Action"
    }, {
        title: "test",
        genres: "Drama"
    }, {
        title: "test",
        genres: "Adventure"
    }];

    it('check sorting of films', () => {
        const expectedAction = {
            type: SET_FOUND_FILMS,
            foundFilms
        };
        const store = mockStore({
            foundFilms
        })
        store.dispatch((value, films, searchParameter) => store.dispatch(searchFilms(value, films, searchParameter)));
        expect(setFoundFilms(foundFilms)).toEqual(expectedAction);
        expect(checkMatching('test', 'test   ')).toEqual(true);
        expect(checkMatching('testtttt', 'test')).toEqual(false);
        expect(checkMatching('test', 'tess')).toEqual(false);
    })
})
