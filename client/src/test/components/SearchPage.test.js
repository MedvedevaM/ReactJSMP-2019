import React from "react";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import { SearchPage, mapStateToProps, mapDispatchToProps } from "../../main/components/SearchPage.jsx";

const films = [{
    id: 1111,
    release_date: "2020-05-01",
    title: "Guardians of the Galaxy Vol. 3",
    vote_average: 8,
    runtime: 100,
    tagline: "Tag line",
    overview: "The third film based on Marvel's Guardians of the Galaxy.",
    poster_path: "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
    genres: ['Drama', 'Adventure']
}, {
    id: 2222,
    release_date: "2020-05-01",
    title: "Guardians of the Galaxy Vol. 3",
    vote_average: 8,
    runtime: 100,
    tagline: "Tag line",
    overview: "The third film based on Marvel's Guardians of the Galaxy.",
    poster_path: "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
    genres: ['Drama', 'Adventure']
}];

const props = {
    films: films,
    quantityOfFilms: 2,
    chosenFilm: null,
    searchBy: "Title",
    sortBy: "release date",
    fetchFilms: jest.fn(),
    setSortParameter: jest.fn(),
    getSortedFilms: jest.fn(),
    searchParameter: jest.fn(),
    setSearchParameter: jest.fn(),
    setChosenFilm: jest.fn(),
    foundFilms: films
}

describe("search page rendering and functionality", () => {
    it("check radio buttons rendering", () => {
        const searchPage = shallow(<SearchPage {...props} /> );
        expect(toJson(searchPage)).toMatchSnapshot();
    });

    it("choosing film", () => {
        const searchPage = shallow(<SearchPage {...props} />);
        const filmSearchProps = searchPage.find('FilmSearch').props();
        const filmsContainerProps = searchPage.find('Connect(FilmsContainer)').props();

        expect(filmSearchProps.films).toEqual(films);
        expect(filmsContainerProps.films).toEqual(films);
        searchPage.instance().onSortParameterClick({
            target: {
                dataset: {
                    sortParameter: ""
                }
            }
        });
        expect(filmSearchProps.sortBy).toEqual("release date");
        searchPage.instance().onSortParameterClick({
            target: {
                dataset: {
                    sortParameter: "rating"
                }
            }
        });
        expect(filmSearchProps.searchBy).toEqual("Title");
        searchPage.instance().onSearchParameterClick({
            target: {
                dataset: {
                    parameter: "Genre"
                }
            }
        });
        searchPage.instance().onSearchModeClick();
        searchPage.instance().chooseFilm({
            target: {
                dataset: {
                    filmId: ""
                }
            }
        });
        searchPage.instance().chooseFilm({
            target: {
                dataset: {
                    filmId: 2222
                }
            }
        });
    });

    it("test mapStateToProps", () => {
        const initialState = {
            films: [],
            quantityOfFilms: 0,
            chosenFilm: null,
            searchBy: "Title",
            sortBy: "release date",
        };
        const store = {
            films: initialState
        };

        expect(mapStateToProps(store).films).toEqual([]);
        expect(mapStateToProps(store).quantityOfFilms).toEqual(0);
        expect(mapStateToProps(store).chosenFilm).toEqual(null);
        expect(mapStateToProps(store).searchBy).toEqual("Title");
        expect(mapStateToProps(store).sortBy).toEqual("release date");
    });

    it('test mapDispatchToProps', () => {
        const dispatch = jest.fn();

        mapDispatchToProps(dispatch).setSearchParameter();
        expect(dispatch.mock.calls[0][0]).toEqual({ type: 'SET_SEARCH_PARAMETER' });

        mapDispatchToProps(dispatch).setSortParameter();
        expect(dispatch.mock.calls[1][0]).toEqual({ type: 'SET_SORT_PARAMETER' });

        mapDispatchToProps(dispatch).setChosenFilm();
        expect(dispatch.mock.calls[2][0]).toEqual({ type: 'SET_CHOSEN_FILM' });
    });
})
