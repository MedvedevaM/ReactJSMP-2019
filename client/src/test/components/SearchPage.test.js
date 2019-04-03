import React from "react";
import { shallow, configure } from "enzyme";
import { SearchPage } from "../../main/components/SearchPage.jsx";
import { Film } from "../../main/components/Film";
import Adapter from "enzyme-adapter-react-16";
import { fetch } from 'whatwg-fetch';
import { FilmsContainer } from "../../main/components/FilmsContainer.jsx";

configure({ adapter: new Adapter() });

it("check radio buttons rendering", () => {
    const searchPage = shallow( <SearchPage /> );
    expect(searchPage).toMatchSnapshot();
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
    const searchPage = shallow(<SearchPage />, { disableLifecycleMethods: true });

    return searchPage.instance().fetchFilms()
        .then(() => {
            expect(searchPage.state().films).toEqual(mockData.data);
            searchPage.find(FilmsContainer).dive().find({ id: 2222 }).dive().find("h3").simulate('click');
            searchPage.update();
            expect(searchPage.state().chosenFilm).toEqual({
                id: "2222",
                release_date: "2020-05-01",
                title: "Guardians of the Galaxy Vol. 3",
                vote_average: 8,
                runtime: 100,
                tagline: "Tag line",
                overview: "The third film based on Marvel's Guardians of the Galaxy.",
                poster_path: "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg"
            });
        });
});