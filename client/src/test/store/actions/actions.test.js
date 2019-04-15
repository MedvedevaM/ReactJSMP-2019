import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { GET_FILMS, GET_QUANTITY_OF_FILMS, SET_SORT_PARAMETER, SET_SEARCH_PARAMETER, SET_CHOSEN_FILM } from '../../../main/store/actions/actions';
import { getFilms, getQuantityOfFilms, setSortParameter, setSearchParameter, setChosenFilm, fetchFilms, getSortedFilms } from '../../../main/store/actions/actions';

describe('actions', () => {
    it('should create an action to get films', () => {
        const films = [{}, {}];
        const expectedAction = {
            type: GET_FILMS,
            films
        }
        expect(getFilms(films)).toEqual(expectedAction);
    });
    it('should create an action to get quantity of films', () => {
        const quantityOfFilms = 4;
        const expectedAction = {
            type: GET_QUANTITY_OF_FILMS,
            quantityOfFilms
        }
        expect(getQuantityOfFilms(quantityOfFilms)).toEqual(expectedAction);
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
            type: GET_QUANTITY_OF_FILMS,
            quantityOfFilms: films.length
        };
        const expectedActionGetFilms = {
            type: GET_FILMS,
            films
        };
        const store = mockStore({
            films
        })

        return store.dispatch(fetchFilms('/films')).then(() => {
            expect(getFilms(films)).toEqual(expectedActionGetFilms);
            expect(getQuantityOfFilms(films.length)).toEqual(expectedActionGetQuantity);
        })
    })
})

describe('test middlewares', () => {
    const films = [{
        vote_average: 2,
        release_date: "2016"
    }, {
        vote_average: 8,
        release_date: "1995"
    }, {
        vote_average: 5,
        release_date: null
    }];

    it('check sorting of films', () => {
        const expectedAction = {
            type: GET_FILMS,
            films
        };
        const store = mockStore({
            films
        })
        store.dispatch((films, parameter) => store.dispatch(getSortedFilms(films, parameter)));
        expect(getFilms(films)).toEqual(expectedAction);
    })
})