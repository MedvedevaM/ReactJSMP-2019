import React from "react";
import { RadioButtons } from "./RadioButtons.jsx";

export const FilmSearch = (props) => {
    const { chosenFilm, onSearchModeClick, onSearchParameterClick, searchBy } = props;
    if (chosenFilm) {
        const release_year = chosenFilm.release_date ? chosenFilm.release_date.slice(0, 4) : null;
        return (
            <header id="home" className="header-bg">
                <div className="transparent-black-header-bg">
                    <div className="container flex space-between">
                        <a href="#home" className="logo common-color-1">netflixroulette</a>
                        <button onClick={onSearchModeClick} className="search-button-default-mode common-color-1 bold">Search</button>
                    </div>
                    <div className="chosen-film flex">
                        <img src={chosenFilm.poster_path} alt={chosenFilm.title} />
                        <section>
                            <div className="flex">
                                <h1>{chosenFilm.title}</h1>
                                <p className="rating">{chosenFilm.vote_average}</p>
                            </div>
                            <p>{chosenFilm.tagline}</p>
                            <div className="flex">
                                <p className="bold">{release_year}</p>
                                <p className="bold">{chosenFilm.runtime ? `${chosenFilm.runtime} min` : null}</p>
                            </div>
                            <p>{chosenFilm.overview}</p>
                        </section>
                    </div>
                </div>
            </header>
        )
    }

    const searchParameters = ["Title", "Genre"];
    return (
      <header id="home" className="header-bg">
        <div className="transparent-black-header-bg">
          <div className="container">
            <a href="#home" className="logo common-color-1">
              netflixroulette
            </a>
            <h1>Find your movie</h1>
            <input className="search-input" type="text" value={props.value} onChange={props.searchFilms} />
            <i className="fa fa-search search-input-enter common-color-1" aria-hidden="true"/>
            <div className="flex search-parameters">
                <p>Search by</p>
                <RadioButtons onClick={onSearchParameterClick} searchBy={searchBy} parameters={searchParameters}/>
            </div>
          </div>
        </div>
      </header>
    );
};