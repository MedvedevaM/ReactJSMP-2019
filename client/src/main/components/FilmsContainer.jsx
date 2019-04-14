import React from "react";
import Film from "./Film.jsx";
import Genre from "./Genre.jsx";

const FilmsContainer = (props) => {
  const { films, quantityOfFilms, chooseFilm, chosenFilm, sortBy, onSortParameterClick } = props;
  if (chosenFilm && films) {
    const formattedFilms = filterFilmsByGenre(films, chosenFilm.genres).map((film) => <Film key={film.id} chooseFilm={chooseFilm} {...film} />);
    return (
      <>
        <div className="search-results">
          <div className="container flex">
            <div className="flex">
              <p className="genre">Films by</p>
              <Genre genres={chosenFilm.genres} />
            </div>
          </div>
        </div>
        <div onClick={chooseFilm} className="flex films-container">{formattedFilms}</div>
      </>
    )
  }

  const formattedFilms = films ? films.map((film) => <Film key={film.id} chooseFilm={chooseFilm} {...film} />) : null;
  return (
    <>
      <div className="search-results">
        <div className="container flex">
          <p>{quantityOfFilms} movies found</p>
          <div onClick={onSortParameterClick} className="flex sorter">
            <p>Sort by</p>
            <ul onClick={onSortParameterClick} className="flex sorter">
              <li data-sort-parameter="release date" className={sortBy === "release date" ? "chosen-sort-parameter" : ""}>release date</li>
              <li data-sort-parameter="rating" className={sortBy === "rating" ? "chosen-sort-parameter" : ""}>rating</li>
            </ul>
          </div>
        </div>
      </div>
      <div onClick={chooseFilm} className="flex films-container">{formattedFilms}</div>
    </>
  )
};

export function filterFilmsByGenre(films, neededGenres) {
  return films.filter(film => {
    return film.genres.some(genre => {
      return neededGenres.some(neededGenre => genre === neededGenre);
    });
  });
}

export default FilmsContainer;