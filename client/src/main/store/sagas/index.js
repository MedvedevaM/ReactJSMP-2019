import { call, put, all, takeLatest } from 'redux-saga/effects';
import { FETCH_FILMS, SEARCH_FILMS, setFilms, searchFilms, setFoundFilms, setQuantityOfFilms, setSearchValue } from '../actions/actions';
import { callApi, checkMatching } from '../utils/utils.js';

function* watchGetFilms() {
  yield takeLatest(FETCH_FILMS, fetchFilms);
}
function* watchSearchFilms() {
  yield takeLatest(SEARCH_FILMS, handleSearchFilms);
}

export function* fetchFilms({ payload: { url, searchValue, searchParameter } }) {
  const { data } = yield call(callApi, url);
  yield put(setFilms(data.data));
  if (searchValue) {
    yield put(setSearchValue(searchValue));
    yield put(searchFilms(searchValue, data.data, searchParameter));
  } else {
    yield put(setFoundFilms(data.data));
    yield put(setQuantityOfFilms(data.data.length));
  }
}

export function* handleSearchFilms({ payload: { value, films, searchParameter } }) {
  if (searchParameter === 'Title' && value) {
    films = films.filter(film => checkMatching(value, film.title));
  }

  if (searchParameter === 'Genre' && value) {
    films = films.filter(film => film.genres.some(genre => checkMatching(value, genre)));
  }

  yield put(setFoundFilms(films));
  yield put(setQuantityOfFilms(films.length));
}

function* appSaga() {
  yield all([
    watchGetFilms(),
    watchSearchFilms(),
  ]);

}

export default appSaga;
