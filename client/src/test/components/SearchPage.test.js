import React from "react";
import { shallow, mount} from "enzyme";
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import WrappedSearchPage, { SearchPage } from "../../main/components/SearchPage.jsx";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("search page rendering and functionality", () => {
    it("check radio buttons rendering", () => {
        const searchPage = shallow(<WrappedSearchPage /> );
        expect(toJson(searchPage)).toMatchSnapshot();
    });

    it("choosing film", () => {
        const mockData = {
            data: [{
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
            }]
        };


        jest.spyOn(window, 'fetch').mockImplementation(() => Promise.resolve({
            json: () => Promise.resolve(mockData),
        }));

        const initialState = {
            films: [],
            quantityOfFilms: 0,
            chosenFilm: null,
            searchBy: 'Title',
            sortBy: 'release date',
        };

        const store = mockStore(initialState);
        const wrappedSearchPage = mount(
            <Provider store={store}>
                <WrappedSearchPage />
            </Provider>);
            
        wrappedSearchPage.update();
        const searchPage = wrappedSearchPage.find(SearchPage);

        return searchPage.instance().fetchFilms()
            .then(() => {
                expect(searchPage.props()).toEqual(mockData.data);
                searchPage.instance().onSortParameterClick({
                    target: {
                        dataset: {
                            sortParameter: ""
                        }
                    }
                });
                expect(searchPage.props().sortBy).toEqual("release date");
                searchPage.instance().onSortParameterClick({
                    target: {
                        dataset: {
                            sortParameter: "rating"
                        }
                    }
                });
                expect(searchPage.props().sortBy).toEqual("rating");
                searchPage.instance().onSearchParameterClick({
                    target: {
                        dataset: {
                            parameter: ""
                        }
                    }
                });
                expect(searchPage.props().searchBy).toEqual("Title");
                searchPage.instance().onSearchParameterClick({
                    target: {
                        dataset: {
                            parameter: "Genre"
                        }
                    }
                });
                expect(searchPage.props().searchBy).toEqual("Genre");
                searchPage.instance().onSearchModeClick();
                expect(searchPage.props().chosenFilm).toEqual(null);
                expect(searchPage.props().sortBy).toEqual("rating");
                searchPage.instance().chooseFilm({
                    target: {
                        dataset: {
                            filmId: ""
                        }
                    }
                });
                expect(searchPage.props().chosenFilm).toEqual(null);
                searchPage.instance().chooseFilm({
                    target: {
                        dataset: {
                            filmId: 2222
                        }
                    }
                });
                expect(searchPage.props().chosenFilm).toEqual({
                    id: 2222,
                    release_date: "2020-05-01",
                    title: "Guardians of the Galaxy Vol. 3",
                    vote_average: 8,
                    runtime: 100,
                    tagline: "Tag line",
                    overview: "The third film based on Marvel's Guardians of the Galaxy.",
                    poster_path: "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
                    genres: ['Drama', 'Adventure']
                });
                searchPage.instance().chooseFilm({
                    target: {
                        dataset: {
                            filmId: "????"
                        }
                    }
                });
                expect(searchPage.props().chosenFilm).toEqual(null);
            });
        
    });
})
