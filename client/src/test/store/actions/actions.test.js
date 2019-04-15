import { GET_FILMS, GET_QUANTITY_OF_FILMS, SET_SORT_PARAMETER, SET_SEARCH_PARAMETER, SET_CHOSEN_FILM } from '../../../main/store/actions/actions';
import { getFilms, getQuantityOfFilms, setSortParameter, setSearchParameter, setChosenFilm } from '../../../main/store/actions/actions';

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

    it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
        fetchMock.getOnce('/todos', {
            body: {
                todos: ['do something']
            },
            headers: {
                'content-type': 'application/json'
            }
        })

        const expectedActions = [{
                type: types.FETCH_TODOS_REQUEST
            },
            {
                type: types.FETCH_TODOS_SUCCESS,
                body: {
                    todos: ['do something']
                }
            }
        ]
        const store = mockStore({
            todos: []
        })

        return store.dispatch(actions.fetchTodos()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})