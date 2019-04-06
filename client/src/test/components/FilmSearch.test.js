import React from "react";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import { FilmSearch } from "../../main/components/FilmSearch.jsx";

describe("film search rendering", () => {
    const chosenFilm = {
        release_date: "2020-05-01",
        title: "Guardians of the Galaxy Vol. 3",
        vote_average: 8,
        runtime: 100,
        tagline: "Tag line",
        overview: "The third film based on Marvel's Guardians of the Galaxy.",
        poster_path: "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg"
    };
    const chosenFilm2 = {
        release_date: "",
        title: "Guardians of the Galaxy Vol. 3",
        vote_average: 8,
        runtime: null,
        tagline: "Tag line",
        overview: "The third film based on Marvel's Guardians of the Galaxy.",
        poster_path: "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg"
    };
    it("renders correctly", () => {
        const filmSearch = shallow(<FilmSearch />);
        expect(toJson(filmSearch)).toMatchSnapshot();
    });
    it("Film search with chosen film", () => {
        const filmSearch = shallow(<FilmSearch chosenFilm={chosenFilm} />);
        expect(filmSearch.contains(
            <div className="container flex space-between">
                <a href="#home" className="logo common-color-1">netflixroulette</a>
                <button className="search-button-default-mode common-color-1 bold">Search</button>
            </div>
            )).toBe(true);

        expect(filmSearch.contains(
            <div className="chosen-film flex">
                <img src="https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg" alt="Guardians of the Galaxy Vol. 3" />
                <section>
                    <div className="flex">
                        <h1>Guardians of the Galaxy Vol. 3</h1>
                        <p className="rating">{chosenFilm.vote_average}</p>
                    </div>
                    <p>Tag line</p>
                    <div className="flex">
                        <p className="bold">2020</p>
                        <p className="bold">100 min</p>
                    </div>
                    <p>The third film based on Marvel's Guardians of the Galaxy.</p>
                </section>
            </div>)).toBe(true);
    });
    it("Film search with chosen film with no release date and runtime", () => {
        const filmSearch = shallow(<FilmSearch chosenFilm={chosenFilm2} />);
        expect(filmSearch.contains(
            <div className="chosen-film flex">
                <img src="https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg" alt="Guardians of the Galaxy Vol. 3" />
                <section>
                    <div className="flex">
                        <h1>Guardians of the Galaxy Vol. 3</h1>
                        <p className="rating">{chosenFilm.vote_average}</p>
                    </div>
                    <p>Tag line</p>
                    <div className="flex">
                        <p className="bold"></p>
                        <p className="bold"></p>
                    </div>
                    <p>The third film based on Marvel's Guardians of the Galaxy.</p>
                </section>
            </div>)).toBe(true);
    });
})



