import React from 'react';
import './../css/font-awesome/css/font-awesome.min.css';

export const FilmSearch = (props) => {
    const { chosenFilm, onSearchModeClick, onSearchParameterButtonClick, searchBy } = props;
    if (chosenFilm) {
        const release_year = chosenFilm.release_date ? chosenFilm.release_date.slice(0, 4) : null;
        return (
            <header id='home' className="header-bg">
                <div className="transparent-black-header-bg">
                    <div className="container flex space-between">
                        <a href='#home' className='logo'>netflixroulette</a>
                        <button onClick={onSearchModeClick} className='search-button-default-mode bold'>Search</button>
                    </div>
                    <div className='chosen-film flex'>
                        <img src={chosenFilm.poster_path} />
                        <section>
                            <div className='flex'>
                                <h1>{chosenFilm.title}</h1>
                                <p className='rating'>{chosenFilm.vote_average}</p>
                            </div>
                            <p>{chosenFilm.tagline}</p>
                            <div className='flex'>
                                <p className='bold'>{release_year}</p>
                                <p className='bold'>{chosenFilm.runtime ? `${chosenFilm.runtime} min` : null}</p>
                            </div>
                            <p>{chosenFilm.overview}</p>
                        </section>
                    </div>
                </div>
            </header>
        )
    }

    const chosenParameter = 'search-parameters uppercase bold chosen-parameter';
    const notChosenParameter = 'search-parameters uppercase bold';
    return (
        <header id='home' className="header-bg">
            <div className="transparent-black-header-bg">
                <div className="container">
                    <a href='#home' className='logo'>netflixroulette</a>
                    <h1>Find your movie</h1>
                    <input className='search-input' type='text' value={props.value} onChange={props.searchFilms}></input>
                    <i className="fa fa-search search-input-enter" aria-hidden="true"></i>
                    <div className='flex search-parameters' onClick={onSearchParameterButtonClick}>
                        <p>Search by</p>
                        <button id='Title' className={searchBy === 'Title' ? chosenParameter : notChosenParameter}>Title</button>
                        <button id='Genre' className={searchBy === 'Genre' ? chosenParameter : notChosenParameter}>Genre</button>
                    </div>
                </div>
            </div>
        </header>
    )
};