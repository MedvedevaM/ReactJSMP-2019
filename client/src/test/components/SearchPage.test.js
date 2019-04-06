import React from "react";
import { shallow, mount} from "enzyme";
import toJson from 'enzyme-to-json';
import SearchPage from "../../main/components/SearchPage.jsx";

describe("search page rendering and functionality", () => {
    it("check radio buttons rendering", () => {
        const searchPage = shallow( <SearchPage /> );
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

        const searchPage = mount(<SearchPage />);
        searchPage.update();

        return searchPage.instance().fetchFilms()
            .then(() => {
                expect(searchPage.state().films).toEqual(mockData.data);
                searchPage.instance().onSortParameterClick({
                    target: {
                        dataset: {
                            sortParameter: ""
                        }
                    }
                });
                expect(searchPage.state().sortBy).toEqual("release date");
                searchPage.instance().onSortParameterClick({
                    target: {
                        dataset: {
                            sortParameter: "rating"
                        }
                    }
                });
                expect(searchPage.state().sortBy).toEqual("rating");
                searchPage.instance().onSearchParameterClick({
                    target: {
                        dataset: {
                            parameter: ""
                        }
                    }
                });
                expect(searchPage.state().searchBy).toEqual("Title");
                searchPage.instance().onSearchParameterClick({
                    target: {
                        dataset: {
                            parameter: "Genre"
                        }
                    }
                });
                expect(searchPage.state().searchBy).toEqual("Genre");
                searchPage.instance().onSearchModeClick();
                expect(searchPage.state().chosenFilm).toEqual(null);
                expect(searchPage.state().sortBy).toEqual("rating");
                searchPage.instance().chooseFilm({
                    target: {
                        dataset: {
                            filmId: ""
                        }
                    }
                });
                expect(searchPage.state().chosenFilm).toEqual(null);
                searchPage.instance().chooseFilm({
                    target: {
                        dataset: {
                            filmId: 2222
                        }
                    }
                });
                expect(searchPage.state().chosenFilm).toEqual({
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
                expect(searchPage.state().chosenFilm).toEqual(null);
            });
    });
})
