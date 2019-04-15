import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchParameter, setSortParameter, setChosenFilm, fetchFilms, getSortedFilms } from './../store/actions/actions';
import { getFilms, getChosenFilm, getFilmsQuantity, getSearchParameter, getSortParameter } from './../store/reducers/reducers';
import FilmsContainer from './FilmsContainer.jsx';
import FilmSearch from './FilmSearch.jsx';

export class SearchPage extends Component {
  componentDidMount() {
    this.props.fetchFilms('http://reactjs-cdp.herokuapp.com/movies');
  }

  searchFilms = () => { };

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
    const { setSortParameter } = this.props;
    const sortParameter = event.target.dataset.sortParameter;
    if (sortParameter) {
      setSortParameter(sortParameter);
      getSortedFilms(films, sortParameter);
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

const mapStateToProps = (store) => {
  return {
    films: getFilms(store),
    quantityOfFilms: getFilmsQuantity(store),
    chosenFilm: getChosenFilm(store),
    searchBy: getSearchParameter(store),
    sortBy: getSortParameter(store),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchParameter: (parameter) => dispatch(setSearchParameter(parameter)),
    setSortParameter: (parameter) => dispatch(setSortParameter(parameter)),
    setChosenFilm: (film) => dispatch(setChosenFilm(film)),
    fetchFilms: (url) => dispatch(fetchFilms(url)),
    getSortedFilms: (films, parameter) => dispatch(getSortedFilms(films, parameter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);