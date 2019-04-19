import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchParameter, setSortParameter, setChosenFilm, fetchFilms, setSearchValue, searchFilms } from '../store/actions/actions';
import { getFilms, getChosenFilm, getFilmsQuantity, getSearchParameter, getSortParameter, getSearchValue, getFoundFilms } from '../store/reducers/selectors';
import FilmsContainer from './FilmsContainer.jsx';
import FilmSearch from './FilmSearch.jsx';

export class SearchPage extends Component {
  componentDidMount() {
    const { fetchFilms } = this.props;
    fetchFilms('http://reactjs-cdp.herokuapp.com/movies');
  }

  searchFilms = (event) => {
    const { films, setSearchValue, searchBy, searchFilms } = this.props;
    setSearchValue(event.target.value);
    searchFilms(event.target.value, films, searchBy);
  };

  onSearchModeClick = () => {
    const { setChosenFilm } = this.props;
    setChosenFilm(null);
  }

  onSearchParameterClick = (event) => {
    const { setSearchParameter } = this.props;
    const searchParameter = event.target.dataset.parameter;
    if (searchParameter) {
      setSearchParameter(searchParameter);
    }
  }

  onSortParameterClick = (event) => {
    const { setSortParameter, films } = this.props;
    const { sortParameter } = event.target.dataset;
    if (sortParameter) {
      setSortParameter(sortParameter);
      getFilms(films, sortParameter);
    }
  }

  chooseFilm = (event) => {
    const { setChosenFilm, films } = this.props;
    const chosenFilmId = event.target.dataset.filmId;
    if (chosenFilmId) {
      const chosenFilm = films.find(film => film.id === +chosenFilmId);
      setChosenFilm(chosenFilm);
    }
  }

  render() {
    return (
      <>
        <FilmSearch
          {...this.props}
          searchFilms={this.searchFilms}
          onSearchModeClick={this.onSearchModeClick}
          onSearchParameterClick={this.onSearchParameterClick}
        />
        <FilmsContainer
          {...this.props}
          chooseFilm={this.chooseFilm}
          onSortParameterClick={this.onSortParameterClick}
        />
        <footer>
          <div>
            <p className="logo common-color-1">netflixroulette</p>
          </div>
        </footer>
      </>
    );
  }
}

export const mapStateToProps = store => ({ films: getFilms(store),
  quantityOfFilms: getFilmsQuantity(store),
  chosenFilm: getChosenFilm(store),
  searchBy: getSearchParameter(store),
  searchValue: getSearchValue(store),
  sortBy: getSortParameter(store),
  foundFilms: getFoundFilms(store) });

export const mapDispatchToProps = dispatch => ({ setSearchParameter: parameter => dispatch(setSearchParameter(parameter)),
  setSearchValue: value => dispatch(setSearchValue(value)),
  setSortParameter: parameter => dispatch(setSortParameter(parameter)),
  setChosenFilm: film => dispatch(setChosenFilm(film)),
  fetchFilms: url => dispatch(fetchFilms(url)),
  getFilms: films => dispatch(getFilms(films)),
  searchFilms: (value, films, searchParameter) => dispatch(searchFilms(value, films, searchParameter)) });

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
