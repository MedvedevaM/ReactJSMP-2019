import React from 'react';
import { Genre } from './Genre.jsx';

export const Film = (props) => {
    const { poster_path, title, genres, release_date, chooseFilm, id } = props;
    const release_year = release_date ? release_date.slice(0, 4) : null;
    return (
        <div className='film'>
            <img src={poster_path}/>
            <div className='flex'>
                <h3 id={id}>{title}</h3>
                <time className='release-year'>{release_year}</time>
            </div>
            <Genre genres={genres}/>
        </div>
    )
};