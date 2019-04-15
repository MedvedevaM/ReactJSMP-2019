import React from "react";
import { shallow, mount} from "enzyme";
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { appReducer } from './../../main/store/reducers/reducers';
import { SearchPage } from "../../main/components/SearchPage.jsx";
import { FilmSearch } from "../../main/components/FilmSearch.jsx";
import { FilmsContainer } from "../../main/components/FilmsContainer.jsx";
import { getFilms } from "../../main/store/actions/actions";

// const store = createStore(
//     appReducer,
//     applyMiddleware(thunk)
// );
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

describe("search page rendering and functionality", () => {
    it("check radio buttons rendering", () => {
        const searchPage = shallow(<SearchPage /> );
        expect(toJson(searchPage)).toMatchSnapshot();
    });

    it("choosing film", () => {
        


        // jest.spyOn(window, 'fetch').mockImplementation(() => Promise.resolve({
        //     json: () => Promise.resolve(mockData),
        // }));
        function setup() {
            const props = {
                films: films,
                quantityOfFilms: 2,
                chosenFilm: null,
                searchBy: "Title",
                sortBy: "release date",
                fetchFilms: jest.fn()
            }

            const searchPage = shallow(<SearchPage { ...props} />)
            return {
                props,
                searchPage
            }
        }
        // const mockProps = {
        //     films: films,
        //     quantityOfFilms: 2,
        //     chosenFilm: null,
        //     searchBy: "Title",
        //     sortBy: "release date",
        //     fetchFilms: jest.fn()
        // }
        const { searchPage } = setup();

        // const searchPage = mount(<SearchPage props={mockProps} />);
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
        // searchPage.instance().onSortParameterClick({
        //     target: {
        //         dataset: {
        //             sortParameter: "rating"
        //         }
        //     }
        // });
        // expect(filmSearchProps.sortBy).toEqual("rating");
        // searchPage.instance().onSearchParameterClick({
        //     target: {
        //         dataset: {
        //             parameter: ""
        //         }
        //     }
        // });
        expect(filmSearchProps.searchBy).toEqual("Title");
        // searchPage.instance().onSearchParameterClick({
        //     target: {
        //         dataset: {
        //             parameter: "Genre"
        //         }
        //     }
        // });
        // expect(searchPage.props().searchBy).toEqual("Genre");
        // searchPage.instance().onSearchModeClick();
        expect(filmSearchProps.chosenFilm).toEqual(null);
        // expect(filmSearchProps.sortBy).toEqual("rating");
        // searchPage.instance().chooseFilm({
        //     target: {
        //         dataset: {
        //             filmId: ""
        //         }
        //     }
        // });
        // expect(searchPage.props().chosenFilm).toEqual(null);
        // searchPage.instance().chooseFilm({
        //     target: {
        //         dataset: {
        //             filmId: 2222
        //         }
        //     }
        // });
        // expect(searchPage.props().chosenFilm).toEqual({
        //     id: 2222,
        //     release_date: "2020-05-01",
        //     title: "Guardians of the Galaxy Vol. 3",
        //     vote_average: 8,
        //     runtime: 100,
        //     tagline: "Tag line",
        //     overview: "The third film based on Marvel's Guardians of the Galaxy.",
        //     poster_path: "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
        //     genres: ['Drama', 'Adventure']
        // });
        // searchPage.instance().chooseFilm({
        //     target: {
        //         dataset: {
        //             filmId: "????"
        //         }
        //     }
        // });
        // expect(searchPage.props().chosenFilm).toEqual(null);
    });
})
