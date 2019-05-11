import React from 'react';
import { NavLink } from 'react-router-dom';
import Genre from './Genre.jsx';

const Film = (props) => {
  const { poster_path, title, genres, release_date, id } = props;
  const releaseYear = release_date ? release_date.slice(0, 4) : null;
  return (
    <div className="film">
      <NavLink to={`/film/${id}`}>
        <img data-film-id={id} src={poster_path} alt={title} />
      </NavLink>
      <div className="flex">
        <NavLink to={`/film/${id}`}>
          <h3 data-film-id={id}>{title}</h3>
        </NavLink>
        
        <time className="release-year">{releaseYear}</time>
      </div>
      <Genre genres={genres} />
    </div>
  );
};

export default Film;
