import React from "react";
import { shallow, configure } from "enzyme";
import { FilmSearch } from "../../main/components/FilmSearch.jsx";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const chosenFilm = {
    release_date: "2020-05-01",
    title: "Guardians of the Galaxy Vol. 3",
    vote_average: 8,
    runtime: 100,
    tagline: "Tag line",
    overview: "The third film based on Marvel's Guardians of the Galaxy.",
    poster_path: "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg"
};

it("renders correctly", () => {
    const filmSearch = shallow(<FilmSearch />);
    expect(filmSearch).toMatchSnapshot();
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

