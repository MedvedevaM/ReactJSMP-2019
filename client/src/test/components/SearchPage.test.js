import React from "react";
import { shallow, mount} from "enzyme";
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from './../../main/store/reducers/reducers';
import WrappedSearchPage, { SearchPage } from "../../main/components/SearchPage.jsx";
import { getFilms } from "../../main/store/actions/actions";

const store = createStore(
    appReducer,
    applyMiddleware(thunk)
);

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

        const wrappedSearchPage = mount(
            <Provider store={store}>
                <WrappedSearchPage />
            </Provider>);

        const searchPage = wrappedSearchPage.find(SearchPage);

        function fetchFilms() {
            return function (dispatch) {
                return searchPage.instance().fetchFilms().then(
                    films => dispatch(getFilms(films))
                );
            };
        }

        store.dispatch(
            fetchFilms()
        ).then(() => {
            setTimeout(() => expect(searchPage.props().films).toEqual(mockData.data), 0);
            searchPage.instance().onSortParameterClick({
                target: {
                    dataset: {
                        sortParameter: ""
                    }
                }
            });
            setTimeout(() => expect(searchPage.props().sortBy).toEqual("release date"), 0);
            searchPage.instance().onSortParameterClick({
                target: {
                    dataset: {
                        sortParameter: "rating"
                    }
                }
            });
            setTimeout(() => expect(searchPage.props().sortBy).toEqual("rating"), 0);
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
            setTimeout(() => expect(searchPage.props().searchBy).toEqual("Genre"), 0);
            searchPage.instance().onSearchModeClick();
            expect(searchPage.props().chosenFilm).toEqual(null);
            setTimeout(() => expect(searchPage.props().sortBy).toEqual("rating"), 0);
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
