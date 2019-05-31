import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchParameter,
  setSortParameter,
  setChosenFilm,
  fetchFilmsFromApi,
  setSearchValue,
  searchFilms } from '../store/actions/actions';
import { getFilms,
  getChosenFilm,
  getFilmsQuantity,
  getSearchParameter,
  getSortParameter,
  getFoundFilms } from '../store/reducers/selectors';
import { debounce } from '../store/utils/utils';
import FilmsContainer from './FilmsContainer.jsx';
import FilmSearch from './FilmSearch.jsx';

export class SearchPage extends Component {
  componentWillMount() {
    const { fetchFilmsFromApi, searchValue, searchBy } = this.props;
    fetchFilmsFromApi('http://reactjs-cdp.herokuapp.com/movies', searchValue, searchBy);
  }

  searchFilms = (event) => {
    const { films, setSearchValue, searchBy, searchFilms, history } = this.props;
    const searchValue = event.target.value;
    debounce(() => {
      setSearchValue(searchValue);
      searchFilms(searchValue, films, searchBy);
      history.push(`/search/${searchValue}`);
    }, 0)(0);
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

export const mapStateToProps = (store, ownProps) => ({ films: getFilms(store.films),
  quantityOfFilms: getFilmsQuantity(store),
  chosenFilm: getChosenFilm(store, ownProps.chosenFilmId),
  searchBy: getSearchParameter(store),
  searchValue: ownProps.searchValue || '',
  sortBy: getSortParameter(store),
  foundFilms: getFoundFilms(store) });

export const mapDispatchToProps = { setSearchParameter,
  setSearchValue,
  setSortParameter,
  setChosenFilm,
  fetchFilmsFromApi,
  getFilms,
  searchFilms };

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
