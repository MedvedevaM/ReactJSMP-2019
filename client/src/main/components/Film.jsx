import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Genre from './Genre.jsx';

const Film = (props) => {
  const { poster_path, title, genres, release_date, id } = props;
  const releaseYear = release_date ? release_date.slice(0, 4) : null;
  return (
    <FilmWrapper>
      <NavLink to={`/film/${id}`}>
        <FilmImage data-film-id={id} src={poster_path} alt={title} />
      </NavLink>
      <FilmInfoWrapper>
        <NavLink to={`/film/${id}`}>
          <FilmTitle data-film-id={id}>{title}</FilmTitle>
        </NavLink>
        <FilmReleaseYear>{releaseYear}</FilmReleaseYear>
      </FilmInfoWrapper>
      <Genre genres={genres} />
    </FilmWrapper>
  );
};

export default Film;

// Styles

const FilmWrapper = styled.div`
    margin: 2.5rem;
    width: 20rem;
    & p,
    & div {
      padding: 1rem 0.5rem 0 0.5rem;
    }
    & p {
      color: #828282;
    }
`;
const FilmImage = styled.img`
    width: 20rem;
    height: 30rem;
    object-fit: fill;
    cursor: pointer;
`;

const FilmInfoWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const FilmTitle = styled.h3`
    text-transform: uppercase;
    margin: 0;
`;

const FilmReleaseYear = styled.time`
    border: 1px solid black;
    padding: 1px 6px;
    margin: 0 2px 0 0;
`;