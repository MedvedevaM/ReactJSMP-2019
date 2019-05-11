import React from 'react';
import SearchPage from './SearchPage.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

const App = ({ match: { params } }) => (
  <ErrorBoundary>
    <SearchPage chosenFilmId={params.id} searchValue={params.search} />
  </ErrorBoundary>
);

export default App;
