import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFilms, getQuantityOfFilms, setSearchParameter, setSortParameter, setChosenFilm } from './../store/actions/actions';
import FilmsContainer from './FilmsContainer.jsx';
import FilmSearch from './FilmSearch.jsx';

export class SearchPage extends Component {
  componentDidMount() {
    this.fetchFilms();
  }

  fetchFilms = () => {
    const { getFilms, getQuantityOfFilms } = this.props;
    return fetch('http://reactjs-cdp.herokuapp.com/movies', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
    .then(response => response.json())
    .then(result => {
      getFilms(result.data);
      getQuantityOfFilms(result.data.length);
    })
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
    }
  }

  chooseFilm = (event) => {
    const { setChosenFilm, films } = this.props;
    const chosenFilm = event.target.dataset.filmId;
    if (chosenFilm) {
      setChosenFilm(films.find(film => film.id == chosenFilm));
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

const mapStateToProps = (state) => {
  return {
    films: state.films.films,
    quantityOfFilms: state.films.quantityOfFilms,
    chosenFilm: state.films.chosenFilm,
    searchBy: state.films.searchBy,
    sortBy: state.films.sortBy,
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    getFilms: bindActionCreators(getFilms, dispatch),
    getQuantityOfFilms: bindActionCreators(getQuantityOfFilms, dispatch),
    setSearchParameter: bindActionCreators(setSearchParameter, dispatch),
    setSortParameter: bindActionCreators(setSortParameter, dispatch),
    setChosenFilm: bindActionCreators(setChosenFilm, dispatch),
  }
}

const WrappedSearchPage = connect(mapStateToProps, mapActionsToProps)(SearchPage);
export default WrappedSearchPage;