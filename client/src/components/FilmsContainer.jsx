import React from 'react';
import { Film } from './Film.jsx';
import { Genre } from './Genre.jsx';
import { RadioTitles } from "./RadioTitles.jsx";

export const FilmsContainer = (props) => {
    const { films, quantityOfFilms, chooseFilm, chosenFilm, sortBy, onSortParameterClick } = props;
    if (chosenFilm) {
        const formattedFilms = filterFilmsByGenre(films, chosenFilm.genres).map((film) => <Film key={film.id} chooseFilm={chooseFilm} {...film} />)
        return (
            <>
                <div className='search-results'>
                    <div className='container flex'>
                        <div className='flex'>
                            <p className='genre'>Films by</p>
                            <Genre genres={chosenFilm.genres} />
                        </div>
                    </div>
                </div>
                <div onClick={chooseFilm} className='flex films-container'>{formattedFilms}</div>
            </>
        )
    }

    const sortParameters = ["rating", "release date"];
    const formattedFilms = films.map((film) => <Film key={film.id} chooseFilm={chooseFilm} {...film} />);
    return (
        <>
            <div className='search-results'>
                <div className='container flex'>
                    <p>{quantityOfFilms} movies found</p>
                    <div onClick={onSortParameterClick} className='flex filter'>
                        <p>Sort by</p>
                        {/* <RadioTitles sortBy={sortBy} parameters={sortParameters} /> */}
                    </div>
                </div>
            </div>
            <div onClick={chooseFilm} className='flex films-container'>{formattedFilms}</div>
        </>
    )
};

function filterFilmsByGenre(films, neededGenres) {
    return films.filter(film => {
        return film.genres.some(genre => {
            return neededGenres.some(neededGenre => genre === neededGenre);
        });
    });
}