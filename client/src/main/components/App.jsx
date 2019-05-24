import React from 'react';
import { hot } from 'react-hot-loader';
import SearchPage from './SearchPage.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

const App = ({ match: { params }, history }) => (
  <ErrorBoundary>
    <SearchPage history={history} chosenFilmId={params.id} searchValue={params.search} />
  </ErrorBoundary>
);

export default hot(module)(App);
