import { GET_FILMS, GET_QUANTITY_OF_FILMS, SET_SORT_PARAMETER, SET_SEARCH_PARAMETER, SET_CHOSEN_FILM } from '../../../main/store/actions/actions';
import { films } from '../../../main/store/reducers/films';

describe('films reducer', () => {
    it('should return the initial state', () => {
        expect(films(undefined, {})).toEqual({
            films: [],
            quantityOfFilms: 0,
            chosenFilm: null,
            searchBy: "Title",
            sortBy: "release date",
        })
    });

    it('should handle GET_FILMS', () => {
        expect(
            films({}, {
                type: GET_FILMS,
                films: [{}, {}]
            })
        ).toEqual({
                films: [{}, {}]
            }
        )
    });

    it('should handle GET_QUANTITY_OF_FILMS', () => {
        expect(
            films({}, {
                type: GET_QUANTITY_OF_FILMS,
                quantityOfFilms: 3
            })
        ).toEqual({
                quantityOfFilms: 3
            }
        )
    });

    it('should handle SET_SORT_PARAMETER', () => {
        expect(
            films({}, {
                type: SET_SORT_PARAMETER,
                sortBy: "test"
            })
        ).toEqual({
                sortBy: "test"
            }
        )
    });

    it('should handle SET_SEARCH_PARAMETER', () => {
        expect(
            films({}, {
                type: SET_SEARCH_PARAMETER,
                searchBy: "test"
            })
        ).toEqual({
                searchBy: "test"
            }
        )
    });

    it('should handle SET_CHOSEN_FILM', () => {
        expect(
            films({}, {
                type: SET_CHOSEN_FILM,
                chosenFilm: "test"
            })
        ).toEqual({
                chosenFilm: "test"
            }
        )
    });
})